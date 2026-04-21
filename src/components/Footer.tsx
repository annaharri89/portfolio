import { ROUTES } from '@consts/routes'
import { SOCIAL_LINKS } from '@consts/social'

export default function Footer() {
  return (

    <footer class="footer">
      <div class="site-container footer-inner">
        <p class="footer-text">&copy; 2026 Anna Harrison. All rights reserved.</p>
        <nav class="footer-links" aria-label="Social and contact">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" class="footer-link">
            LinkedIn
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" class="footer-link">
            GitHub
          </a>
          <a href={ROUTES.CONTACT} class="footer-link">
            Contact
          </a>
        </nav>
        </div>
    </footer>
  )
}
