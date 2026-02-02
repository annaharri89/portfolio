import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

const NAV_ITEMS = [
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.PROJECTS, label: 'Projects' },
  { path: ROUTES.SKILLS, label: 'Skills' },
  { path: ROUTES.CONTACT, label: 'Contact' },
]

export default function Navigation() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="nav" id="nav">
      <div className="nav-container">
        <Link to={ROUTES.HOME} className="nav-logo">
          Anna Harrison
        </Link>
        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className="nav-menu" id="navMenu" aria-expanded={isMenuOpen}>
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
