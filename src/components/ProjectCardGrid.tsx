import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ProjectCardGridProps {
  children: ReactNode
}

export function ProjectCardGrid({ children }: ProjectCardGridProps) {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects-grid">{children}</div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  icon: string | ReactNode
  title: string
  description: string
  tags: Array<{ year?: string; tech: string }[]>
  link?: { href: string; label: string; icon?: ReactNode } | Array<{ href: string; label: string; icon?: ReactNode }>
  comingSoon?: boolean
  tagGroupHeaders?: (string | undefined)[]
}

export function ProjectCard({
  icon,
  title,
  description,
  tags,
  link,
  comingSoon = false,
  tagGroupHeaders,
}: ProjectCardProps) {
  const cardClasses = comingSoon
    ? 'project-card project-card-coming-soon'
    : 'project-card project-card-active'

  return (
    <article className={cardClasses}>
      <div className="project-content">
        <h3 className="project-title">
          {typeof icon === 'string' && icon.startsWith('/') ? (
            <img src={icon} alt={title} className="project-title-icon" />
          ) : typeof icon === 'string' ? (
            <span className="project-title-icon project-title-icon-placeholder">{icon}</span>
          ) : (
            icon
          )}
          {title}
        </h3>
        <p className="project-description" dangerouslySetInnerHTML={{ __html: description }} />
        {tags.map((tagGroup, groupIndex) => (
          <div key={groupIndex}>
            {tagGroupHeaders && tagGroupHeaders[groupIndex] && (
              <h4 className="text-lg font-semibold mb-2 text-neutral-900">{tagGroupHeaders[groupIndex]}</h4>
            )}
            <div className="project-tags">
              {tagGroup.map((tag, tagIndex) => (
                <React.Fragment key={tagIndex}>
                  {tag.year && <span className="year-chip">{tag.year}</span>}
                  <span className="tech-tag">{tag.tech}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
        <div className="project-links">
          {comingSoon ? (
            <button
              disabled
              className="btn btn-secondary"
              style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem', opacity: 0.5, cursor: 'not-allowed' }}
            >
              Coming Soon
            </button>
          ) : link ? (
            Array.isArray(link) ? (
              link.map((linkItem, index) => {
                const isExternal = linkItem.href.startsWith('http://') || linkItem.href.startsWith('https://')
                const linkContent = (
                  <>
                    {linkItem.icon}
                    {linkItem.label}
                  </>
                )
                const linkStyle = {
                  fontSize: '0.875rem',
                  padding: '0.625rem 1.25rem',
                  ...(index < link.length - 1 ? { marginRight: '0.5rem' } : {}),
                  ...(linkItem.icon ? { display: 'inline-flex', alignItems: 'center', gap: '0.5rem' } : {}),
                }
                return isExternal ? (
                  <a
                    key={index}
                    href={linkItem.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={linkStyle}
                  >
                    {linkContent}
                  </a>
                ) : (
                  <Link key={index} to={linkItem.href} className="btn btn-secondary" style={linkStyle}>
                    {linkContent}
                  </Link>
                )
              })
            ) : link.href.startsWith('http://') || link.href.startsWith('https://') ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  fontSize: '0.875rem',
                  padding: '0.625rem 1.25rem',
                  ...(link.icon ? { display: 'inline-flex', alignItems: 'center', gap: '0.5rem' } : {}),
                }}
              >
                {link.icon}
                {link.label}
              </a>
            ) : (
              <Link
                to={link.href}
                className="btn btn-secondary"
                style={{
                  fontSize: '0.875rem',
                  padding: '0.625rem 1.25rem',
                  ...(link.icon ? { display: 'inline-flex', alignItems: 'center', gap: '0.5rem' } : {}),
                }}
              >
                {link.icon}
                {link.label}
              </Link>
            )
          ) : null}
        </div>
      </div>
    </article>
  )
}
