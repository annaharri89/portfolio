import { Show, For } from 'solid-js'
import type { JSX, ParentProps } from 'solid-js'
import { A } from '@solidjs/router'

export function ProjectCardGrid(props: ParentProps) {
  return (
    <section class="projects">
      <div class="container">
        <div class="projects-grid">{props.children}</div>
      </div>
    </section>
  )
}

interface LinkItem {
  href: string
  label: string
  icon?: JSX.Element
}

interface ProjectCardProps {
  icon: string | JSX.Element
  title: string
  description: string
  tags: Array<{ year?: string; tech: string }[]>
  link?: LinkItem | LinkItem[]
  comingSoon?: boolean
  tagGroupHeaders?: (string | undefined)[]
}

function ProjectLinkButton(props: { link: LinkItem; style?: JSX.CSSProperties }) {
  const isExternal = () => props.link.href.startsWith('http://') || props.link.href.startsWith('https://')

  return (
    <Show
      when={isExternal()}
      fallback={
        <A href={props.link.href} class="btn btn-secondary" style={props.style}>
          {props.link.icon}
          {props.link.label}
        </A>
      }
    >
      <a href={props.link.href} target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style={props.style}>
        {props.link.icon}
        {props.link.label}
      </a>
    </Show>
  )
}

export function ProjectCard(props: ProjectCardProps) {
  const cardClasses = () => props.comingSoon
    ? 'project-card project-card-coming-soon'
    : 'project-card project-card-active'

  const buildLinkStyle = (linkItem: LinkItem, hasMarginRight = false): JSX.CSSProperties => ({
    "font-size": '0.875rem',
    padding: '0.625rem 1.25rem',
    ...(hasMarginRight ? { "margin-right": '0.5rem' } : {}),
    ...(linkItem.icon ? { display: 'inline-flex', "align-items": 'center', gap: '0.5rem' } : {}),
  })

  return (
    <article class={cardClasses()}>
      <div class="project-content">
        <h3 class="project-title">
          {typeof props.icon === 'string' && props.icon.startsWith('/') ? (
            <img src={props.icon} alt={props.title} class="project-title-icon" />
          ) : typeof props.icon === 'string' ? (
            <span class="project-title-icon project-title-icon-placeholder">{props.icon}</span>
          ) : (
            props.icon
          )}
          {props.title}
        </h3>
        <p class="project-description" innerHTML={props.description} />
        <For each={props.tags}>{(tagGroup, groupIndex) => (
          <div>
            <Show when={props.tagGroupHeaders && props.tagGroupHeaders[groupIndex()]}>
              <h4 class="text-lg font-semibold mb-2 text-neutral-900">{props.tagGroupHeaders![groupIndex()]}</h4>
            </Show>
            <div class="project-tags">
              <For each={tagGroup}>{(tag) => (
                <>
                  <Show when={tag.year}>
                    <span class="year-chip">{tag.year}</span>
                  </Show>
                  <span class="tech-tag">{tag.tech}</span>
                </>
              )}</For>
            </div>
          </div>
        )}</For>
        <div class="project-links">
          {props.comingSoon ? (
            <button
              disabled
              class="btn btn-secondary"
              style={{ "font-size": '0.875rem', padding: '0.625rem 1.25rem', opacity: 0.5, cursor: 'not-allowed' }}
            >
              Coming Soon
            </button>
          ) : props.link ? (
            Array.isArray(props.link) ? (
              <For each={props.link}>{(linkItem, index) => (
                <ProjectLinkButton
                  link={linkItem}
                  style={buildLinkStyle(linkItem, index() < (props.link as LinkItem[]).length - 1)}
                />
              )}</For>
            ) : (
              <ProjectLinkButton link={props.link as LinkItem} style={buildLinkStyle(props.link as LinkItem)} />
            )
          ) : null}
        </div>
      </div>
    </article>
  )
}
