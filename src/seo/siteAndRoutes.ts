import { ROUTE_SEO, ROUTES } from '../constants/routeRegistry'
import { SITE_CANONICAL_ORIGIN } from '../constants/site'
import { SOCIAL_LINKS } from '../constants/social'
import type { RouteSeo } from './seoTypes'

export type { RouteSeo, TwitterCardKind } from './seoTypes'

export function routeSeoByPath(pathname: string): RouteSeo {
  const normalized = pathname.length > 1 && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname
  const found = ROUTE_SEO.find((entry) => entry.path === normalized)
  return found ?? ROUTE_SEO[0]
}

export function siteOriginForRuntime(): string {
  const fromEnv = import.meta.env.VITE_SITE_ORIGIN
  if (typeof fromEnv === 'string' && fromEnv.length > 0) {
    return fromEnv.replace(/\/$/, '')
  }
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }
  return SITE_CANONICAL_ORIGIN
}

export function absoluteUrl(origin: string, path: string): string {
  const base = origin.replace(/\/$/, '')
  if (path === '/' || path === '') {
    return base
  }
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}

export function absoluteAssetUrl(origin: string, assetPath: string): string {
  const path = assetPath.startsWith('/') ? assetPath : `/${assetPath}`
  return absoluteUrl(origin, path)
}

export function personAndWebSiteJsonLd(origin: string) {
  const personId = `${origin}/#person`
  const websiteId = `${origin}/#website`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Anna Harrison',
        url: origin,
        jobTitle: 'Android developer',
        knowsAbout: [
          'Kotlin',
          'Jetpack Compose',
          'Android development',
          'Kotlin Multiplatform',
        ],
        sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: origin,
        name: 'Anna Harrison',
        description:
          'Portfolio of Android, Kotlin Multiplatform, and related software development work.',
        author: { '@id': personId },
      },
    ],
  }
}

export function webPageJsonLd(
  origin: string,
  route: RouteSeo,
  canonicalUrl: string,
) {
  const pageType =
    route.path === ROUTES.CONTACT ? 'ContactPage' : 'WebPage'
  return {
    '@context': 'https://schema.org',
    '@type': pageType,
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: route.title,
    description: route.description,
    isPartOf: { '@id': `${origin}/#website` },
  }
}

const pathTailLabels: Record<string, string> = {
  about: 'About',
  projects: 'Projects',
  skills: 'Skills',
  contact: 'Contact',
  'stitch-counter-v2': 'Stitch Counter V2',
  'stitch-counter': 'Stitch Counter',
  'hpf-pulse': 'HPF Pulse',
  solitaire: 'Solitaire & FreeCell',
  eula: 'EULA',
  'privacy-policy': 'Privacy policy',
  beta: 'Beta',
}

function breadcrumbNameForPath(path: string): string {
  const segments = path.split('/').filter(Boolean)
  const tail = segments[segments.length - 1] ?? ''
  if (pathTailLabels[tail]) {
    return pathTailLabels[tail]
  }
  return tail
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function breadcrumbJsonLd(
  origin: string,
  canonicalUrl: string,
  route: RouteSeo,
) {
  if (route.path === ROUTES.HOME) {
    return null
  }
  const crumbs: { name: string; item: string }[] = [
    { name: 'Home', item: origin },
    {
      name: breadcrumbNameForPath(route.path),
      item: canonicalUrl,
    },
  ]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: c.name,
      item: c.item,
    })),
  }
}

export function jsonLdForRoute(origin: string, route: RouteSeo): unknown[] {
  const canonicalUrl = absoluteUrl(origin, route.path)
  if (route.path === ROUTES.HOME) {
    return [personAndWebSiteJsonLd(origin), webPageJsonLd(origin, route, canonicalUrl)]
  }
  const page = webPageJsonLd(origin, route, canonicalUrl)
  const crumbs = breadcrumbJsonLd(origin, canonicalUrl, route)
  return crumbs ? [page, crumbs] : [page]
}
