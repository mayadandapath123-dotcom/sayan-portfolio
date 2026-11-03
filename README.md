# Sayan — Personal Portfolio + Project Hub

One URL to my entire internet: about me, my projects, my journey, and my links.

## Milestone 1 (current)

- Global layout, navigation, homepage skeleton
- Projects page skeleton + project detail pages
- About page skeleton
- Links page skeleton
- Responsive dark design system (charcoal bg, mustard accent)
- Reusable components + environment configuration
- Supabase connection architecture (content is JSON/Markdown first; DB connects later)
- Sample project data (clearly marked as samples)

## Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Frontend | Astro (static) | Content-focused, zero-JS default, great SEO/static HTML, deploys anywhere |
| Styling | Custom CSS (variables) | Minimal, no framework bloat, matches the brief's dark/premium direction |
| Backend/DB | Supabase (PostgreSQL + Auth + Storage) | Auth + DB + storage in one place; simplest path to the admin panel |
| Hosting | Netlify (static) | Free subdomain (`*.netlify.app`), simple `netlify.toml`, custom domain later |

## How to run

Requires Node.js ≥ 22.23.4 (the workspace ships Node 20, so use the Node 22 binary under `/home/user/tools/node-v22.23.4-linux-x64/bin`).

```bash
# 1. Use Node 22
export PATH=/home/user/tools/node-v22.23.4-linux-x64/bin:$PATH

# 2. Install dependencies
npm install

# 3. Copy env vars
cp .env.example .env
# (fill in Supabase values when ready — optional for Milestone 1)

# 4. Run locally
npm run dev   # http://localhost:4321

# 5. Build
npm run build # outputs to dist/
```

## How to deploy (later)

1. Push this repo to GitHub.
2. Connect the repo to Netlify (build command `npm run build`, publish dir `dist`).
3. Netlify gives you a free `sayan-something.netlify.app` URL — use it as your temporary master URL.
4. When ready, add your custom domain (e.g. `sayan.dev`) in Netlify; no code changes needed.

## Content

- `src/content/projects/` — sample project entries (clearly marked `sampleData: true`)
- `src/lib/supabase.ts` — Supabase client architecture (ready for the admin panel)

Replace sample content with your real projects before sharing the site.
