# Phase 3: Init the Repo

## Step 1: /init

```
/init
```

Scans the project and creates `CLAUDE.md` at the root — the most important file. Claude reads it automatically every session.

After it runs, review together:
- Build/run commands correct?
- Stack description accurate?
- Anything sensitive or wrong?

Edit until it's accurate.

## Step 2: .claude/ structure

```bash
ls -la .claude/
```

Create the standard layout if missing:

```bash
mkdir -p .claude/skills .claude/agents
echo ".claude/settings.local.json" >> .gitignore
```

```
.claude/
├── settings.json          ← permissions, tools, model config
├── settings.local.json    ← personal overrides (gitignored)
├── skills/                ← project-specific skills
└── agents/                ← sub-agent configs
```
