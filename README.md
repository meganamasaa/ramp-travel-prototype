# ramp-travel-prototype

A prototype of hotel booking inside [Ramp](https://ramp.com) travel, built from both sides of the policy.

## Views
- **Employee travel view** — plan a trip (e.g. "Megan's Trip to New York"), search hotels, and see which options are in or out of policy
- **Admin hotel policy panel** — set rules such as max % above market rate, max nightly price (incl. taxes and fees), and meal per diems. A hotel is in policy only if it meets every rule.
- **Hotel search results** — results flagged against the active policy

## Stack
Bun · React 19 · TypeScript · Tailwind CSS · shadcn/ui (Radix)

## Run locally
```bash
bun install
bun dev            # dev server with hot reload
bun run build      # production build to dist/
```

## Deploy
Vercel, configured in `vercel.json` (`bun install` → `bun run build` → `dist/`). Pushes to `main` deploy to production.
