# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

Click Rush — a click speed game used as a learning repo for Claude Code onboarding. Click the button as many times as possible in 10 seconds; high score persists via `localStorage`.

## Commands

```bash
npm run dev       # dev server with HMR (http://localhost:5173)
npm run build     # type-check (tsc -b) then production build
npm run lint      # ESLint across all .ts/.tsx files
npm run preview   # serve the production build locally
```

No test runner is configured.

## Architecture

All game state lives in `useGame` ([src/hooks/useGame.ts](src/hooks/useGame.ts)) and is exposed app-wide through `GameProvider` / `useGameContext` ([src/context/GameContext.tsx](src/context/GameContext.tsx)). The context type is derived directly from `useGame`'s return value (`ReturnType<typeof useGame>`), so extending state means only touching `useGame`.

`GameProvider` wraps the entire app in [src/main.tsx](src/main.tsx), so every component can call `useGameContext()` without prop-drilling.

`GamePage` ([src/pages/GamePage.tsx](src/pages/GamePage.tsx)) is the only route (`/`). It pulls everything from context and composes the three pure display components: `ScoreBoard`, `Timer`, and `ClickButton`.

`useLocalStorage` ([src/hooks/useLocalStorage.ts](src/hooks/useLocalStorage.ts)) is a generic hook used only for persisting the high score key `clickrush-highscore`.

## Stack

- React 19 + TypeScript + Vite 8
- Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin, no `tailwind.config.js`)
- React Router v7 (BrowserRouter, single route)
