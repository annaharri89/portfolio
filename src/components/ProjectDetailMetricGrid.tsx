import type { JSX } from 'solid-js'

export interface ProjectDetailMetricGridProps {
  children: JSX.Element
  columns?: '2' | '3' | '4'
}

export default function ProjectDetailMetricGrid(props: ProjectDetailMetricGridProps) {
  const gridClass =
    props.columns === '4'
      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'
      : props.columns === '2'
        ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'
        : 'grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4'

  return <div class={gridClass}>{props.children}</div>
}
