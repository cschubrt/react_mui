<!--
Guidance for AI coding agents working on this repo. Keep this file concise and focused on
project-specific patterns, commands, and examples so an agent can be immediately productive.
-->

# Copilot instructions — react_mui

Short: This is a Vite + React project using MUI (Material UI) components and a small shared-theme layer.
Fast path: run `npm install` then `npm run dev` and open http://localhost:5173.

## Big picture
- Vite + React app (SWC plugin) with client-side routing in `src/App.jsx` (React Router v6/7 style).
- The theme is provided in `src/main.jsx` and created in `src/theme.jsx`. Several components wrap UI in a local `shared-theme` (see `src/shared-theme/*`).
- Pages live in `src/pages/*`; smaller UI pieces live in `src/components/*`. Assets (images & css) are in `src/assets/`.
- Production build is a static site (dist) served by Nginx in the provided `Dockerfile` / `compose.yaml` (nginx on port 8080).

## Key commands (developer workflows)
- Dev server (hot reload): `npm run dev` (Vite, default port 5173).
- Build production bundle: `npm run build` -> output `dist/`.
- Preview built site locally (Vite preview): `npm run preview`.
- Lint: `npm run lint` (uses ESLint configured at repo root).
- Docker (local): development and production containers are defined in `compose.yaml`.

	Use these PowerShell-friendly commands (they assume Docker Engine and Compose v2+):

	```powershell
	# Start development container (maps port 5173) and stream logs
	docker compose -f compose.yaml up --build react-dev

	# Start development container in background (detached)
	docker compose -f compose.yaml up --build -d react-dev

	# Start production container (serves built /dist on port 8080)
	docker compose -f compose.yaml up --build react-prod

	# Stop and remove containers started by compose
	docker compose -f compose.yaml down

	# Rebuild just the react-dev service
	docker compose -f compose.yaml build react-dev
	```

	If your environment uses the legacy `docker-compose` binary, replace `docker compose` with `docker-compose`.

If you need to reproduce CI/local builds: `npm ci` then `npm run build`.

## Project-specific conventions and patterns
- UI uses MUI v7 patterns (sx prop, `styled` from `@mui/material/styles`) and a small local theme wrapper. Prefer using the existing theme tokens in `src/theme.jsx`.
- The repo sometimes uses direct DOM lookups for simple form validation (e.g. `document.getElementById('email')` in `src/components/SignIn.jsx` and `src/components/SignUp.jsx`). Be conservative when refactoring these to hooks/refs: keep behavior identical unless you update the callers/tests.
- Routing uses `Routes` and `Route element={...}` in `src/App.jsx`. Navigation links are `NavLink` from `react-router-dom` (see `src/components/Navbar/Navigation.jsx`).
- Shared-site UI helpers live under `src/shared-theme` (e.g. `AppTheme`, `ColorModeSelect`) — prefer using these when adding pages or dialogs so color mode and theming remain consistent.
- Static assets: import images from `src/assets/*`. Public folder is minimal; prefer `src/assets` for image imports used by React components.

## Integration points & external deps
- MUI: `@mui/material`, `@mui/icons-material`, `@emotion/*`.
- Bundler: `vite` with `@vitejs/plugin-react-swc` (SWC based fast refresh).
- Router: `react-router-dom` (v7.x in package.json; code uses modern `Routes` API).
- Motion: `motion` package used in `src/pages/index.jsx`.
- Docker + Nginx: `Dockerfile`, `Dockerfile.dev`, `nginx.conf`, and `compose.yaml` are set up for build and production serving. Prod image serves `dist/` and exposes port 8080.

## Files to read first (examples)
- `src/main.jsx` — ThemeProvider + app bootstrap.
- `src/theme.jsx` — Theme tokens and palette (primary: `#5c715e`).
- `src/App.jsx` — Top-level routes and layout (Navbar + Footer + Routes).
- `src/components/Navbar/Navigation.jsx` — NavLink usage and responsive menu.
- `src/components/SignIn.jsx` and `src/components/SignUp.jsx` — form validation pattern (DOM queries + state for error messages).
- `vite.config.js` — dev server settings (host true, port 5173, strictPort true) and plugin.
- `Dockerfile`, `Dockerfile.dev`, `compose.yaml` — how the app is containerized for prod/dev.

## Quick guidance for changes
- Preserve theme usage and `AppTheme` wrappers unless intentionally changing global styles.
- Keep routes and `NavLink` paths stable to avoid breaking navigation tests or links in other parts of the app.
- When modifying forms: match current UX (error state + helper text) and keep the same DOM ids if other code relies on them.
- Add any new global styles to `src/assets/css/` and reference them from the component that needs them.

## What is NOT in this repo
- There are no unit tests or test framework configured. Do not add large test infra without a follow-up plan.

## When in doubt
- Read `src/main.jsx`, `src/App.jsx`, and `src/theme.jsx` to understand app bootstrapping and theming.
- If changing layout or colors, run `npm run dev` and visually verify both light/dark (ColorModeSelect) modes.

Please review and tell me which areas you want expanded (examples, more file links, or stricter lint/format rules) and I will iterate.
