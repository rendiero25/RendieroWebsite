# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # ESLint check
```

There are no tests in this project.

## Architecture

Personal portfolio SPA for Rendy Norman Tomaluweng, built with React 19 + Vite + Tailwind CSS v4.

**Routing** — `src/App.jsx` defines four routes via React Router DOM:
- `/` → `Index` (landing page, no header rendered here)
- `/about-me` → `AboutMe`
- `/portfolio` → `Portfolio`
- `/contact` → `Contact`

The `Header` component is conditionally excluded on `/` via the `noHeader` array in `AppContent`.

**Global state** — `src/context/HeaderContext.jsx` holds only the mobile nav open/close boolean (`isOpen`). Consumed by `Header` via `useHeaderContext()`.

**Portfolio data** — `src/data/portfolio.json` is the single source of truth for all portfolio projects. Each entry has `id`, `type`, `title`, `description`, `link`, and `techIcons` (array of public asset paths). The `Portfolio` page lazy-imports this file via dynamic `import()`.

**Public assets** — Static images live in `public/` and are referenced with absolute paths (e.g. `/AboutMe/reactjs.png`). The portfolio background uses `public/bg.jpg`.

**Styling** — Tailwind v4 is configured via the `@tailwindcss/vite` Vite plugin (not PostCSS). Custom tokens are defined in `src/index.css` under `@theme`:
- Fonts: `font-primary` (Outfit), `font-secondary` (Bebas Neue)
- Colors: `bg-background` (#282C38), `bg-black` (#1e1e1e)
- Breakpoint: `3xl` at 120rem

**Animations** — `motion/react` (Framer Motion) is used throughout for entrance animations and interactive states. The `Portfolio` page additionally uses Vanta.js birds background (requires `three` as a peer dep).

**Custom cursor** — Loaded globally via CDN `<script>` in `index.html` using the `kursor` library (type 1). Not managed by React.

**Deployment** — Hosted on Vercel. `vercel.json` rewrites all routes to `/index.html` to support client-side routing.
