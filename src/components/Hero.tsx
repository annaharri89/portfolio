import React, { useEffect, useRef } from 'react'

interface HeroProps {
  title: string | React.ReactNode
  subtitle?: string
  showGraphic?: boolean
}

function HeroGraphic() {
  return (
    <div className="hero-graphic">
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="graphicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0.3)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(255,255,255,0.15)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M 200 50 Q 250 150 350 200 Q 250 250 200 350 Q 150 250 50 200 Q 150 150 200 50 Z"
          fill="url(#graphicGradient)"
          opacity="0.5"
        />
        <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3" opacity="0.6" />
        <circle cx="200" cy="200" r="50" fill="rgba(255,255,255,0.25)" opacity="0.7" />
        <path d="M 150 200 L 200 150 L 250 200 L 200 250 Z" fill="rgba(255,255,255,0.8)" opacity="0.6" />
      </svg>
    </div>
  )
}

export default function Hero({ title, subtitle, showGraphic = true }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const updateHeroSubtextPosition = () => {
      if (heroRef.current && subtextRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect()
        const subtextRect = subtextRef.current.getBoundingClientRect()
        const subtextBottom = subtextRect.bottom - heroRect.top
        document.documentElement.style.setProperty('--hero-subtext-bottom', `${subtextBottom}px`)
      }
    }

    updateHeroSubtextPosition()
    window.addEventListener('resize', updateHeroSubtextPosition)
    window.addEventListener('orientationchange', updateHeroSubtextPosition)

    const timeoutId = setTimeout(updateHeroSubtextPosition, 100)

    return () => {
      window.removeEventListener('resize', updateHeroSubtextPosition)
      window.removeEventListener('orientationchange', updateHeroSubtextPosition)
      clearTimeout(timeoutId)
    }
  }, [subtitle])

  return (
    <section className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-headline">{title}</h1>
            {subtitle && (
              <p className="hero-subtext" ref={subtextRef}>
                {subtitle}
              </p>
            )}
          </div>
          {showGraphic && <HeroGraphic />}
        </div>
      </div>
    </section>
  )
}
