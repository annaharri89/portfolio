import { ROUTES } from '@consts/routes'
import { SOCIAL_LINKS } from '@consts/social'
import { UPWORK_PROFILE_URL } from '@consts/upwork'

const SITE_PAGE_LINKS = [
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.PROJECTS, label: 'Projects' },
  { path: ROUTES.SKILLS, label: 'Skills' },
] as const

export default function UpworkFooterLinks() {
  return (
    <>
      {SITE_PAGE_LINKS.map((link) => (
        <a href={link.path} class="footer-link">
          {link.label}
        </a>
      ))}
      <a href={UPWORK_PROFILE_URL} target="_blank" rel="noopener noreferrer" class="footer-link">
        Upwork
      </a>
      <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" class="footer-link">
        GitHub
      </a>
    </>
  )
}
