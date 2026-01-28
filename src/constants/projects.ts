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

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    icon: '/images/hpf_pulse_google_play_icon.png',
    title: 'HPF Pulse',
    year: '2018',
    description:
      'HPF Pulse is an Android app I developed on behalf of The Humanity Preservation Foundation. The project was created to provide victims, heroes, caregivers and volunteers a directory for finding services in all 50 states. Pulse lets you know who is out there and willing to help with a form of violence that you may have experienced.',
    links: [
      {
        href: 'https://play.google.com/store/apps/details?id=org.humanitypreservationfoundation.pulse',
        label: 'Google Play Store',
        icon: 'google-play',
      },
      {
        href: 'https://github.com/annaharri89/HPFPulse',
        label: 'View on GitHub',
        icon: 'github',
      },
      {
        href: 'http://humanitypreservationfoundation.org/',
        label: 'Learn More About HPF',
      },
    ],
    slides: HPF_PULSE_SLIDES,
  },
  {
    icon: '/images/application_icon_stitch_counter.png',
    title: 'Stitch Counter',
    year: '2017',
    description:
      'Stitch Counter is an Android app that allows users to keep track of their knitting or crochet projects in two ways: through a single counter for tracking stitches or rows, or through a double counter with separate counters for stitches and rows. The app features a library system, customizable themes, and optimization for all device sizes and orientations.',
    links: [
      {
        href: 'https://play.google.com/store/apps/details?id=io.github.annaharri89.stitchcounter',
        label: 'Google Play Store',
        icon: 'google-play',
      },
      {
        href: 'https://github.com/annaharri89/stitchCounter',
        label: 'View on GitHub',
        icon: 'github',
      },
    ],
    slides: STITCH_COUNTER_SLIDES,
  },
  {
    icon: '🧶',
    title: 'Crochet Central',
    year: '2016',
    description:
      'Crochet Central is an iPad app I created for my Student Capstone Project at Indiana University East. The app demonstrates my experience with Objective-C and iOS development. While the app is now outdated and may not function as it originally did, it serves as proof of my early experience in mobile development and my ability to work with native iOS technologies.',
    links: [
      {
        href: 'https://github.com/annaharri89/crochet-central',
        label: 'View on GitHub',
        icon: 'github',
      },
    ],
  },
]
