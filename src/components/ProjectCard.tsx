import ImageCarousel from './ImageCarousel'
import GithubIcon from './icons/GithubIcon'
import GooglePlayIcon from './icons/GooglePlayIcon'
import ProjectIcon from './ProjectIcon'
import { Slide, ProjectLink } from '../constants/projects'

interface ProjectCardProps {
  icon: string
  title: string
  year?: string
  description: string
  links?: ProjectLink[]
  slides?: Slide[]
}

export default function ProjectCard({ icon, title, year, description, links, slides }: ProjectCardProps) {
  const isEmoji = icon.length <= 2 && !icon.startsWith('/')

  return (
    <div className="card p-8 md:p-12 mb-12">
      <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
        {isEmoji ? (
          <div className="flex-shrink-0">
            <ProjectIcon emoji={icon} />
          </div>
        ) : (
          <img src={icon} alt={`${title} Icon`} className="w-28 h-28 rounded-2xl shadow-lg flex-shrink-0" />
        )}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-3xl font-semibold text-neutral-900">{title}</h3>
            {year && (
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-neutral-200 text-neutral-700">
                {year}
              </span>
            )}
          </div>
          <p className="text-neutral-700 leading-relaxed text-base mb-4">{description}</p>
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover px-5 py-2.5 rounded-lg text-sm font-medium text-neutral-900 border border-neutral-300 flex items-center gap-2"
                >
                  {link.icon === 'github' && <GithubIcon />}
                  {link.icon === 'google-play' && <GooglePlayIcon />}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      {slides && slides.length > 0 && (
        <div className="mt-6">
          <ImageCarousel slides={slides} />
        </div>
      )}
    </div>
  )
}
