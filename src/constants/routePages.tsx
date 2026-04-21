import type { Component } from 'solid-js'
import About from '@pages/About'
import Beta from '@pages/Beta'
import Contact from '@pages/Contact'
import Home from '@pages/Home'
import HPFPulse from '@pages/HPFPulse'
import Projects from '@pages/Projects'
import Skills from '@pages/Skills'
import Solitaire from '@pages/Solitaire'
import StitchCounter from '@pages/StitchCounter'
import StitchTracker from '@pages/StitchTracker'
import StitchTrackerEula from '@pages/StitchTrackerEula'
import StitchTrackerPrivacyPolicy from '@pages/StitchTrackerPrivacyPolicy'
import type { RouteId } from './routeRegistry'

/** Maps each registry `id` to its page component. Keep keys in sync with `routeRegistry.ts`. */
export const ROUTE_PAGES: { readonly [K in RouteId]: Component } = {
  HOME: Home,
  STITCH_COUNTER_V2: StitchTracker,
  STITCH_COUNTER: StitchCounter,
  HPF_PULSE: HPFPulse,
  PROJECTS: Projects,
  ABOUT: About,
  SKILLS: Skills,
  CONTACT: Contact,
  STITCH_COUNTER_V2_EULA: StitchTrackerEula,
  STITCH_COUNTER_V2_PRIVACY_POLICY: StitchTrackerPrivacyPolicy,
  STITCH_COUNTER_V2_BETA: Beta,
  SOLITAIRE: Solitaire,
}
