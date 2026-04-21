import type { JSX } from 'solid-js'

export interface ProjectDetailStatTileProps {
  label: string
  value: string | JSX.Element
  metric?: boolean
}

export default function ProjectDetailStatTile(props: ProjectDetailStatTileProps) {
  const metricClass =
    props.metric === false ? '' : ' project-detail-stat-tile--metric'

  return (
    <div class={`project-detail-stat-tile${metricClass}`}>
      <p class="project-detail-stat-tile__label">{props.label}</p>
      <div class="project-detail-stat-tile__value">{props.value}</div>
    </div>
  )
}
