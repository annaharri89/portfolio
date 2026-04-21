
import { ROUTES } from '../constants/routes'
import Hero from '@components/Hero'

export default function Skills() {
  return (
    <>
      <Hero
        title="Skills & Technologies"
        subtitle="Android-first strengths, plus professional iOS delivery and hands-on Kotlin Multiplatform learning."
        variant="compact"
      />
      <section class="skills">
        <div class="site-container">
          <div class="skills-grid">
            <div class="skill-group">
              <h3 class="skill-group-title">Android</h3>
              <ul class="skill-list">
                <li>
                  <span class="tech-tag">Android</span>
                </li>
                <li>
                  <span class="tech-tag">Kotlin</span>
                </li>
                <li>
                  <span class="tech-tag">Jetpack Compose</span>
                </li>
                <li>
                  <span class="tech-tag">Coroutines/Flow</span>
                </li>
                <li>
                  <span class="tech-tag">Architecture</span>
                </li>
                <li>
                  <span class="tech-tag">Testing</span>
                </li>
                <li>
                  <span class="tech-tag">Release</span>
                </li>
              </ul>
            </div>

            <div class="skill-group">
              <h3 class="skill-group-title">iOS</h3>
              <ul class="skill-list">
                <li>
                  <span class="tech-tag">iOS</span>
                </li>
                <li>
                  <span class="tech-tag">Swift</span>
                </li>
                <li>
                  <span class="tech-tag">SwiftUI</span>
                </li>
                <li>
                  <span class="tech-tag">UIKit</span>
                </li>
                <li>
                  <span class="tech-tag">Native iOS</span>
                </li>
                <li>
                  <span class="tech-tag">Xcode</span>
                </li>
                <li>
                  <span class="tech-tag">Release workflows</span>
                </li>
              </ul>
            </div>
            <div class="skill-group">
              <h3 class="skill-group-title">Kotlin Multiplatform</h3>
              <ul class="skill-list">
                <li>
                  <span class="tech-tag">Kotlin Multiplatform</span>
                </li>
                <li>
                  <span class="tech-tag">Compose Multiplatform</span>
                </li>
                <li>
                  <span class="tech-tag">Shared domain/data layers</span>
                </li>
                <li>
                  <span class="tech-tag">Cross-platform architecture</span>
                </li>
                <li>
                  <span class="tech-tag">Android + iOS + desktop + web targets</span>
                </li>
                <li>
                  <span class="tech-tag">Personal project implementation</span>
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

            <div class="skill-group">
              <h3 class="skill-group-title">Example work</h3>
              <p class="text-neutral-700 leading-relaxed text-base" style={{ "margin-bottom": 'var(--spacing-md)' }}>
                Case studies with screenshots live on the Stitch Counter (V2) project page; Kotlin Multiplatform
                architecture and a playable demo are on the Solitaire page.
              </p>
              <div class="case-study__skills-links">
                <a href={ROUTES.STITCH_COUNTER_V2}>Stitch Counter (V2)</a>
                <a href={ROUTES.SOLITAIRE}>Solitaire</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
