import {
  absoluteAssetUrl,
  absoluteUrl,
  jsonLdForRoute,
  routeSeoByPath,
  siteOriginForRuntime,
} from './siteAndRoutes'

const SEO_ATTR = 'data-anna-portfolio-seo'

const PRERENDER_SEO_MARKER_START = '@anna-portfolio-seo:start'
const PRERENDER_SEO_MARKER_END = '@anna-portfolio-seo:end'

export function stripPrerenderSeoBlock(head: HTMLHeadElement) {
  const snapshot = Array.from(head.childNodes)
  let insidePrerenderBlock = false
  for (const node of snapshot) {
    if (node.nodeType === Node.COMMENT_NODE) {
      const text = node.textContent ?? ''
      if (text.includes(PRERENDER_SEO_MARKER_START)) {
        insidePrerenderBlock = true
        node.remove()
        continue
      }
      if (text.includes(PRERENDER_SEO_MARKER_END)) {
        insidePrerenderBlock = false
        node.remove()
        continue
      }
    }
    if (insidePrerenderBlock && node.nodeType === Node.ELEMENT_NODE) {
      node.remove()
    }
  }
}

function removeManagedNodes(root: ParentNode) {
  root.querySelectorAll(`[${SEO_ATTR}]`).forEach((node) => node.remove())
}

function escapeJsonForScript(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

export function applyRouteSeoToDocument(pathname: string) {
  if (typeof document === 'undefined') {
    return
  }
  const route = routeSeoByPath(pathname)
  const origin = siteOriginForRuntime()
  if (!origin) {
    return
  }
  const canonicalUrl = absoluteUrl(origin, route.path)
  const ogImageAbsolute = absoluteAssetUrl(origin, route.ogImagePath)

  document.title = route.title

  const head = document.head
  stripPrerenderSeoBlock(head)
  removeManagedNodes(head)

  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', route.description)
  }

  const canonical = document.createElement('link')
  canonical.setAttribute('rel', 'canonical')
  canonical.setAttribute('href', canonicalUrl)
  canonical.setAttribute(SEO_ATTR, '1')
  head.appendChild(canonical)

  const ogTags: [string, string][] = [
    ['og:type', 'website'],
    ['og:url', canonicalUrl],
    ['og:title', route.title],
    ['og:description', route.description],
    ['og:image', ogImageAbsolute],
    ['og:image:alt', route.ogImageAlt],
    ['og:locale', 'en_US'],
  ]

  for (const [property, content] of ogTags) {
    const meta = document.createElement('meta')
    meta.setAttribute('property', property)
    meta.setAttribute('content', content)
    meta.setAttribute(SEO_ATTR, '1')
    head.appendChild(meta)
  }

  const twitterTags: [string, string][] = [
    ['twitter:card', route.twitterCard],
    ['twitter:url', canonicalUrl],
    ['twitter:title', route.title],
    ['twitter:description', route.description],
    ['twitter:image', ogImageAbsolute],
    ['twitter:image:alt', route.ogImageAlt],
  ]

  for (const [name, content] of twitterTags) {
    const meta = document.createElement('meta')
    meta.setAttribute('name', name)
    meta.setAttribute('content', content)
    meta.setAttribute(SEO_ATTR, '1')
    head.appendChild(meta)
  }

  const ldNodes = jsonLdForRoute(origin, route)
  for (const node of ldNodes) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute(SEO_ATTR, '1')
    script.textContent = escapeJsonForScript(node)
    head.appendChild(script)
  }
}
