export interface Slide {
  image: string
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
