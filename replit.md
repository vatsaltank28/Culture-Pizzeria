# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── mix-culture-pizzeria/ # The Mix Culture Pizzeria website (React + Vite)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts
├── pnpm-workspace.yaml     # pnpm workspace
├── tsconfig.base.json      # Shared TS options
├── tsconfig.json           # Root TS project references
└── package.json            # Root package
```

## The Mix Culture Pizzeria (`artifacts/mix-culture-pizzeria`)

Production-ready restaurant website for "The Mix Culture" — Mix Culture Pizzeria in Vile Parle East, Mumbai.

**Pages:**
- `/` — Home (hero, signature pizzas, features, about teaser, menu preview, testimonials, gallery preview, visit, order)
- `/menu` — Full categorized menu (Pizza, Pasta, Nachos, Tacos, Garlic Bread, Drinks)
- `/about` — Our story with timeline
- `/gallery` — Image gallery with filter tabs and lightbox modal
- `/visit` — Address, hours, map placeholder, FAQ accordion
- `/contact` — Contact form with validation + contact details

**Tech:**
- React + Vite, TypeScript, Tailwind CSS
- Framer Motion (animations)
- React Hook Form + Zod (contact form validation)
- React Helmet Async (SEO metadata per page)
- Wouter (client-side routing)

**Brand palette:**
- Deep Red (primary): hsl(4, 79%, 38%)
- Cream (background): hsl(40, 40%, 95%)
- Olive Green (accent): hsl(76, 25%, 35%)
- Charcoal (foreground): hsl(20, 8%, 18%)
- Golden Yellow (secondary): hsl(45, 90%, 54%)

**To swap placeholder images:** Replace the `src` attributes on `<img>` tags throughout the page components. Each image has a descriptive `alt` attribute indicating what the photo should be.

**To update menu items:** Edit the `menuData` array in `artifacts/mix-culture-pizzeria/src/pages/Menu.tsx`.

**To run locally:**
```bash
pnpm install
pnpm --filter @workspace/mix-culture-pizzeria run dev
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references
