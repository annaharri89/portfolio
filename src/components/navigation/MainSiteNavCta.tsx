import { ROUTES } from '@consts/routes'

export default function MainSiteNavCta(props: { onNavigate: () => void }) {
  return (
    <a href={ROUTES.CONTACT} class="nav-cta" onClick={props.onNavigate}>
      Get in touch
    </a>
  )
}
