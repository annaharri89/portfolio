import { Show } from 'solid-js'
import type { JSX } from 'solid-js'

interface ProjectDetailsCardProps {
  about: string
  features?: JSX.Element
  tags?: JSX.Element
  tagsHeader?: string
}

export default function ProjectDetailsCard(props: ProjectDetailsCardProps) {
  return (
    <div class="card mb-12" style={{ padding: 'var(--spacing-lg)' }}>
      <div class="space-y-8">
        <div>
          <h3 class="text-2xl font-semibold mb-4 text-neutral-900">About the Project</h3>
          <p class="text-neutral-700 leading-relaxed text-base">{props.about}</p>
        </div>

        <Show when={props.features}>
          <div>
            <h3 class="text-2xl font-semibold mb-4 text-neutral-900">Features</h3>
            {props.features}
          </div>
        </Show>

        <Show when={props.tags}>
          <div>
            <Show when={props.tagsHeader}>
              <h3 class="text-2xl font-semibold mb-4 text-neutral-900">{props.tagsHeader}</h3>
            </Show>
            <div class="flex flex-wrap gap-3 pt-2">{props.tags}</div>
          </div>
        </Show>
      </div>
    </div>
  )
}
