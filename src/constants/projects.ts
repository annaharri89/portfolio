export interface Slide {
  image?: string
  videoSources?: {
    webm?: string
    mp4?: string
  }
  text: string
  id: number
}

export interface ProjectLink {
  href: string
  label: string
  icon?: 'github' | 'google-play'
}

export interface ArchiveProject {
  icon: string
  title: string
  year: string
  description: string
  links: ProjectLink[]
  slides?: Slide[]
}

export const HPF_PULSE_SLIDES: Slide[] = [
  { image: '/images/screen_shot_main.PNG', text: 'Main Page', id: 0 },
  { image: '/images/screen_shot_map.PNG', text: 'Map Page', id: 1 },
  { image: '/images/screen_shot_all_resources.PNG', text: 'All Resources', id: 2 },
  { image: '/images/screen_shot_domestic_violence.PNG', text: 'Category Resources', id: 3 },
]

export const STITCH_COUNTER_SLIDES: Slide[] = [
  { image: '/images/stitch_counter_single_counter.png', text: 'Single Counter', id: 0 },
  { image: '/images/stitch_counter_double_counter.png', text: 'Double Counter', id: 1 },
  {
    image: '/images/stitch_counter_double_counter_tablet_7_inch.png',
    text: 'Themed Tablet',
    id: 2,
  },
  {
    image: '/images/stitch_counter_single_counter_landscape.png',
    text: 'Themed Single Counter Landscape',
    id: 3,
  },
  {
    image: '/images/stitch_counter_double_counter_landscape.png',
    text: 'Themed Double Counter Landscape',
    id: 4,
  },
]

export const STITCH_TRACKER_SLIDES: Slide[] = [
  { image: '/images/library_screen.default_theme.jpg', text: 'Library - Default Theme', id: 0 },
  { image: '/images/library_screen.default_theme_dark_mode.jpg', text: 'Library - Dark Mode', id: 1 },
  {
    videoSources: {
      webm: '/images/single_counter.webm',
      mp4: '/images/single_counter.mp4',
    },
    text: 'Single Counter',
    id: 2,
  },
  { image: '/images/double_counter_default_screen.jpg', text: 'Double Counter - Default Theme', id: 3 },
  { image: '/images/double_counter_default_screen_dark_mode.jpg', text: 'Double Counter - Dark Mode', id: 4 },
  {
    videoSources: {
      webm: '/images/double_counter.webm',
      mp4: '/images/double_counter.mp4',
    },
    text: 'Double Counter',
    id: 5,
  },
  { image: '/images/double_counter_sea_cottage_theme.png', text: 'Double Counter - Sea Cottage Theme', id: 6 },
  { image: '/images/double_counter_golden_earth_theme.png', text: 'Double Counter - Golden Earth Theme', id: 7 },
  { image: '/images/single_counter_golden_earth_theme.png', text: 'Single Counter - Golden Earth Theme', id: 8 },
  { image: '/images/single_counter_sea_cottage_theme.png', text: 'Single Counter - Sea Cottage Theme', id: 9 },
  { image: '/images/double_counter_landscape_theme.png', text: 'Double Counter - Landscape Theme', id: 10 },
  { image: '/images/stitch_tracker_backup_restore_support.png', text: 'Backup Restore and Support', id: 11 },
  { image: '/images/stitch_tracker_theme_settings.png', text: 'Theme Settings', id: 12 },
]
