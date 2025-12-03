# Developer guide — react_mui

This short, front-facing guide helps a new developer get productive quickly.

## Quick start (Windows PowerShell)
Install deps, run the dev server, build, preview, and lint:

```powershell
npm ci
npm run dev    # open http://localhost:5173
npm run build  # outputs to dist/
npm run preview
npm run lint
```

## What this project is
- Stack: Vite + React (SWC plugin) + MUI v7 + react-router + motion.
- Purpose: simple single-page static site UI showing MUI theming and client-side routing.

## Where to look first
- `src/main.jsx` — app bootstrap and `ThemeProvider`.
- `src/theme.jsx` — theme tokens (primary: `#5c715e`).
- `src/App.jsx` — layout and routes (Navbar + Routes + Footer).
- `src/shared-theme/` — theme helpers (e.g., `AppTheme`, `ColorModeSelect`).
- `src/pages/*`, `src/components/*` — pages and reusable UI.

## Conventions & patterns
- Use MUI `sx` and `styled` for styling and prefer theme tokens from `src/theme.jsx`.
- Several form components use direct DOM lookups for validation (e.g. `document.getElementById('email')` in `src/components/SignIn.jsx`). If you refactor to use refs/hooks, keep DOM ids consistent or update callers.
- Routing uses `Routes` + `Route element={...}` and navigation uses `NavLink` (see `src/components/Navbar/Navigation.jsx`).
- Static assets should be imported from `src/assets/*` (case-sensitive on Linux).

## Common tasks
- Add a page: create `src/pages/MyPage.jsx`, add a `<Route />` in `src/App.jsx`, and add a `NavLink` entry in the navbar.
- Change theme tokens: update `src/theme.jsx` and search for hard-coded colors.
- Run the app with Docker (optional): `docker-compose` has entries for `react-dev` (5173) and `react-prod` (8080).

## Build & CI notes
- Reproducible install for CI: use `npm ci`.
- Production build is a static `dist/` folder served by Nginx in `Dockerfile` (port 8080).

## More details
Longer, developer-oriented guidance is in `doc/DEVELOPER_OVERVIEW.md` and machine-oriented agent instructions are in `.github/copilot-instructions.md`.

If you'd like this converted into `CONTRIBUTING.md`, or want a short PR checklist added (build, lint, visual smoke test), tell me which you'd prefer and I will add it.
