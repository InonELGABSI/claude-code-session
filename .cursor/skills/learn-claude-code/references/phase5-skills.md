# Phase 5: Skills & Superpowers

## Option A: Official Anthropic Skills

- Claude Desktop: Extensions tab
- CLI: `/skills`
- Anthropic Coding Library: browse official coding skills and workflows

Key ones: `security-review`, `review` (PR review), `ultrareview`, `init`
Ask: **"Want to explore Anthropic coding library superpowers now?"**

## Option B: Community Skills

Search GitHub: `claude-code-skills` or `claude-skill`

## Option C: Build a Custom Skill

Ask: **"Want to build one? Pick:"**

1. **Jira Task Updater** — finishes a feature → updates linked ticket (status + PR link)
2. **PR Review Responder** — reads PR comments → drafts responses or fixes
3. **Something else?**

If they pick one, create `.claude/skills/<name>/SKILL.md`. One skill, one job.

---

## Completion

Show summary:
```
✓ Docs read
✓ MCP connectors set up
✓ Repo initialized with CLAUDE.md
✓ .claude/ structure created
✓ Sub-folder context files added
✓ Skills installed or created
```

Next moves:
- Ask Claude to read a Jira ticket and start coding
- Try `/review` on an open PR
- Try `/ultrareview` on a complex PR
