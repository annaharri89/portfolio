import type { RouteSeo, TwitterCardKind } from '../seo/seoTypes'

const defaultOgImagePath = '/work/android-ui-ux/counter_big_numbers_portrait.png'
const defaultOgImageAlt =
  'Android stitch counter UI with large readable numbers on a project screen'

type SeoFields = {
  readonly title: string
  readonly description: string
  readonly ogImagePath: string
  readonly ogImageAlt: string
  readonly twitterCard: TwitterCardKind
}

/**
 * Authoritative route list: paths and SEO only (no page components). Vite’s SEO plugin imports this
 * without pulling in the Solid app graph. Pair each `id` with a component in `routePages.tsx`.
 */
const routeDefinitionsConst = [
  {
    id: 'HOME',
    path: '/',
    title: 'Anna Harrison — Android & Kotlin developer',
    description:
      'Android-first developer: Jetpack Compose apps, Kotlin Multiplatform experiments, and shipped Play builds—portfolio.',
    ogImagePath: defaultOgImagePath,
    ogImageAlt: defaultOgImageAlt,
    twitterCard: 'summary_large_image',
  },
  {
    id: 'STITCH_COUNTER_V2',
    path: '/stitch-counter-v2',
    title: 'Stitch Counter V2 — case study (Android, Compose, CI/CD)',
    description:
      'Case study: Room, DataStore, Hilt, Jetpack Compose, and CI for a local-first craft counter on Play beta.',
    ogImagePath: '/work/android-feature-development/case1_data_library.png',
    ogImageAlt: 'Stitch Counter library screen showing project list and navigation',
    twitterCard: 'summary_large_image',
  },
  {
    id: 'STITCH_COUNTER',
    path: '/stitch-counter',
    title: 'Stitch Counter (original) — Anna Harrison',
    description:
      'Earlier Android app: themed stitch counters and project tracking—predecessor to the V2 rewrite.',
    ogImagePath: defaultOgImagePath,
    ogImageAlt: defaultOgImageAlt,
    twitterCard: 'summary',
  },
  {
    id: 'HPF_PULSE',
    path: '/hpf-pulse',
    title: 'HPF Pulse — Anna Harrison',
    description:
      'Cross-platform directory app for the Humanity Preservation Foundation: services and education resources.',
    ogImagePath: defaultOgImagePath,
    ogImageAlt: defaultOgImageAlt,
    twitterCard: 'summary',
  },
  {
    id: 'PROJECTS',
    path: '/projects',
    title: 'Projects — Anna Harrison',
    description:
      'Selected mobile and web work: shipped Android, Kotlin Multiplatform games, and supporting portfolio engineering.',
    ogImagePath: defaultOgImagePath,
    ogImageAlt: defaultOgImageAlt,
    twitterCard: 'summary_large_image',
  },
  {
    id: 'ABOUT',
    path: '/about',
    title: 'About Anna Harrison',
    description:
      'Background in Kotlin and Jetpack Compose: production Android work, iOS collaboration, and how I like to build.',
    ogImagePath: defaultOgImagePath,
    ogImageAlt: defaultOgImageAlt,
    twitterCard: 'summary',
  },
  {
    id: 'SKILLS',
    path: '/skills',
    title: 'Skills & technologies — Anna Harrison',
    description:
      'Stack snapshot: Android, Compose, Kotlin, Gradle, CI, and practical iOS/SwiftUI delivery when projects need it.',
    ogImagePath: defaultOgImagePath,
    ogImageAlt: defaultOgImageAlt,
    twitterCard: 'summary',
  },
  {
    id: 'CONTACT',
    path: '/contact',
    title: 'Contact — Anna Harrison',
    description:
      'Reach out for Android engineering roles, Kotlin work, or collaboration—email and professional links.',
    ogImagePath: defaultOgImagePath,
    ogImageAlt: defaultOgImageAlt,
    twitterCard: 'summary_large_image',
  },
  {
    id: 'STITCH_COUNTER_V2_EULA',
    path: '/stitch-counter-v2/eula',
    title: 'Stitch Counter V2 — EULA',
    description:
      'End-user license agreement for Stitch Counter V2 (version 2)—terms for beta and production builds.',
    ogImagePath: defaultOgImagePath,
    ogImageAlt: defaultOgImageAlt,
    twitterCard: 'summary',
  },
  {
    id: 'STITCH_COUNTER_V2_PRIVACY_POLICY',
    path: '/stitch-counter-v2/privacy-policy',
    title: 'Stitch Counter V2 — privacy policy',
    description:
      'Privacy policy for Stitch Counter V2: data handling, diagnostics, and local-first product stance.',
    ogImagePath: defaultOgImagePath,
    ogImageAlt: defaultOgImageAlt,
    twitterCard: 'summary',
  },
  {
    id: 'STITCH_COUNTER_V2_BETA',
    path: '/beta',
    title: 'Stitch Counter — Android open beta',
    description:
      'How to join Play open testing for Stitch Counter V2: beta access notes and what to expect in builds.',
    ogImagePath: defaultOgImagePath,
    ogImageAlt: defaultOgImageAlt,
    twitterCard: 'summary',
  },
  {
    id: 'SOLITAIRE',
    path: '/solitaire',
    title: 'Solitaire & FreeCell (Kotlin Multiplatform)',
    description:
      'Shared rules and tests in KMP; KorGE client runs the same logic on web, desktop, Android, and iOS.',
    ogImagePath: '/korge-solitaire/kmp-solitaire-app-icon.png',
    ogImageAlt: 'Kotlin Multiplatform solitaire app icon',
    twitterCard: 'summary_large_image',
  },
] as const satisfies ReadonlyArray<
  {
    readonly id: string
    readonly path: string
  } & SeoFields
>

export type RouteDefinition = (typeof routeDefinitionsConst)[number]

export type RouteId = RouteDefinition['id']

export const routeDefinitions: readonly RouteDefinition[] = routeDefinitionsConst

type PathsById = {
  [K in RouteId]: Extract<RouteDefinition, { id: K }>['path']
}

export const ROUTES = Object.fromEntries(
  routeDefinitions.map((route) => [route.id, route.path]),
) as PathsById

export const ROUTE_SEO: readonly RouteSeo[] = routeDefinitions.map(
  ({ path, title, description, ogImagePath, ogImageAlt, twitterCard }) => ({
    path,
    title,
    description,
    ogImagePath,
    ogImageAlt,
    twitterCard,
  }),
)
