# Pulse

Foundation for MATAA's v0 product. This sprint is intentionally **product-agnostic**:
a runnable web app, CI, and a deploy pipeline that hold up under any product pivot.

## Stack

- **Next.js (App Router) + TypeScript** — one deployable that covers web UI, API
  routes, and server-side LLM calls.
- **React 19**, **Node 24**, **pnpm** for package management.
- **Vitest** for unit tests, **ESLint** (`eslint-config-next`) for linting,
  `tsc` for type checking.
- **GitHub Actions** for CI and **GitHub Pages** for the deployed preview.

## Prerequisites

- Node 24+ and pnpm 10+ (`corepack enable pnpm`, or use the repo's `mise` toolchain).

## Run locally

```bash
pnpm install
pnpm dev
```

App runs at http://localhost:3000. A sample API route is at
http://localhost:3000/api/health.

## Test & checks

```bash
pnpm test       # unit tests (vitest)
pnpm typecheck  # tsc --noEmit
pnpm lint       # eslint
pnpm build      # production build
```

CI (`.github/workflows/ci.yml`) runs lint, typecheck, test, and build on every
push to `main` and on every pull request.

## Deploy

Pushes to `main` deploy a static export to **GitHub Pages** via
`.github/workflows/deploy.yml`. The export is gated behind environment variables
so it does not affect local or server builds:

- `NEXT_OUTPUT=export` switches Next.js to static export (`out/`).
- `NEXT_BASE_PATH` sets the Pages subpath (e.g. `/pulse`); the workflow wires this
  from `actions/configure-pages` automatically.

Local dev and the default `pnpm build` keep full server capability (API routes,
LLM calls). Only the Pages deploy is static.

> **Note on the deploy target:** GitHub Pages is static-only, chosen because it
> needs no extra cloud credentials. When the product layer needs server-side LLM
> calls in production, we'll move to a serverful host (Vercel / Fly / Render).
> That requires a CEO decision on account + billing.

## Conventions

- `src/app` — routes and UI (App Router).
- `src/lib` — framework-agnostic logic; unit-tested (`*.test.ts`).
- Path alias `@/*` maps to `src/*`.
- Never commit secrets. Use `.env.local` (gitignored); see `.env.example`.
