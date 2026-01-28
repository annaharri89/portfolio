export const ROUTES = {
  HOME: '/',
  STITCH_COUNTER_V2: '/stitch-counter-v2',
  STITCH_COUNTER: '/stitch-counter',
  HPF_PULSE: '/hpf-pulse',
  COLLAB_CHECK_LISTS: '/collab-check-lists',
  PROJECTS: '/projects',
  ABOUT: '/about',
  SKILLS: '/skills',
  CONTACT: '/contact',
} as const

export const NAV_ITEMS = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.STITCH_COUNTER_V2, label: 'Stitch Counter v2' },
  { path: ROUTES.COLLAB_CHECK_LISTS, label: 'Collab Check Lists' },
  { path: ROUTES.PROJECTS, label: 'Projects' },
  { path: ROUTES.ABOUT, label: 'About' },
] as const
