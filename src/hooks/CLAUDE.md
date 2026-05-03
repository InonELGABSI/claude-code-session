# Hooks
- Prefix custom hooks with `use` and export one main hook per file.
- Keep each hook focused on a single concern (`useGame`, `useLocalStorage`).
- Prefer pure logic in hooks; keep UI rendering out of hooks.
- If logic is reused across 3+ places, extract it into `src/hooks/`.
