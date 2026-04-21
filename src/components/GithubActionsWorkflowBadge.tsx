export interface GithubActionsWorkflowBadgeProps {
  owner: string
  repo: string
  workflowFile: string
  alt?: string
  ariaLabel?: string
}

export default function GithubActionsWorkflowBadge(props: GithubActionsWorkflowBadgeProps) {
  const workflowUrl = `https://github.com/${props.owner}/${props.repo}/actions/workflows/${props.workflowFile}`

  return (
    <a
      href={workflowUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block"
      aria-label={props.ariaLabel}
    >
      <img
        src={`${workflowUrl}/badge.svg`}
        alt={props.alt ?? 'CI workflow status badge'}
      />
    </a>
  )
}
