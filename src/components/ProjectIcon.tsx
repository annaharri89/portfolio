interface ProjectIconProps {
  emoji: string
  size?: 'sm' | 'md' | 'lg'
}

const containerClasses = {
  sm: 'w-24 h-24',
  md: 'w-28 h-28',
  lg: 'w-32 h-32',
}

const emojiClasses = {
  sm: 'text-5xl',
  md: 'text-5xl',
  lg: 'text-6xl',
}

export default function ProjectIcon({ emoji, size = 'md' }: ProjectIconProps) {
  return (
    <div className={`${containerClasses[size]} rounded-2xl shadow-lg bg-neutral-100 flex items-center justify-center`}>
      <span className={`text-neutral-400 ${emojiClasses[size]}`}>{emoji}</span>
    </div>
  )
}
