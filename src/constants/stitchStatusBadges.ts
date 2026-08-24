/**
 * Public Shields badges for private Stitch Counter repos.
 * CI writes pass/fail JSON to a public gist; this site only reads it.
 *
 * Setup: see stitchCounterV2/docs/public-ci-badges.md
 */
export const STITCH_STATUS_GIST_OWNER = 'annaharri89'

/** Public gist ID (not secret). Empty falls back to static /badges/*.svg. */
export const STITCH_STATUS_GIST_ID = '4b4e3ff61a504a43c29bb6e8ded17ab8'

const gistRawBase = STITCH_STATUS_GIST_ID
  ? `https://gist.githubusercontent.com/${STITCH_STATUS_GIST_OWNER}/${STITCH_STATUS_GIST_ID}/raw`
  : null

function shieldsEndpoint(rawJsonUrl: string, options?: { label?: string }): string {
  const base = `https://img.shields.io/endpoint?url=${encodeURIComponent(rawJsonUrl)}`
  return options?.label ? `${base}&label=${encodeURIComponent(options.label)}` : base
}

export const stitchCiBadgeSrc = gistRawBase
  ? shieldsEndpoint(`${gistRawBase}/stitchcounter-android-ci.json`)
  : '/badges/stitch-counter-ci.svg'

/** Full label for when Android and iOS CI badges appear side by side. */
export const stitchIosCiBadgeSrc = gistRawBase
  ? shieldsEndpoint(`${gistRawBase}/stitchcounter-ios-ci.json`)
  : null

/** Short "CI" label for when the badge sits under an iOS platform heading. */
export const stitchIosCiBadgeSrcShortLabel = gistRawBase
  ? shieldsEndpoint(`${gistRawBase}/stitchcounter-ios-ci.json`, { label: 'CI' })
  : null

export const stitchPlayCdBadgeSrc = gistRawBase
  ? shieldsEndpoint(`${gistRawBase}/stitchcounter-android-play-cd.json`)
  : '/badges/stitch-counter-play-cd.svg'

export const stitchCodecovHref = 'https://codecov.io/gh/annaharri89/stitchCounterV2'
export const stitchCodecovBadgeSrc = `${stitchCodecovHref}/graph/badge.svg?token=BM3Q8MJ7AW`
