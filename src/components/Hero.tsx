import { Show, type JSXElement } from 'solid-js'
import type { JSX } from 'solid-js'

interface HeroProps {
  title: string | JSXElement
  subtitle?: string
  leadingIconSrc?: string
  leadingIconAlt?: string
  showGraphic?: boolean
  variant?: 'full' | 'compact'
  actions?: JSX.Element
  showScrollHint?: boolean
}

function HeroGraphic(props: { isCompact?: boolean }) {
  return (
    <div class={`hero-graphic ${props.isCompact ? 'hero-graphic--compact' : ''}`}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="graphicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ "stop-color": 'rgba(28,25,23,0.08)', "stop-opacity": "1" }} />
            <stop offset="100%" style={{ "stop-color": 'rgba(28,25,23,0.04)', "stop-opacity": "1" }} />
          </linearGradient>
        </defs>
        <path
          d="M 200 50 Q 250 150 350 200 Q 250 250 200 350 Q 150 250 50 200 Q 150 150 200 50 Z"
          fill="url(#graphicGradient)"
          opacity="0.5"
        />
        <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(156,78,56,0.18)" stroke-width="3" opacity="0.75" />
        <circle cx="200" cy="200" r="50" fill="rgba(28,25,23,0.06)" opacity="0.85" />
        <path d="M 150 200 L 200 150 L 250 200 L 200 250 Z" fill="rgba(156,78,56,0.2)" opacity="0.75" />
      </svg>
    </div>
  )
}

export default function Hero({
  title,
  subtitle,
  leadingIconSrc,
  leadingIconAlt,
  showGraphic = true,
  variant = 'full',
  actions,
  showScrollHint = false,
}: HeroProps) {
  const isCompact = variant === 'compact'

  return (
    <section class={`hero ${isCompact ? 'hero--compact' : ''}`}>
      <div class="site-container">
        <div class="hero-content">
          <div class="hero-text">
            <div class={leadingIconSrc ? 'hero-text-with-icon' : undefined}>
              {leadingIconSrc && (
                <img
                  src={leadingIconSrc}
                  alt={leadingIconAlt ?? ''}
                  class={`hero-leading-icon ${isCompact ? 'hero-leading-icon--compact' : ''}`}
                  loading="eager"
                  decoding="async"
                />
              )}
              <div>
                <h1 class={`hero-headline ${isCompact ? 'hero-headline--compact' : ''}`}>{title}</h1>
                {subtitle && (
                  <p class={`hero-subtext ${isCompact ? 'hero-subtext--compact' : ''}`}>
                    {subtitle}
                  </p>
                )}
                {actions && <div class="hero-cta">{actions}</div>}
              </div>
            </div>
          </div>
          <Show when={showGraphic}>
            <HeroGraphic isCompact={isCompact} />
          </Show>
        </div>
        {showScrollHint && !isCompact && (
          <div class="hero-scroll-hint">
            <span class="hero-scroll-hint-label">Below</span>
            <span class="hero-scroll-hint-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
