import { ROUTES } from '@consts/routes'

export default function MainSiteDualBrandCaseStudyCta() {
  return (
    <p class="case-study__section-lead" style={{ 'margin-top': 'var(--spacing-xl)' }}>
      <a href={ROUTES.CONTACT} class="case-study__text-link">
        Get in touch
      </a>{' '}
      if you want to talk about multi-brand mobile or release engineering.
    </p>
  )
}
