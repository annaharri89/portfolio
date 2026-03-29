import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ImageCarousel from '../components/ImageCarousel'
import GithubIcon from '../components/icons/GithubIcon'
import { CaseStudyLightboxProvider } from '../components/caseStudy/CaseStudyLightbox'
import { STITCH_TRACKER_SLIDES } from '../constants/projects'
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
        <section className="project-detail">
          <div className="container">
            <div className="project-detail-content">
              <div className="project-detail-section">
                <div className="project-header">
                  <div className="project-header-row">
                    <img
                      src="/images/stitch_counter_v2.png"
                      alt="Stitch Counter V2 Icon"
                      className="project-detail-icon project-header-icon"
                    />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <h3 className="project-header-title">Stitch Counter (V2)</h3>
                    </div>
                  </div>
                  <p className="text-neutral-700 leading-relaxed text-base">
                    Stitch Counter V2 is the next generation of stitch counting, building upon the
                    original{' '}
                    <Link to={ROUTES.STITCH_COUNTER} className="text-blue-600 hover:text-blue-800 underline">
                      Stitch Counter
                    </Link>{' '}
                    with enhanced features and a modern user experience. It includes all the features
                    from the original app plus the ability to add photos to your projects and a
                    completely redesigned UI built with Jetpack Compose.
                  </p>
                  <p className="text-neutral-700 leading-relaxed text-base mt-6">
                    <a
                      href={`#${STITCH_COUNTER_V2_CASE_STUDY_HASHES.OVERVIEW}`}
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Case studies
                    </a>{' '}
                    (architecture, UI/UX, screenshots) for this app are below on this page.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4>Features</h4>
                    <ul className="list-disc list-inside space-y-2 text-neutral-700">
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
                    <ImageCarousel slides={STITCH_TRACKER_SLIDES} />
                  </div>
                </div>
                <div className="project-tags">
                  <span className="year-chip">2025</span>
                  <span className="tech-tag">Native Android</span>
                  <span className="tech-tag">Kotlin</span>
                  <span className="tech-tag">Jetpack Compose</span>
                  <span className="tech-tag">Material3</span>
                  <span className="tech-tag">Room</span>
                  <span className="tech-tag">Hilt</span>
                  <span className="tech-tag">DataStore</span>
                  <span className="tech-tag">Coil</span>
                  <span className="tech-tag">Ramcosta Compose Destinations</span>
                  <div
                    style={{
                      width: '100%',
                      marginTop: 'var(--spacing-lg)',
                      marginBottom: 'var(--spacing-sm)',
                    }}
                  >
                    <h4>In Progress</h4>
                  </div>
                  <span className="tech-tag">Native iOS</span>
                  <span className="tech-tag">Swift</span>
                  <span className="tech-tag">SwiftUI</span>
                </div>
                <div className="project-links">
                  <Link to={ROUTES.STITCH_COUNTER_V2_BETA} className="project-link">
                    Try Stitch Counter (Android Beta)
                  </Link>
                  <div className="project-links">
                    <Link to={ROUTES.STITCH_COUNTER_V2_PRIVACY_POLICY} className="project-link">
                      Privacy Policy
                    </Link>
                    <Link to={ROUTES.STITCH_COUNTER_V2_EULA} className="project-link">
                      EULA
                    </Link>
                  </div>
                  <a
                    href="https://github.com/annaharri89/stitchCounterV2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <GithubIcon />
                    View Android codebase on GitHub
                  </a>
                  <a
                    href="https://github.com/annaharri89/stitchCounterV2.ios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
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
