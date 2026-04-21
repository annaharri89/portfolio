export type TwitterCardKind = 'summary' | 'summary_large_image'

export type RouteSeo = {
  path: string
  title: string
  description: string
  ogImagePath: string
  ogImageAlt: string
  twitterCard: TwitterCardKind
}
