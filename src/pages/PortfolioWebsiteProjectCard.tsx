import { ProjectCard } from '@components/ProjectCardGrid'
import GithubIcon from '@icons/GithubIcon'

export default function PortfolioWebsiteProjectCard() {
  return (
    <ProjectCard
      icon="🌐"
      title="Portfolio Website"
      description="This portfolio website was built with modern web technologies, showcasing my ability to work with SolidJS and create responsive, modern user interfaces."
      tags={[[{ year: '2026', tech: 'SolidJS' }, { tech: 'SolidJS Router' }, { tech: 'TypeScript' }, { tech: 'Vite' }, { tech: 'Tailwind CSS' }]]}
      link={{
        href: 'https://github.com/annaharri89/portfolio',
        label: 'View on GitHub',
        icon: <GithubIcon class="w-4 h-4" />,
      }}
    />
  )
}
