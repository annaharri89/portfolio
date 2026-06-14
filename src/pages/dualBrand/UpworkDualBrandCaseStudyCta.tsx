import { UPWORK_PROFILE_URL } from '@consts/upwork'

export default function UpworkDualBrandCaseStudyCta() {
  return (
    <p class="case-study__section-lead" style={{ 'margin-top': 'var(--spacing-xl)' }}>
      <a
        href={UPWORK_PROFILE_URL}
        class="case-study__text-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View my Upwork profile
      </a>{' '}
      for freelance Android work.
    </p>
  )
}
