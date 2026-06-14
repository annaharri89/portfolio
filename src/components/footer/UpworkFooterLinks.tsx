import { SOCIAL_LINKS } from '@consts/social'
import { UPWORK_PROFILE_URL } from '@consts/upwork'

export default function UpworkFooterLinks() {
  return (
    <>
      <a href={UPWORK_PROFILE_URL} target="_blank" rel="noopener noreferrer" class="footer-link">
        Upwork
      </a>
      <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" class="footer-link">
        GitHub
      </a>
    </>
  )
}
