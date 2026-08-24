/**
 * Public Shields badge for Batteries Included CardGames (private org repo).
 * CI writes pass/fail JSON to a dedicated public gist (not the Stitch Counter gist).
 */
export const CARD_GAMES_STATUS_GIST_OWNER = 'annaharri89'
export const CARD_GAMES_STATUS_GIST_ID = 'd9d8d36a4ac03b310ad69ad8d800dbd6'

const gistRawBase = `https://gist.githubusercontent.com/${CARD_GAMES_STATUS_GIST_OWNER}/${CARD_GAMES_STATUS_GIST_ID}/raw`

export const cardGamesCiBadgeSrc = `https://img.shields.io/endpoint?url=${encodeURIComponent(
  `${gistRawBase}/cardgames-ci.json`,
)}`
