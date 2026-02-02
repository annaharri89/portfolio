import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

export default function NavigationCards() {
  return (
    <section className="container">
      <div className="nav-cards">
        <Link to={ROUTES.PROJECTS} className="nav-card nav-card-projects">
          <span className="nav-card-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="nav-card-title">Projects</h3>
          <p className="nav-card-description">Explore my portfolio of cross-platform applications and web projects</p>
        </Link>
        <Link to={ROUTES.SKILLS} className="nav-card nav-card-skills">
          <span className="nav-card-icon">&lt; / &gt;</span>
          <h3 className="nav-card-title">Skills</h3>
          <p className="nav-card-description">Discover the technologies and tools I work with</p>
        </Link>
        <Link to={ROUTES.CONTACT} className="nav-card nav-card-contact">
          <span className="nav-card-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 6L12 13L2 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="nav-card-title">Contact</h3>
          <p className="nav-card-description">Let's connect and discuss your next project</p>
        </Link>
      </div>
    </section>
  )
}
