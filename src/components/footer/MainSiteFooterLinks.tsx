import { ROUTES } from '@consts/routes'
import { SOCIAL_LINKS } from '@consts/social'

export default function MainSiteFooterLinks() {
  return (
    <>
      <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" class="footer-link">
        LinkedIn
      </a>
      <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" class="footer-link">
        GitHub
      </a>
      <a href={ROUTES.CONTACT} class="footer-link">
        Contact
      </a>
    </>
  )
}
