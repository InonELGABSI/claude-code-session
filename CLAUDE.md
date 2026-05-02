# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server with HMR
npm run build     # tsc type-check + vite production build
npm run lint      # eslint across all .ts/.tsx files
npm run preview   # serve the production build locally
```

No test runner is configured. If tests are added, update this file.

## Stack

React 19 + TypeScript 6 + Vite 8. No router, no state library — single-page app with one root component.

## Architecture

- `src/main.tsx` — mounts `<App>` into `#root` inside `StrictMode`
- `src/App.tsx` — entire app lives here for now; expand by adding component files under `src/`
- `public/icons.svg` — SVG sprite; components reference icons via `<use href="/icons.svg#<id>">`
- CSS is component-local (`App.css`) plus global reset/variables in `src/index.css`

TypeScript is split across two configs: `tsconfig.app.json` targets the browser bundle, `tsconfig.node.json` covers Vite config files.

ESLint enforces `react-hooks` and `react-refresh` rules on all `.ts`/`.tsx` files; `dist/` is ignored.
