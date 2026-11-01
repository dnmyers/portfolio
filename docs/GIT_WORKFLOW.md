# Git workflow

## Branches

- `main` is the stable, deployable branch. Do not commit to it directly.
- Create one short-lived branch per task from an up-to-date `main`:
  `git switch main; git pull; git switch -c feat/contact-form-a11y`
- Prefixes: `feat/`, `fix/`, `docs/`, `chore/`. Agent-created work may use `codex/<task>`.
- `codex/main` is not a good long-lived working branch. Finish it by opening a PR into `main`, then start new task branches from `main`.

## Commits

- Commit small, logical units that build on their own; commit before starting a different task or handing off to an agent.
- Write imperative messages: `Add SPA fallback to nginx config`.
- Review with `git status` and `git diff --staged` before committing.
- Never commit `.env`, `secrets/`, `.history/`, `node_modules/`, or `dist/`.

## Before opening a PR

```
npm ci
npm run lint
npm run build
```

Open a PR into `main`, review the diff on GitHub, then squash-merge and delete the branch.

## Working with Codex or other agents

- Give each agent task its own branch; commit your own work first so the agent's changes are an isolated diff.
- Review agent diffs like any other PR before merging.
- Agents must not deploy, publish, or change DNS.
