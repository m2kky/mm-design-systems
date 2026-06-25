# 🎨 MM Design Systems

[![NPM Version](https://img.shields.io/npm/v/mm-design-systems?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/mm-design-systems)
[![Agent Skills](https://img.shields.io/badge/Agent_Skills-Ready-blue?style=for-the-badge)](https://github.com/m2kky/mm-design-systems)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A production-grade **Agent Skills Plugin** for AI Coding Assistants. `mm-design-systems` provides "MM Signature Edition" **Design Guidelines, System Design, UI/UX Principles, and Frontend Architecture** for multiple world-class design systems.

It is expertly engineered to give AI agents (like Claude, Gemini, Codex, and Cursor) access to strict, premium design standards when creating or updating UI components and complex frontend layouts. 

Built with ❤️ by **Muhammed Mekky**.

---

## 🎯 About (System Design & UI/UX)
If you are looking for resources on **system design, UI/UX, frontend architecture, and design systems** for AI agents, you are in the right place! This repository covers everything from typography and spacing to advanced glassmorphism and Material 3 state management.

---

## 🌟 Included Design Systems

`mm-design-systems` bundles the following high-end skills:

| Skill Command | Design System | Description |
| :--- | :--- | :--- |
| **`$mm-hig-design`** | Apple HIG | Apple Human Interface Guidelines *(MM Edition)* |
| **`$mm-atlassian-design`** | Atlassian | Atlassian Design System *(MM Edition)* |
| **`$mm-heroui-design`** | HeroUI | HeroUI Design System *(MM Edition)* |
| **`$mm-liquid-glass-design`** | Liquid Glass | Liquid Glass Design System *(MM Edition)* |
| **`$mm-material-3-design`** | Material 3 | Material 3 Design System *(MM Edition)* |

---

## 🚀 Installation

You can install these skills globally or per-project using our built-in npm CLI tool.

### npm CLI (Recommended)

Install a native skill or adapter with npm:

```bash
npx mm-design-systems install claude
npx mm-design-systems install claude --scope project
npx mm-design-systems install antigravity
npx mm-design-systems install cursor --project .
```

If the npm package is not published yet, you can run it directly from GitHub:

```bash
npx github:m2kky/mm-design-systems install claude
```

### 💻 Native Agent Skills Paths

If you prefer installing manually, here is how they integrate into different agents:

| Agent / Tool | Global Install Path | Project Install Path | How to Invoke |
| --- | --- | --- | --- |
| **Google Antigravity** | `~/.gemini/config/plugins/mm-design-systems` | `.agents/plugins/mm-design-systems` | Ask to use *MM Design Systems* |
| **Claude Code** | `~/.claude/skills/mm-*` | `.claude/skills/mm-*` | `/mm-hig-design` etc. |
| **OpenAI Codex** | `~/.agents/skills/mm-*` | `.agents/skills/mm-*` | `$mm-hig-design` |

*(Note: Our installer script handles placing these folders for you!)*

### 🔌 Rule or Instruction Adapters (Cursor, Copilot, etc.)

Some agents do not load Agent Skills directories natively but rely on rule files (e.g., `.cursor/rules`, `AGENTS.md`). 
Run the following to automatically generate the required adapter instructions:

```bash
npx mm-design-systems install cursor
npx mm-design-systems install amazonq
```

---

## 💡 Usage Examples

Once installed, simply command your AI agent to apply a specific design system.

**Apple HIG Example:**
> "Use `$mm-hig-design` to recreate this iOS settings page following Apple's strict guidelines and MM signature touches."

**Atlassian Example:**
> "Review this React component dashboard and update it to perfectly match the `$mm-atlassian-design` specifications."

---

## 🛠️ Scaffold Script

The plugin includes a handy Python helper script (inherited from *Project Docs Builder*) to scaffold your project's documentation packs.

**Dry-run (Test):**
```bash
python scripts/scaffold_docs_pack.py /path/to/project --level full --dry-run
```

**Create files:**
```bash
python scripts/scaffold_docs_pack.py /path/to/project --level full
```

*(Supported levels: `lite`, `full`, `enterprise`)*

---

## 📄 License

MIT. See [LICENSE](LICENSE) for more details.
