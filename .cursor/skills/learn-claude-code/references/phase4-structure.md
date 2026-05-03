# Phase 4: Sub-folder CLAUDE.md Files

Adding `CLAUDE.md` inside subdirectories gives Claude scoped context for each area of the codebase.

First, check what folders exist:
```bash
ls src/
```

Then create a `CLAUDE.md` in each relevant folder. Use these as starting templates — customize to what's actually true about the project:

**`src/components/CLAUDE.md`**
```markdown
# Components
- Functional components only
- Props interfaces above the component in the same file
- PascalCase filenames
- No prop drilling beyond 2 levels — use context
```

**`src/hooks/CLAUDE.md`**
```markdown
# Hooks
- Prefix with `use`
- One concern per hook
- Move to `src/hooks/` if used in 3+ places
```

**`src/tests/` or `__tests__/CLAUDE.md`** (if exists)
```markdown
# Tests
- Framework: [Jest / Vitest / etc.]
- Files: `[name].test.ts`
- Test behavior, not implementation
```

Adapt folder names and rules to match the actual project.
