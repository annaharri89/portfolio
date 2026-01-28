import { ReactNode } from 'react'

interface PageHeroProps {
  icon?: ReactNode
  title: string
  subtitle: string
}

export default function PageHero({ icon, title, subtitle }: PageHeroProps) {
  return (
    <div className="text-center mb-16">
      {icon && <div className="inline-block mb-8">{icon}</div>}
      <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-neutral-900 tracking-tight">
        {title}
      </h2>
      <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    </div>
  )
}
