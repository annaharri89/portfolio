import { useCaseStudyLightboxOpen } from './CaseStudyLightbox'

export type CaseStudyImageVariant = 'hero' | 'default' | 'strip' | 'pair'

interface CaseStudyImageProps {
  src: string
  caption: string
  enlargedDescription: string
  variant?: CaseStudyImageVariant
}

const variantClass: Record<CaseStudyImageVariant, string> = {
  hero: 'case-study__thumb-btn--hero',
  default: 'case-study__thumb-btn--default',
  strip: 'case-study__thumb-btn--strip',
  pair: 'case-study__thumb-btn--pair',
}

export default function CaseStudyImage({
  src,
  caption,
  enlargedDescription,
  variant = 'default',
}: CaseStudyImageProps) {
  const openLightbox = useCaseStudyLightboxOpen()

  return (
    <div class="case-study__thumb-wrap">
      <div class="case-study__label-pill">{caption}</div>
      <button
        type="button"
        class={`case-study__thumb-btn ${variantClass[variant]}`}
        aria-label={`View larger: ${enlargedDescription}`}
        onClick={() => openLightbox({ kind: 'image', src, enlargedDescription })}
      >
        <img src={src} alt="" decoding="async" />
      </button>
    </div>
  )
}
