# MM Design Systems

Production-grade Agent Skills Plugin containing the "MM Signature Edition" design guidelines for multiple world-class design systems.

It is designed to give AI agents access to strict, premium design standards when creating or updating UI components and layouts.

Built by muhammed mekky.

## Included Skills

`mm-design-systems` bundles the following skills:

- `mm-hig-design`: Apple Human Interface Guidelines (MM Edition)
- `mm-atlassian-design`: Atlassian Design System (MM Edition)
- `mm-heroui-design`: HeroUI Design System (MM Edition)
- `mm-liquid-glass-design`: Liquid Glass Design System (MM Edition)
- `mm-material-3-design`: Material 3 Design System (MM Edition)

## Install

### npm CLI

Install a native skill or adapter with npm:

```bash
npx mm-design-systems install claude
npx mm-design-systems install claude --scope project
npx mm-design-systems install antigravity
npx mm-design-systems install cursor --project .
```

Useful commands:

```bash
npx mm-design-systems paths
npx mm-design-systems adapters
```

If the npm package is not available yet, use the GitHub fallback:

```bash
npx github:m2kky/mm-design-systems install claude
```

### Native Agent Skills

| Tool | User/global install | Project install | Invoke |
| --- | --- | --- | --- |
| Google Antigravity | `~/.gemini/config/plugins/mm-design-systems` | `.agents/plugins/mm-design-systems` | Ask Antigravity to use MM Design Systems |
| Claude Code | `~/.claude/skills/mm-*` | `.claude/skills/mm-*` | `/mm-hig-design` etc. |
| OpenAI Codex | `~/.agents/skills/mm-*` | `.agents/skills/mm-*` | `$mm-hig-design` |

macOS/Linux examples (Antigravity):

```bash
git clone https://github.com/m2kky/mm-design-systems.git ~/.gemini/config/plugins/mm-design-systems
```

Windows PowerShell examples (Antigravity):

```powershell
git clone https://github.com/m2kky/mm-design-systems.git "$env:USERPROFILE\.gemini\config\plugins\mm-design-systems"
```

### Rule or Instruction Adapters

Some agents do not load Agent Skills directories natively. Run `npx mm-design-systems install [adapter]` to add the necessary `AGENTS.md` block or `.cursor/rules` files.

## Usage

Example prompts:

```text
Use $mm-hig-design to recreate this settings page following Apple's guidelines.
```

```text
Check if this React component follows the Atlassian guidelines using $mm-atlassian-design.
```

## Scaffold Script

The plugin includes a small Python helper to scaffold documentation packs, inherited from Project Docs Builder.

Dry-run:

```bash
python scripts/scaffold_docs_pack.py /path/to/project --level full --dry-run
```

Create files:

```bash
python scripts/scaffold_docs_pack.py /path/to/project --level full
```

## Version

Current version: `1.0.0`

## License

MIT. See [LICENSE](LICENSE).
