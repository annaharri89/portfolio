import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { ROUTES, STITCH_COUNTER_V2_CASE_STUDY_HASHES } from '../constants/routes'

export default function Skills() {
  return (
    <>
      <Hero
        title="Skills & Technologies"
        subtitle="A comprehensive overview of the technologies, tools, and practices I use to build mobile and web applications"
        variant="compact"
      />
      <section className="skills">
        <div className="container">
          <div className="skills-grid">
            <div className="skill-group">
              <h3 className="skill-group-title">Mobile</h3>
              <ul className="skill-list">
                <li>
                  <span className="tech-tag">Kotlin</span>
                </li>
                <li>
                  <span className="tech-tag">Swift</span>
                </li>
                <li>
                  <span className="tech-tag">Java</span>
                </li>
                <li>
                  <span className="tech-tag">Jetpack Compose</span>
                </li>
                <li>
                  <span className="tech-tag">XML</span>
                </li>
                <li>
                  <span className="tech-tag">SwiftUI</span>
                </li>
                <li>
                  <span className="tech-tag">UIKit</span>
                </li>
                <li>
                  <span className="tech-tag">Native Android</span>
                </li>
                <li>
                  <span className="tech-tag">Native iOS</span>
                </li>
                <li>
                  <span className="tech-tag">DI</span>
                </li>
              </ul>
            </div>

            <div className="skill-group">
              <h3 className="skill-group-title">Multiplatform</h3>
              <ul className="skill-list">
                <li>
                  <span className="tech-tag">Kotlin Multiplatform</span>
                </li>
                <li>
                  <span className="tech-tag">Compose Multiplatform</span>
                </li>
                <li>
                  <span className="tech-tag">Shared Logic Concepts</span>
                </li>
                <li>
                  <span className="tech-tag">Multiplatform UI Concepts</span>
                </li>
                <li>
                  <span className="tech-tag">WASM</span>
                </li>
              </ul>
            </div>

            <div className="skill-group">
              <h3 className="skill-group-title">Web</h3>
              <ul className="skill-list">
                <li>
                  <span className="tech-tag">HTML</span>
                </li>
                <li>
                  <span className="tech-tag">CSS</span>
                </li>
                <li>
                  <span className="tech-tag">TypeScript</span>
                </li>
                <li>
                  <span className="tech-tag">React</span>
                </li>
                <li>
                  <span className="tech-tag">Tailwind CSS</span>
                </li>
              </ul>
            </div>

            <div className="skill-group">
              <h3 className="skill-group-title">Tools & Platforms</h3>
              <ul className="skill-list">
                <li>
                  <span className="tech-tag">Android Studio</span>
                </li>
                <li>
                  <span className="tech-tag">Xcode</span>
                </li>
                <li>
                  <span className="tech-tag">VS Code</span>
                </li>
                <li>
                  <span className="tech-tag">Git</span>
                </li>
                <li>
                  <span className="tech-tag">GitHub</span>
                </li>
                <li>
                  <span className="tech-tag">Bitrise</span>
                </li>
                <li>
                  <span className="tech-tag">Gradle</span>
                </li>
                <li>
                  <span className="tech-tag">Vite</span>
                </li>
              </ul>
            </div>

            <div className="skill-group">
              <h3 className="skill-group-title">Practices</h3>
              <ul className="skill-list">
                <li>
                  <span className="tech-tag">MVVM</span>
                </li>
                <li>
                  <span className="tech-tag">State Management</span>
                </li>
                <li>
                  <span className="tech-tag">Build Configuration</span>
                </li>
                <li>
                  <span className="tech-tag">Release Management</span>
                </li>
                <li>
                  <span className="tech-tag">CI/CD</span>
                </li>
                <li>
                  <span className="tech-tag">Code Ownership</span>
                </li>
              </ul>
            </div>

            <div className="skill-group">
              <h3 className="skill-group-title">Example work</h3>
              <p className="text-neutral-700 leading-relaxed text-base" style={{ marginBottom: 'var(--spacing-md)' }}>
                Case studies with screenshots live on the Stitch Counter (V2) project page.
              </p>
              <div className="case-study__skills-links">
                <Link
                  to={`${ROUTES.STITCH_COUNTER_V2}#${STITCH_COUNTER_V2_CASE_STUDY_HASHES.OVERVIEW}`}
                >
                  Case studies overview
                </Link>
                <Link
                  to={`${ROUTES.STITCH_COUNTER_V2}#${STITCH_COUNTER_V2_CASE_STUDY_HASHES.FEATURE_DEVELOPMENT}`}
                >
                  Architecture &amp; data
                </Link>
                <Link to={`${ROUTES.STITCH_COUNTER_V2}#${STITCH_COUNTER_V2_CASE_STUDY_HASHES.UI_UX}`}>
                  UI / UX
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
