import { ROUTES } from './routes'

export type CaseStudyProjectKey = 'stitch-counter-v2' | 'solitaire'

export interface CaseStudyEntry {
  id: string
  project: CaseStudyProjectKey
  title: string
  summary: string
  chips: string[]
  href: string
  /** Featured studies are listed first on /case-studies. */
  featured?: boolean
}

export const CASE_STUDY_PROJECTS: Record<
  CaseStudyProjectKey,
  { name: string; href: string; anchorId: string }
> = {
  'stitch-counter-v2': {
    name: 'Stitch Counter (V2)',
    href: ROUTES.STITCH_COUNTER_V2,
    anchorId: 'stitch-counter-case-studies',
  },
  solitaire: {
    name: 'Solitaire & FreeCell (KMP)',
    href: ROUTES.SOLITAIRE,
    anchorId: 'solitaire-case-studies',
  },
}

/** Single source of truth: the /case-studies page and each project page render from this list. */
export const CASE_STUDIES: CaseStudyEntry[] = [
  {
    id: 'stitch-feature-development',
    project: 'stitch-counter-v2',
    title: 'Feature development',
    summary:
      'Architecture, Room data, zip backup and restore with typed failures, and UI state tied to real storage.',
    chips: ['Kotlin · Compose · Room', 'Local-first, no cloud account', 'Zip backup and restore'],
    href: ROUTES.STITCH_COUNTER_V2_CASE_STUDY_FEATURE_DEVELOPMENT,
  },
  {
    id: 'stitch-backup-restore',
    project: 'stitch-counter-v2',
    title: 'Backup and restore',
    summary:
      'Local zip backup that carries each project photo as a self-contained file, so a restore on a new phone is complete without any cloud account.',
    chips: ['Photos travel with the backup', 'Versioned format', 'Zip-slip safe restore'],
    href: ROUTES.STITCH_COUNTER_V2_CASE_STUDY_BACKUP_RESTORE,
  },
  {
    id: 'stitch-ui-ux',
    project: 'stitch-counter-v2',
    title: 'Android UI/UX',
    summary:
      'Compose UI built for real devices: adaptive layouts, six themes with dark mode, swipe, multi-select, and sheets.',
    chips: ['Adaptive Compose layouts', 'Six themes · dark mode', 'Swipe · multi-select · sheets'],
    href: ROUTES.STITCH_COUNTER_V2_CASE_STUDY_UI_UX,
  },
  {
    id: 'solitaire-shared-architecture',
    project: 'solitaire',
    title: 'Shared KMP architecture',
    summary:
      'One Kotlin module owns the rules, state, and tests for Solitaire and FreeCell; a thin KorGE client runs them on Android, iOS, web, and desktop JVM.',
    chips: ['~96% shared Kotlin', '174 shared test cases', '4 targets, 1 rules engine'],
    href: ROUTES.SOLITAIRE_CASE_STUDY_SHARED_ARCHITECTURE,
  },
]

export function getCaseStudiesForProject(project: CaseStudyProjectKey): CaseStudyEntry[] {
  return CASE_STUDIES.filter((study) => study.project === project)
}

/** Featured studies first; otherwise keeps the order of {@link CASE_STUDIES}. */
export function getCaseStudiesFeaturedFirst(): CaseStudyEntry[] {
  return [...CASE_STUDIES].sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
}
