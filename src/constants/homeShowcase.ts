import stitchCounterV2Icon from '@images/icons/stitch_counter_v2.png'
import { ROUTES } from './routes'

export interface HomeShowcaseSecondaryLink {
  label: string
  to: string
  external?: boolean
}

export interface HomeShowcaseProject {
  id: string
  title: string
  /** Longer blurb; home bento uses `homeSummary` when set. */
  summary: string
  /** One–two sentences for the home bento only. */
  homeSummary?: string
  year: string
  tags: readonly string[]
  /** Proof / metrics lines for the home featured card (keep aligned with the case study page). */
  highlights?: readonly string[]
  /** Extra actions besides the primary CTA (case study, repos, beta, etc.). */
  secondaryLinks?: readonly HomeShowcaseSecondaryLink[]
  imageUrl?: string
  emojiVisual?: string
  primaryHref: string
  primaryLabel: string
  primaryExternal?: boolean
}

/** Featured work shown on the home bento (current builds only). */
export const HOME_SHOWCASE_PROJECTS: readonly HomeShowcaseProject[] = [
  {
    id: 'stitch-v2',
    title: 'Stitch Counter (V2)',
    homeSummary:
      'Local-first Android app in open testing—Compose, Room library with photos, zip backup to move projects phone-to-phone with no cloud.',
    summary:
      'Consumer Android on Play open testing: Jetpack Compose + Material 3 + Hilt, Room project library with Coil-backed photos (capped JPEGs) and DataStore-driven themes. Product stance is privacy-first—no in-app analytics. Zip backup pairs kotlinx.serialization metadata with embedded JPEG bytes so crafters migrate libraries phone-to-phone without cloud infrastructure.',
    year: '2025–2026',
    tags: ['Kotlin', 'Jetpack Compose', 'Swift', 'SwiftUI'],
    highlights: [
      '50+ internal testers on the current early-stage Play open-testing release.',
      '0 crashes in Google Play Console (Android vitals) for the current early-stage release.',
    ],
    secondaryLinks: [
      {
        label: 'Android beta',
        to: ROUTES.STITCH_COUNTER_V2_BETA,
      },
      {
        label: 'Android repo',
        to: 'https://github.com/annaharri89/stitchCounterV2',
        external: true,
      },
      {
        label: 'iOS repo',
        to: 'https://github.com/annaharri89/stitchCounterV2.ios',
        external: true,
      },
    ],
    imageUrl: stitchCounterV2Icon,
    primaryHref: ROUTES.STITCH_COUNTER_V2,
    primaryLabel: 'Case study & details',
  },
  {
    id: 'solitaire',
    title: 'Solitaire & FreeCell (KMP)',
    homeSummary: 'Shared Kotlin rules for Solitaire/FreeCell; KorGE clients over one KMP module for every target.',
    summary:
      'Card games need identical rules everywhere you ship. This project shares Solitaire/FreeCell logic in Kotlin Multiplatform so desktop, web, Android, and iOS stay in sync—KorGE is a thin client over one domain module.',
    year: '2026',
    tags: ['Kotlin Multiplatform', 'KorGE', 'Kotlin'],
    highlights: [
      'Rules, move validation, undo/redo, and read models live in one shared module—one source of truth for every target.',
      'commonTest locks behavior before KorGE or native UIs ship; Gradle keeps rendering and game logic cleanly separated.',
      'Gradle multi-target packaging keeps KorGE out of the domain layer.',
    ],
    secondaryLinks: [
      {
        label: 'GitHub',
        to: 'https://github.com/annaharri89/KMPCardGames',
        external: true,
      },
    ],
    imageUrl: '/korge-solitaire/kmp-solitaire-app-icon.png',
    primaryHref: ROUTES.SOLITAIRE,
    primaryLabel: 'Live Demo',
  },
] as const
