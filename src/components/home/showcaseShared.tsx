import { For } from 'solid-js'
import { A } from '@solidjs/router'
import type { HomeShowcaseProject, HomeShowcaseSecondaryLink } from '../../constants/homeShowcase'
import { classStringToClassList } from '../../utils/classStringToClassList'

export function ShowcaseVisual({
  project,
  class: cssClass,
}: {
  project: HomeShowcaseProject
  class?: string
}) {
  if (project.imageUrl) {
    return (
      <img src={project.imageUrl} alt="" class={cssClass} loading="lazy" decoding="async" />
    )
  }
  return (
    <span class={cssClass} aria-hidden="true">
      {project.emojiVisual ?? '·'}
    </span>
  )
}

export function ShowcaseTagList({ tags, class: cssClass }: { tags: readonly string[]; class?: string }) {
  return (
    <ul class={cssClass ?? 'home-showcase-tags'}>
      <For each={[...tags]}>
        {(tag) => (
          <li>
            <span class="home-showcase-tag">{tag}</span>
          </li>
        )}
      </For>
    </ul>
  )
}

export function ShowcaseHighlights({
  items,
  variant = 'default',
}: {
  items: readonly string[]
  variant?: 'default' | 'compact'
}) {
  if (items.length === 0) {
    return null
  }
  const listClass =
    variant === 'compact' ? 'home-showcase-highlights home-showcase-highlights--compact' : 'home-showcase-highlights'
  return (
    <ul class={listClass}>
      <For each={[...items]}>
        {(text) => <li>{text}</li>}
      </For>
    </ul>
  )
}

export function ShowcaseSecondaryLinks({
  links,
  variant = 'default',
}: {
  links: readonly HomeShowcaseSecondaryLink[]
  variant?: 'default' | 'compact'
}) {
  if (links.length === 0) {
    return null
  }
  const wrapClass =
    variant === 'compact'
      ? 'home-showcase-secondary-links home-showcase-secondary-links--compact'
      : 'home-showcase-secondary-links'
  return (
    <div class={wrapClass}>
      <For each={[...links]}>
        {(link) => {
          const secondaryLinkClass = 'home-showcase-secondary-link'
          if (link.external) {
            return (
              <a href={link.to} class={secondaryLinkClass} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            )
          }
          return (
            <A href={link.to} classList={classStringToClassList(secondaryLinkClass)}>
              {link.label}
            </A>
          )
        }}
      </For>
    </div>
  )
}

export function ShowcasePrimaryCta({
  project,
  class: cssClass,
}: {
  project: HomeShowcaseProject
  class?: string
}) {
  const cls = cssClass ?? 'btn btn-primary'
  if (project.primaryExternal) {
    return (
      <a href={project.primaryHref} class={cls} target="_blank" rel="noopener noreferrer">
        {project.primaryLabel}
      </a>
    )
  }
  return (
    <A href={project.primaryHref} classList={classStringToClassList(cls)}>
      {project.primaryLabel}
    </A>
  )
}

export function ShowcaseTitleLink({
  project,
  class: cssClass,
}: {
  project: HomeShowcaseProject
  class?: string
}) {
  if (project.primaryExternal) {
    return (
      <a href={project.primaryHref} class={cssClass} target="_blank" rel="noopener noreferrer">
        {project.title}
      </a>
    )
  }
  return (
    <A href={project.primaryHref} classList={classStringToClassList(cssClass)}>
      {project.title}
    </A>
  )
}
