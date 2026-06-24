#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");

const packageRoot = path.resolve(__dirname, "..");
const pluginName = "mm-design-systems";
const skills = [
  "mm-hig-design",
  "mm-atlassian-design",
  "mm-heroui-design",
  "mm-liquid-glass-design",
  "mm-material-3-design"
];

const adapterTargets = {
  amazonq: ".amazonq/rules/mm-design-systems.md",
  kiro: ".kiro/steering/mm-design-systems.md",
  cursor: ".cursor/rules/mm-design-systems.mdc",
  copilot: ".github/instructions/mm-design-systems.instructions.md",
  "github-copilot": ".github/instructions/mm-design-systems.instructions.md",
  cline: ".clinerules/mm-design-systems.md",
  roo: ".roo/rules/mm-design-systems.md",
  continue: ".continue/rules/mm-design-systems.md",
  windsurf: ".windsurf/rules/mm-design-systems.md",
  devin: ".devin/rules/mm-design-systems.md",
};

const agentsMdTargets = new Set(["agents", "agents-md", "opencode", "aider", "zed", "junie"]);
const nativeTargets = new Set(["codex", "codex-legacy", "claude", "antigravity", "copilot-skill", "vscode"]);
const adapterAliases = new Set([...Object.keys(adapterTargets), ...agentsMdTargets, "gemini"]);

main(process.argv.slice(2));

function main(argv) {
  const command = argv[0] || "help";
  const rest = argv.slice(1);

  try {
    if (command === "help" || command === "--help" || command === "-h") return printHelp();
    if (command === "paths") return printPaths();
    if (command === "adapters") return printAdapters();
    if (command === "install") return installCommand(rest);
    if (command === "adapter") return adapterCommand(rest);
    if (command === "scaffold") return scaffoldCommand(rest);
    if (command === "version" || command === "--version" || command === "-v") return printVersion();

    fail(`Unknown command: ${command}`);
  } catch (error) {
    fail(error.message);
  }
}

function installCommand(argv) {
  const options = parseOptions(argv);
  const target = (options.positionals[0] || options.target || "codex").toLowerCase();
  const scope = (options.scope || "user").toLowerCase();
  const projectRoot = path.resolve(options.project || process.cwd());

  if (target === "all") {
    for (const nativeTarget of ["codex", "claude", "antigravity"]) {
      installNative(nativeTarget, { ...options, scope, projectRoot });
    }
    return;
  }

  if (nativeTargets.has(target)) {
    return installNative(target, { ...options, scope, projectRoot });
  }

  if (adapterAliases.has(target)) {
    return installAdapter(target, { ...options, projectRoot });
  }

  fail(`Unknown install target: ${target}`);
}

function adapterCommand(argv) {
  const options = parseOptions(argv);
  const target = (options.positionals[0] || options.target || "amazonq").toLowerCase();
  const projectRoot = path.resolve(options.project || process.cwd());
  return installAdapter(target, { ...options, projectRoot });
}

function installNative(target, options) {
  // If antigravity, install as plugin
  if (target === "antigravity") {
    const destination = options.scope === "project" 
        ? path.join(options.projectRoot, ".agents", "plugins", pluginName)
        : path.join(os.homedir(), ".gemini", "config", "plugins", pluginName);
    copyPlugin(destination, options);
    return logDone(options.dryRun, `Installed ${target} plugin at ${destination}`);
  }

  // Otherwise, install as separate skills
  for (const skill of skills) {
    const destination = nativeSkillDestination(target, skill, options.scope, options.projectRoot);
    copyIndividualSkill(skill, destination, options);
    logDone(options.dryRun, `Installed ${skill} for ${target} at ${destination}`);
  }
}

