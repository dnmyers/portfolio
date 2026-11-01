# Agent and contributor guidance

## Project overview

This repository contains Daniel Myers's React portfolio, built with Vite. Pages are routed in `src/main.jsx`; shared navigation and footer live in `src/App.jsx`; page components and project content live under `src/components/`.

## Working rules

- Keep changes scoped to the portfolio. Do not publish, deploy, register domains, or change DNS as part of ordinary code changes.
- Treat hard-coded third-party IDs, email addresses, personal biography, and external project URLs as user data. Do not invent replacements; flag facts that need Daniel's confirmation.
- Never commit secrets, private contact submissions, or local environment files. Browser-exposed service keys are not server secrets; document their intended public use and add provider-side restrictions where available.
- Keep routing compatible with static hosting by preserving a fallback from application paths to `index.html`.
- Prefer accessible semantic HTML, labels associated with form controls, descriptive image alt text, and keyboard-accessible interactions.
- Do not silently remove analytics or contact integrations. Identify data collection and configuration concerns before changing their behavior.

## Commands

- `npm ci` installs the lockfile dependencies.
- `npm run dev` starts the local Vite server.
- `npm run lint` runs ESLint.
- `npm run build` produces `dist/` for static hosting.
- `docker compose build portfolio` builds the production container; the `public` Compose profile adds Cloudflare Tunnel and requires the ignored `secrets/cloudflare_tunnel_token` file.
- Copy `.env.example` to `.env` for local settings. Never commit `.env` or tunnel credentials.

Run lint and build after implementation changes when a compatible Node.js/npm runtime is available. This repository has no automated test script at present.

## Deployment constraints

The site is a static SPA and needs an SPA route fallback in production. Development contact submissions default to a local no-send mock; production uses EmailJS. For self-hosting, isolate the web and tunnel services from local agent services and expose no agent ports. See [docs/SELF_HOSTING.md](docs/SELF_HOSTING.md).
