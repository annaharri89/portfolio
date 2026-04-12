import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { SOCIAL_LINKS } from '../constants/social'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">&copy; 2026 Anna Harrison. All rights reserved.</p>
        <nav className="footer-links" aria-label="Social and contact">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <Link to={ROUTES.CONTACT} className="footer-link">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