function installAdapter(target, options) {
  const projectRoot = path.resolve(options.projectRoot || process.cwd());
  const localPluginDir = path.join(projectRoot, "tools", pluginName);
  copyPlugin(localPluginDir, options);

  if (agentsMdTargets.has(target)) {
    const agentsPath = path.join(projectRoot, "AGENTS.md");
    writeMarkedBlock(agentsPath, adapterBlock("tools/" + pluginName), options);
    return logDone(options.dryRun, `Installed AGENTS.md adapter at ${agentsPath}`);
  }

  if (target === "gemini") {
    const geminiPath = path.join(projectRoot, "GEMINI.md");
    writeMarkedBlock(geminiPath, adapterBlock("tools/" + pluginName), options);
    return logDone(options.dryRun, `Installed GEMINI.md adapter at ${geminiPath}`);
  }

  const relativePath = adapterTargets[target];
  if (!relativePath) fail(`Unknown adapter target: ${target}`);

  const filePath = path.join(projectRoot, relativePath);
  let content = adapterBlock("tools/" + pluginName);
  if (target === "copilot" || target === "github-copilot") {
    content = `---\napplyTo: "**"\n---\n\n${content}`;
  }
  writeFileSafe(filePath, content, options);
  logDone(options.dryRun, `Installed ${target} adapter at ${filePath}`);
}

function scaffoldCommand(argv) {
  const options = parseOptions(argv);
  const destination = path.resolve(options.positionals[0] || process.cwd());
  const level = options.level || "full";
  const script = path.join(packageRoot, "scripts", "scaffold_docs_pack.py");
  const args = [script, destination, "--level", level];
  if (options.dryRun) args.push("--dry-run");

  const python = findPython();
  if (!python) {
    fail("Python was not found. Install Python or run scripts/scaffold_docs_pack.py manually from the repository.");
  }

  const result = spawnSync(python, args, { stdio: "inherit" });
  process.exitCode = result.status || 0;
}

function nativeSkillDestination(target, skill, scope, projectRoot) {
  if (target === "codex-legacy") return path.join(os.homedir(), ".codex", "skills", skill);
  if (target === "copilot-skill" || target === "vscode") return path.join(projectRoot, ".github", "skills", skill);

  if (scope === "project") {
    if (target === "claude") return path.join(projectRoot, ".claude", "skills", skill);
    if (target === "codex") return path.join(projectRoot, ".agents", "skills", skill);
  }

  if (target === "codex") return path.join(os.homedir(), ".agents", "skills", skill);
  if (target === "claude") return path.join(os.homedir(), ".claude", "skills", skill);

  fail(`Unsupported native target/scope pair: ${target}/${scope}`);
}

function copyPlugin(destination, options) {
  if (options.dryRun) return log(`Would copy plugin to ${destination}`);
  if (fs.existsSync(destination)) {
    if (!options.force) fail(`${destination} already exists. Re-run with --force to replace it.`);
    fs.rmSync(destination, { recursive: true, force: true });
  }
  fs.mkdirSync(destination, { recursive: true });
  for (const entry of ["plugin.json", "skills", "scripts", "README.md", "LICENSE"]) {
    const source = path.join(packageRoot, entry);
    if (!fs.existsSync(source)) continue;
    const target = path.join(destination, entry);
    fs.cpSync(source, target, { recursive: true });
  }
}

function copyIndividualSkill(skill, destination, options) {
  if (options.dryRun) return log(`Would copy ${skill} to ${destination}`);
  if (fs.existsSync(destination)) {
    if (!options.force) fail(`${destination} already exists. Re-run with --force to replace it.`);
    fs.rmSync(destination, { recursive: true, force: true });
  }
  fs.mkdirSync(destination, { recursive: true });
  const source = path.join(packageRoot, "skills", skill);
  if (fs.existsSync(source)) {
    fs.cpSync(source, destination, { recursive: true });
  }
}

function adapterBlock(pluginPath) {
  return [
    "# MM Design Systems",
    "",
    "When asked to create, review, or update UI components, always apply the MM Design Systems guidelines.",
    "",
    `Read the skills located in \`${pluginPath}/skills\` for guidelines on HIG, Atlassian, HeroUI, Liquid Glass, and Material 3 depending on the project requirements.`,
    ""
  ].join("\n");
}

