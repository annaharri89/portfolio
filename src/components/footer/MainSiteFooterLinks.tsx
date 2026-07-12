import { ROUTES } from '@consts/routes'
import { SOCIAL_LINKS } from '@consts/social'

const SITE_PAGE_LINKS = [
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.PROJECTS, label: 'Projects' },
  { path: ROUTES.SKILLS, label: 'Skills' },
  { path: ROUTES.CONTACT, label: 'Contact' },
] as const

export default function MainSiteFooterLinks() {
  return (
    <>
      {SITE_PAGE_LINKS.map((link) => (
        <a href={link.path} class="footer-link">
          {link.label}
        </a>
      ))}
      <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" class="footer-link">
        LinkedIn
      </a>
      <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" class="footer-link">
        GitHub
      </a>
    </>
  )
}
