import Hero from '../components/Hero'

export default function Skills() {
  return (
    <>
      <Hero
        title="Skills & Technologies"
        subtitle="A comprehensive overview of the technologies, tools, and practices I use to build mobile and web applications"
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
              <h3 className="skill-group-title">Cross-Platform (Learning)</h3>
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
                  <span className="tech-tag">Cross-Platform UI Concepts</span>
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
                  <span className="tech-tag">HTML5</span>
                </li>
                <li>
                  <span className="tech-tag">CSS3</span>
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
                  <span className="tech-tag">MVVM Architecture</span>
                </li>
                <li>
                  <span className="tech-tag">Clean Architecture</span>
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
          </div>
        </div>
      </section>
    </>
  )
}
