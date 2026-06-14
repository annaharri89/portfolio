
# portfolio

My portfolio showcasing projects I have worked on.

## Development

SolidStart 2 (static prerender). Requires Node 22+.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + static export to dist/
npm run preview  # serve dist/ on port 4173
```

## Production build

`npm run build` runs TypeScript checking, generates `public/sitemap.xml` and `public/robots.txt`, then prerenders all routes in `dist/<path>/index.html` with server-rendered meta tags and JSON-LD via `@solidjs/meta`.

Canonical URLs and sitemap entries use `SITE_URL` in [`src/seo.ts`](src/seo.ts), defaulting to `https://harrisonsoftware.dev` or overridden via `VITE_SITE_ORIGIN`.

## Upwork build

For Upwork proposals (no contact form, LinkedIn, or email), deploy a second static build:

```bash
npm run build:upwork   # → https://upwork.harrisonsoftware.dev
```

Set `UPWORK_PROFILE_URL` in [`src/constants/upwork.ts`](src/constants/upwork.ts) before building. The Upwork build adds `noindex`, a restrictive `robots.txt`, and omits `/contact`, `/beta`, EULA, and privacy-policy routes from prerender.

## Routes

Path constants live in [`src/marketingRoutes.ts`](src/marketingRoutes.ts). SEO metadata and the prerender list are in [`src/seo.ts`](src/seo.ts). Page components are in `src/pages/`; file routes in `src/routes/` re-export them.

To add a route: create the page, add a thin file under `src/routes/`, extend `marketingRoutes.ts` / `ROUTE_SEO` / `PORTFOLIO_PRERENDER_PATHS` in `src/seo.ts`.

## Hosting

Deploy the `dist/` folder as static files. Each prerendered path has its own `index.html` (for example `dist/about/index.html` for `/about`).
