export {
  ROUTES,
  ROUTE_SEO,
  routeDefinitions,
  type RouteDefinition,
  type RouteId,
} from './routeRegistry'

/** Import page components from `routePages.tsx` — not re-exported here so the Vite config bundle does not load the app. */

/** Hash ids on {@link ROUTES.STITCH_COUNTER_V2} for in-page case studies */
export const STITCH_COUNTER_V2_CASE_STUDY_HASHES = {
  OVERVIEW: 'stitch-counter-case-studies',
  ENGINEERING_DELIVERY: 'case-study-engineering-delivery',
  FEATURE_DEVELOPMENT: 'case-study-feature-development',
  APP_ARCHITECTURE: 'case-study-app-architecture',
  UI_UX: 'case-study-android-ui-ux',
} as const
