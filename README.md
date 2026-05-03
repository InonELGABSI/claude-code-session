# Click Rush

A click speed game built with React 19, TypeScript, Vite, and Tailwind CSS. Used as a learning repo for Claude Code onboarding.

## The Game

Click the button as many times as you can in 60 seconds. Your high score is saved across sessions via `localStorage`.

## Stack

- **React 19** + **TypeScript** + **Vite 8**
- **Tailwind CSS v4** for styling
- **React Router v6** for routing

## Folder Structure

```
src/
├── components/     # Reusable UI pieces (Timer, ClickButton, ScoreBoard)
├── context/        # GameContext — provides game state to the tree
├── hooks/          # useGame (game logic), useLocalStorage (persistence)
├── pages/          # GamePage — assembles components into a full screen
└── services/       # Reserved for future API calls
```

## Commands

```bash
npm run dev       # start dev server with HMR
npm run build     # type-check + production build
npm run lint      # ESLint across all .ts/.tsx files
npm run preview   # serve the production build locally
```
