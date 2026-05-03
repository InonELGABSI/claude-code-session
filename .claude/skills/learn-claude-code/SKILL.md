---
name: learn-claude-code
description: Guided Claude Code onboarding for beginner and junior full-stack developers. Five interactive phases: docs, MCP connectors, repo init, CLAUDE.md structure, and skills. Use this skill when the user wants to learn Claude Code, asks how to get started, or invokes /learn-claude-code. Always check for saved progress first — this is a resumable multi-session journey.
---

# Claude Code Learning Session

Five phases. One at a time. Always resume from saved progress.

## Start of every session

1. Check `.claude/learning-progress.json`
   - Exists → show current phase, ask: **"Continue from Phase X or restart?"**
   - Missing → start Phase 1 fresh, create the file, explain memory options (read `references/memory-explainer.md`)

Progress file shape:
```json
{ "current_phase": 1, "completed_phases": [], "started_at": "", "last_updated": "" }
```

Save after every completed phase.

---

## Phases

| # | Name | Reference |
|---|------|-----------|
| 1 | Docs Overview | `references/phase1-docs.md` |
| 2 | MCP Connectors | `references/phase2-mcp.md` |
| 3 | Init the Repo | `references/phase3-init.md` |
| 4 | Sub-folder CLAUDE.md | `references/phase4-structure.md` |
| 5 | Skills & Superpowers | `references/phase5-skills.md` |

Read the reference file for the current phase, execute it, then wait for **"continue"** before advancing.

---

## Rules

- One phase per message block. Never skip ahead.
- Use the user's actual file names, not generic examples.
- If confused, ask one clarifying question — then continue.
- All shell commands in code blocks.
