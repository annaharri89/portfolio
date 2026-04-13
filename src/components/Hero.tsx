import { Show, type JSXElement } from 'solid-js'

interface HeroProps {
  title: string | JSXElement
  subtitle?: string
  showGraphic?: boolean
  variant?: 'full' | 'compact'
}

function HeroGraphic(props: { isCompact?: boolean }) {
  return (
    <div class={`hero-graphic ${props.isCompact ? 'hero-graphic--compact' : ''}`}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="graphicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ "stop-color": 'rgba(255,255,255,0.3)', "stop-opacity": "1" }} />
            <stop offset="100%" style={{ "stop-color": 'rgba(255,255,255,0.15)', "stop-opacity": "1" }} />
          </linearGradient>
        </defs>
        <path
          d="M 200 50 Q 250 150 350 200 Q 250 250 200 350 Q 150 250 50 200 Q 150 150 200 50 Z"
          fill="url(#graphicGradient)"
          opacity="0.5"
        />
        <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="3" opacity="0.6" />
        <circle cx="200" cy="200" r="50" fill="rgba(255,255,255,0.25)" opacity="0.7" />
        <path d="M 150 200 L 200 150 L 250 200 L 200 250 Z" fill="rgba(255,255,255,0.8)" opacity="0.6" />
      </svg>
    </div>
  )
}

export default function Hero(props: HeroProps) {
  const isCompact = () => props.variant === 'compact'

  return (
    <section class={`hero ${isCompact() ? 'hero--compact' : ''}`}>
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class={`hero-headline ${isCompact() ? 'hero-headline--compact' : ''}`}>{props.title}</h1>
            <Show when={props.subtitle}>
              <p class={`hero-subtext ${isCompact() ? 'hero-subtext--compact' : ''}`}>
                {props.subtitle}
              </p>
            </Show>
          </div>
          <Show when={props.showGraphic !== false}>
            <HeroGraphic isCompact={isCompact()} />
          </Show>
        </div>
      </div>
    </section>
  )
}
