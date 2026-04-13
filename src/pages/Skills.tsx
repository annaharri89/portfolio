import Hero from '@components/Hero'

export default function Skills() {
  return (
    <>
      <Hero
        title="Skills & Technologies"
        subtitle="A comprehensive overview of the technologies, tools, and practices I use to build mobile and web applications"
        variant="compact"
      />
      <section class="skills">
        <div class="container">
          <div class="skills-grid">
            <div class="skill-group">
              <h3 class="skill-group-title">Mobile</h3>
              <ul class="skill-list">
                <li>
                  <span class="tech-tag">Kotlin</span>
                </li>
                <li>
                  <span class="tech-tag">Swift</span>
                </li>
                <li>
                  <span class="tech-tag">Java</span>
                </li>
                <li>
                  <span class="tech-tag">Jetpack Compose</span>
                </li>
                <li>
                  <span class="tech-tag">XML</span>
                </li>
                <li>
                  <span class="tech-tag">SwiftUI</span>
                </li>
                <li>
                  <span class="tech-tag">UIKit</span>
                </li>
                <li>
                  <span class="tech-tag">Native Android</span>
                </li>
                <li>
                  <span class="tech-tag">Native iOS</span>
                </li>
                <li>
                  <span class="tech-tag">DI</span>
                </li>
              </ul>
            </div>

            <div class="skill-group">
              <h3 class="skill-group-title">Multiplatform</h3>
              <ul class="skill-list">
                <li>
                  <span class="tech-tag">Kotlin Multiplatform</span>
                </li>
                <li>
                  <span class="tech-tag">Compose Multiplatform</span>
                </li>
                <li>
                  <span class="tech-tag">Shared Logic Concepts</span>
                </li>
                <li>
                  <span class="tech-tag">Multiplatform UI Concepts</span>
                </li>
                <li>
                  <span class="tech-tag">WASM</span>
                </li>
              </ul>
            </div>

            <div class="skill-group">
              <h3 class="skill-group-title">Web</h3>
              <ul class="skill-list">
                <li>
                  <span class="tech-tag">HTML</span>
                </li>
                <li>
                  <span class="tech-tag">CSS</span>
                </li>
                <li>
                  <span class="tech-tag">TypeScript</span>
                </li>
                <li>
                  <span class="tech-tag">SolidJS</span>
                </li>
                <li>
                  <span class="tech-tag">Tailwind CSS</span>
                </li>
              </ul>
            </div>

            <div class="skill-group">
              <h3 class="skill-group-title">Tools & Platforms</h3>
              <ul class="skill-list">
                <li>
                  <span class="tech-tag">Android Studio</span>
                </li>
                <li>
                  <span class="tech-tag">Xcode</span>
                </li>
                <li>
                  <span class="tech-tag">VS Code</span>
                </li>
                <li>
                  <span class="tech-tag">Git</span>
                </li>
                <li>
                  <span class="tech-tag">GitHub</span>
                </li>
                <li>
                  <span class="tech-tag">Bitrise</span>
                </li>
                <li>
                  <span class="tech-tag">Gradle</span>
                </li>
                <li>
                  <span class="tech-tag">Vite</span>
                </li>
              </ul>
            </div>

            <div class="skill-group">
              <h3 class="skill-group-title">Practices</h3>
              <ul class="skill-list">
                <li>
                  <span class="tech-tag">MVVM</span>
                </li>
                <li>
                  <span class="tech-tag">State Management</span>
                </li>
                <li>
                  <span class="tech-tag">Build Configuration</span>
                </li>
                <li>
                  <span class="tech-tag">Release Management</span>
                </li>
                <li>
                  <span class="tech-tag">CI/CD</span>
                </li>
                <li>
                  <span class="tech-tag">Code Ownership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
