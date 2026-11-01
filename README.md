# Daniel Myers Portfolio

A single-page portfolio built with React, Vite, React Router, Tailwind CSS, and Framer Motion. The site includes a home page, project list, about page, and a contact form.

The site was previously published on a domain that is no longer available. Project demo subdomains are configured through `VITE_PROJECT_DEMO_DOMAIN`; when unset, those demo links are shown as unavailable rather than sending visitors to stale destinations.

## Requirements

- Node.js 18 or newer (the project currently uses Vite 4).
- npm.

## Local development

```sh
npm ci
npm run dev
```

Vite prints the local URL after the server starts.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite's development server |
| `npm run build` | Create the production site in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint on `src/` |

For development, copy `.env.example` to `.env`. The contact form defaults to a local mock response in Vite development mode so it will not send real email. Set `VITE_CONTACT_MODE=emailjs` only when intentionally testing EmailJS delivery.

## Deployment

This is a static frontend. The Docker setup builds it and serves `dist/` through Nginx with the required React Router fallback. For public hosting, the Compose file includes an optional Cloudflare Tunnel service. See [docs/SELF_HOSTING.md](docs/SELF_HOSTING.md) for the intended topology and remaining host/domain setup.

## Project documentation

- [Agent and contributor guidance](AGENTS.md)
- [Codebase review and proposed improvement plan](docs/IMPROVEMENT_PLAN.md)
- [Portfolio design and full-stack project direction](docs/PORTFOLIO_DIRECTION.md)
- [Self-hosting notes](docs/SELF_HOSTING.md)

## Current project notes

- Contact submission uses EmailJS from the browser in production. Review its service/template configuration, public key, spam controls, and privacy implications before publishing.
- LogRocket's optional initialization is commented out in `src/main.jsx`; re-enable it only after the live site and analytics/privacy configuration are ready.
- The profile text, copyright year, project links, and external demos may be out of date. Verify them before treating the site as current.
