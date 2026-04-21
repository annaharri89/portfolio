
# portfolio
My portfolio showcasing projects I have worked on.

## Production build

`npm run build` runs Vite and a static SEO plugin that:

- Writes prerendered HTML to `dist/<path>/index.html` for each route (per-route `<title>`, meta description, canonical link, Open Graph and Twitter tags, and JSON-LD scripts). JSON-LD includes `Person` and `WebSite` on the home route, `WebPage` or `ContactPage` per page, and `BreadcrumbList` on non-home routes (see `src/seo/siteAndRoutes.ts`).
- Emits `dist/sitemap.xml` and `dist/robots.txt` (with a `Sitemap:` line pointing at your deployed origin).

**Origins:** `SITE_CANONICAL_ORIGIN` in `src/constants/site.ts` is the default site URL for canonical URLs, sitemap locations, and OG URLs. You can override the origin used at build time with the optional env var `VITE_SITE_ORIGIN` (handy for staging or preview deploys).

**Hosting:** Configure the host so an existing file is served before the SPA fallback—for example, a request to `/about` should return `dist/about/index.html` if it exists, and only then fall back to the root `index.html`. If every path serves the root `index.html` first, crawlers may not see the prerendered per-route HTML.

## Routes

Paths and SEO live in `src/constants/routeRegistry.ts` (single source for `ROUTES`, prerender meta, and sitemap). Page components are wired in `src/constants/routePages.tsx` (`ROUTE_PAGES`). They are split so the Vite SEO plugin can import the registry without pulling Solid pages into the config bundle. Adding a route: append a row to the registry (matching `id` / `path` / SEO), add the same `id` key to `ROUTE_PAGES`, and keep router order consistent with `routeDefinitions` in `App.tsx`.
