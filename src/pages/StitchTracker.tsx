import Hero from '../components/Hero'
import ImageCarousel from '@components/Carousel'
import GithubIcon from '../components/icons/GithubIcon'
import { CaseStudyLightboxProvider } from '../components/caseStudy/CaseStudyLightbox'
import { getProjectSlides, Project } from '@consts/projects'
import { ROUTES, STITCH_COUNTER_V2_CASE_STUDY_HASHES } from '../constants/routes'
import StitchTrackerCaseStudies from './StitchTrackerCaseStudies'

export default function StitchTracker() {
  return (
    <CaseStudyLightboxProvider>
      <>
        <Hero
          title="Stitch Counter (V2)"
          subtitle="An evolution of Stitch Counter with enhanced features and a modern user experience."
          variant="compact"
        />
        <section class="project-detail">
          <div class="container">
            <div class="project-detail-content">
              <div class="project-detail-section">
                <div class="project-header">
                  <div class="project-header-row">
                    <img
                      src="/images/stitch_counter_v2.png"
                      alt="Stitch Counter V2 Icon"
                      class="project-detail-icon project-header-icon"
                    />
                    <div style={{ display: 'flex', "align-items": 'center' }}>
                      <h3 class="project-header-title">Stitch Counter (V2)</h3>
                    </div>
                  </div>
                  <p class="text-neutral-700 leading-relaxed text-base">
                    Stitch Counter V2 is the next generation of stitch counting, building upon the
                    original{' '}
                    <a href={ROUTES.STITCH_COUNTER} class="text-blue-600 hover:text-blue-800 underline">
                      Stitch Counter
                    </a>{' '}
                    with enhanced features and a modern user experience. It includes all the features
                    from the original app plus the ability to add photos to your projects and a
                    completely redesigned UI built with Jetpack Compose.
                  </p>
                  <p class="text-neutral-700 leading-relaxed text-base mt-6">
                    <a
                      href={`#${STITCH_COUNTER_V2_CASE_STUDY_HASHES.OVERVIEW}`}
                      class="text-blue-600 hover:text-blue-800 underline"
                    >
                      Case studies
                    </a>{' '}
                    (architecture, UI/UX, screenshots) for this app are below on this page.
                  </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4>Features</h4>
                    <ul class="list-disc list-inside space-y-2 text-neutral-700">
                      <li>Single and Double counter project modes for tracking stitches and/or rows</li>
                      <li>
                        Library system to save counters and return to them later using Room, an
                        abstraction layer over SQLite, for the database.
                      </li>
                      <li>
                        Three different customizable color themes using Material3 and DataStore to
                        save the theme selection. The theme selection changes the app icon.
                      </li>
                      <li>
                        Responsive design for all device sizes using Jetpack Compose. Optimized for
                        portrait and landscape orientations.
                      </li>
                      <li>
                        The user can upload up to 10 photos to each project. Photos are saved to the
                        device&apos;s file system, and file paths are stored in Room. Images are loaded
                        with Coil using these stored paths.
                      </li>
                      <li>
                        There is an import/export feature to save and load the project library so the
                        user can backup their projects and restore them later. This is helpful since
                        the project library is only local to the device.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ImageCarousel slides={getProjectSlides(Project.STITCH_TRACKER)} />
                  </div>
                </div>
                <div class="project-tags">
                  <span class="year-chip">2025</span>
                  <span class="tech-tag">Native Android</span>
                  <span class="tech-tag">Kotlin</span>
                  <span class="tech-tag">Jetpack Compose</span>
                  <span class="tech-tag">Material3</span>
                  <span class="tech-tag">Room</span>
                  <span class="tech-tag">Hilt</span>
                  <span class="tech-tag">DataStore</span>
                  <span class="tech-tag">Coil</span>
                  <span class="tech-tag">Ramcosta Compose Destinations</span>
                  <div
                    style={{
                      width: '100%',
                      "margin-top": 'var(--spacing-lg)',
                      "margin-bottom": 'var(--spacing-sm)',
                    }}
                  >
                    <h4>In Progress</h4>
                  </div>
                  <span class="tech-tag">Native iOS</span>
                  <span class="tech-tag">Swift</span>
                  <span class="tech-tag">SwiftUI</span>
                </div>
                <div class="project-links">
                  <a href={ROUTES.STITCH_COUNTER_V2_BETA} class="project-link">
                    Try Stitch Counter (Android Beta)
                  </a>
                  <div class="project-links">
                    <a href={ROUTES.STITCH_COUNTER_V2_PRIVACY_POLICY} class="project-link">
                      Privacy Policy
                    </a>
                    <a href={ROUTES.STITCH_COUNTER_V2_EULA} class="project-link">
                      EULA
                    </a>
                  </div>
                  <a
                    href="https://github.com/annaharri89/stitchCounterV2"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-link"
                  >
                    <GithubIcon />
                    View Android codebase on GitHub
                  </a>
                  <a
                    href="https://github.com/annaharri89/stitchCounterV2.ios"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-link"
                  >
                    <GithubIcon />
                    View iOS codebase on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <StitchTrackerCaseStudies />
      </>
    </CaseStudyLightboxProvider>
  )
}
