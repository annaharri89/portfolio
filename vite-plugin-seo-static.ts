import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { Plugin } from 'vite'
import { loadEnv } from 'vite'
import { SITE_CANONICAL_ORIGIN } from './src/constants/site'
import { ROUTE_SEO } from './src/constants/routeRegistry'
import {
  absoluteAssetUrl,
  absoluteUrl,
  jsonLdForRoute,
  type RouteSeo,
} from './src/seo/siteAndRoutes'

const SEO_START = '<!--@anna-portfolio-seo:start-->'
const SEO_END = '<!--@anna-portfolio-seo:end-->'
const SEO_DATA_ATTR = 'data-anna-portfolio-seo'

function escapeAttr(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function escapeHtmlText(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function escapeJsonForScript(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

function buildSeoBlock(origin: string, route: RouteSeo): string {
  const canonicalUrl = absoluteUrl(origin, route.path)
  const ogImageAbsolute = absoluteAssetUrl(origin, route.ogImagePath)
  const lines: string[] = []
  lines.push(SEO_START)
  lines.push(
    `<link rel="canonical" href="${escapeAttr(canonicalUrl)}" ${SEO_DATA_ATTR}="1" />`,
  )

  const og: [string, string][] = [
    ['og:type', 'website'],
    ['og:url', canonicalUrl],
    ['og:title', route.title],
    ['og:description', route.description],
    ['og:image', ogImageAbsolute],
    ['og:image:alt', route.ogImageAlt],
    ['og:locale', 'en_US'],
  ]
  for (const [property, content] of og) {
    lines.push(
      `<meta property="${escapeAttr(property)}" content="${escapeAttr(content)}" ${SEO_DATA_ATTR}="1" />`,
    )
  }

  const tw: [string, string][] = [
    ['twitter:card', route.twitterCard],
    ['twitter:url', canonicalUrl],
    ['twitter:title', route.title],
    ['twitter:description', route.description],
    ['twitter:image', ogImageAbsolute],
    ['twitter:image:alt', route.ogImageAlt],
  ]
  for (const [name, content] of tw) {
    lines.push(
      `<meta name="${escapeAttr(name)}" content="${escapeAttr(content)}" ${SEO_DATA_ATTR}="1" />`,
    )
  }

  for (const node of jsonLdForRoute(origin, route)) {
    lines.push(
      `<script type="application/ld+json" ${SEO_DATA_ATTR}="1">${escapeJsonForScript(node)}</script>`,
    )
  }

  lines.push(SEO_END)
  return `${lines.join('\n')}\n`
}

function stripPreviousSeo(html: string): string {
  const start = html.indexOf(SEO_START)
  const end = html.indexOf(SEO_END)
  if (start === -1 || end === -1 || end < start) {
    return html
  }
  return (
    html.slice(0, start) + html.slice(end + SEO_END.length)
  )
}

function injectIntoHtml(html: string, route: RouteSeo, origin: string): string {
  let next = stripPreviousSeo(html)
  next = next.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtmlText(route.title)}</title>`,
  )
  next = next.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
  )
  const block = buildSeoBlock(origin, route)
  next = next.replace('</head>', `${block}</head>`)
  return next
}

function routeFolderOnDisk(routePath: string): string | null {
  if (routePath === '/' || routePath === '') {
    return null
  }
  return routePath.replace(/^\//, '')
}

export function seoStaticPrerenderPlugin(): Plugin {
  let outDir = 'dist'
  let root = process.cwd()

  return {
    name: 'seo-static-prerender',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
      root = config.root
    },
    async closeBundle() {
      const env = loadEnv('production', root, 'VITE_')
      const rawOrigin =
        env.VITE_SITE_ORIGIN?.trim() || SITE_CANONICAL_ORIGIN
      const origin = rawOrigin.replace(/\/$/, '')

      const indexPath = join(root, outDir, 'index.html')
      const template = await readFile(indexPath, 'utf8')

      for (const route of ROUTE_SEO) {
        const html = injectIntoHtml(template, route, origin)
        const folder = routeFolderOnDisk(route.path)
        if (folder === null) {
          await writeFile(indexPath, html, 'utf8')
          continue
        }
        const dir = join(root, outDir, folder)
        await mkdir(dir, { recursive: true })
        await writeFile(join(dir, 'index.html'), html, 'utf8')
      }

      const sitemapBody = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTE_SEO.map((route) => {
  const loc = absoluteUrl(origin, route.path)
  return `  <url><loc>${loc}</loc></url>`
}).join('\n')}
</urlset>
`

      await writeFile(join(root, outDir, 'sitemap.xml'), sitemapBody, 'utf8')

      const robots = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`
      await writeFile(join(root, outDir, 'robots.txt'), robots, 'utf8')
    },
  }
}
