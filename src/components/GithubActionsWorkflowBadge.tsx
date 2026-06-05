export interface GithubActionsWorkflowBadgeProps {
  owner: string
  repo: string
  workflowFile: string
  workflowName?: string
  alt?: string
  ariaLabel?: string
}

export default function GithubActionsWorkflowBadge(props: GithubActionsWorkflowBadgeProps) {
  const workflowUrl = `https://github.com/${props.owner}/${props.repo}/actions/workflows/${props.workflowFile}`
  const badgeWorkflowIdentifier = encodeURIComponent(props.workflowName ?? props.workflowFile)
  const badgeUrl = `https://github.com/${props.owner}/${props.repo}/workflows/${badgeWorkflowIdentifier}/badge.svg`

  return (
    <a
      href={workflowUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block"
      aria-label={props.ariaLabel}
    >
      <img
        src={badgeUrl}
        alt={props.alt ?? 'CI workflow status badge'}
      />
    </a>
  )
}