function writeMarkedBlock(filePath, block, options) {
  const start = "<!-- mm-design-systems:start -->";
  const end = "<!-- mm-design-systems:end -->";
  const wrapped = `${start}\n${block.trim()}\n${end}\n`;
  const existing = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
  let next = existing;

  if (existing.includes(start) && existing.includes(end)) {
    next = existing.replace(new RegExp(`${escapeRegExp(start)}[\\s\\S]*?${escapeRegExp(end)}\\n?`), wrapped);
  } else {
    next = `${existing.trimEnd()}${existing.trim() ? "\n\n" : ""}${wrapped}`;
  }

  writeFileSafe(filePath, next, { ...options, allowExisting: true });
}

function writeFileSafe(filePath, content, options) {
  if (options.dryRun) return log(`Would write ${filePath}`);
  if (fs.existsSync(filePath) && !options.force && !options.allowExisting) {
    fail(`${filePath} already exists. Re-run with --force to replace it.`);
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content.endsWith("\n") ? content : `${content}\n`, "utf8");
}

function parseOptions(argv) {
  const options = { positionals: [] };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--force") options.force = true;
    else if (arg === "--dry-run") options.dryRun = true;
    else if (arg === "--target") options.target = valueFor(argv, ++index, arg);
    else if (arg === "--scope") options.scope = valueFor(argv, ++index, arg);
    else if (arg === "--project") options.project = valueFor(argv, ++index, arg);
    else if (arg === "--level") options.level = valueFor(argv, ++index, arg);
    else if (arg.startsWith("--")) fail(`Unknown option: ${arg}`);
    else options.positionals.push(arg);
  }
  return options;
}

function valueFor(argv, index, option) {
  if (!argv[index]) fail(`${option} requires a value.`);
  return argv[index];
}

function findPython() {
  for (const candidate of ["python", "python3"]) {
    const result = spawnSync(candidate, ["--version"], { stdio: "ignore" });
    if (result.status === 0) return candidate;
  }
  return null;
}

function printPaths() {
  const home = os.homedir();
  console.log([
    "Native skill paths:",
    `  Codex user:          ${path.join(home, ".agents", "skills", "[skill]")}`,
    `  Claude Code user:    ${path.join(home, ".claude", "skills", "[skill]")}`,
    `  Antigravity user:    ${path.join(home, ".gemini", "config", "plugins", pluginName)}`,
  ].join("\n"));
}

function printAdapters() {
  console.log([
    "Rule/instruction adapter targets:",
    ...Object.keys(adapterTargets).map((name) => `  ${name.padEnd(14)} ${adapterTargets[name]}`),
    "  agents-md      AGENTS.md",
    "  gemini         GEMINI.md",
  ].join("\n"));
}

function printVersion() {
  const versionPath = path.join(packageRoot, "VERSION");
  console.log(fs.readFileSync(versionPath, "utf8").trim());
}

function printHelp() {
  console.log(`MM Design Systems
Usage:
  mm-design-systems install [target] [--scope user|project] [--force] [--dry-run]
  mm-design-systems adapter [target] [--project path] [--force] [--dry-run]
  mm-design-systems scaffold [path] [--level lite|full|enterprise] [--dry-run]
  mm-design-systems paths
  mm-design-systems adapters

Native targets:
  codex, codex-legacy, claude, antigravity, copilot-skill, vscode, all

Adapter targets:
  amazonq, kiro, cursor, copilot, github-copilot, gemini, windsurf,
  devin, cline, roo, continue, agents-md, opencode, aider, zed, junie

Examples:
  npx mm-design-systems install claude
  npx mm-design-systems install antigravity --scope project
`);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function log(message) {
  console.log(message);
}

function logDone(dryRun, message) {
  console.log(`${dryRun ? "Dry run:" : "Done:"} ${message}`);
}

function fail(message) {
  console.error(`mm-design-systems: ${message}`);
  process.exit(1);
}
