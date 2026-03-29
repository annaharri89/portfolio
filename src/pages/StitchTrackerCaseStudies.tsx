import CaseStudyImage from '../components/caseStudy/CaseStudyImage'

const IMG_DEV = '/work/android-feature-development'
const IMG_UX = '/work/android-ui-ux'

export default function StitchTrackerCaseStudies() {
  return (
    <section
      className="project-detail case-study"
      id="stitch-counter-case-studies"
      aria-label="Case studies from Stitch Counter (V2)"
    >
      <div className="container">
        <h2 className="case-study__page-section-title">Case studies</h2>
        <p className="case-study__section-lead" style={{ maxWidth: '40rem' }}>
          Deeper proof from this app: architecture and data, backup and performance, then UI, themes,
          and interaction patterns—all on one page.
        </p>

        <article className="case-study__doc" id="case-study-feature-development">
          <div className="case-study__hero-band" style={{ borderRadius: 'var(--radius-lg)', marginBottom: 0 }}>
            <div style={{ padding: 'var(--spacing-xl) 0' }}>
              <h3 className="case-study__doc-intro-title">
                Feature development:{' '}
                <span className="case-study__headline-accent">Architecture, data, reliability</span>
              </h3>
              <p className="case-study__section-lead" style={{ marginTop: 'var(--spacing-sm)' }}>
                Selected work from this production app: data layer, backup/restore, and stable UI tied
                to real state.
              </p>
              <div className="case-study__hero-chips">
                <span className="case-study__chip">Structured local data</span>
                <span className="case-study__chip">Data safety &amp; portability</span>
                <span className="case-study__chip">Layered, maintainable code</span>
              </div>
            </div>
          </div>

          <section className="case-study__section">
            <div className="case-study__two-col">
              <div className="case-study__card">
                <h3 className="case-study__block-title">How I structure feature work</h3>
                <div className="case-study__bullet-list">
                  <div className="case-study__bullet">
                    <span className="case-study__bullet-dot" aria-hidden />
                    <span>
                      <strong>Separation of concerns: </strong>UI, logic, and data stay apart.
                    </span>
                  </div>
                  <div className="case-study__bullet">
                    <span className="case-study__bullet-dot" aria-hidden />
                    <span>
                      <strong>Data as a stable foundation: </strong>Clear persistence; survives growth.
                    </span>
                  </div>
                  <div className="case-study__bullet">
                    <span className="case-study__bullet-dot" aria-hidden />
                    <span>
                      <strong>Reliability by design: </strong>Validates and fails safely, not only the
                      happy path.
                    </span>
                  </div>
                  <div className="case-study__bullet">
                    <span className="case-study__bullet-dot" aria-hidden />
                    <span>
                      <strong>UI that follows real state: </strong>Clear loading states and errors;
                      smooth lists.
                    </span>
                  </div>
                </div>
              </div>
              <div className="case-study__frame">
                <CaseStudyImage
                  src={`${IMG_DEV}/case2_data_room_dao.png`}
                  caption="Room DAO"
                  enlargedDescription="Kotlin Room DAO with Flow queries and suspend writes"
                  variant="default"
                />
              </div>
            </div>
          </section>

          <section className="case-study__section">
            <h3 className="case-study__section-title case-study__section-title--accent">
              Proof: Scalable architecture that won’t break as your app grows
            </h3>
            <p className="case-study__section-lead">
              Your data is structured, persistent, and built to scale; so your app stays reliable as
              features grow.
            </p>
            <div className="case-study__card">
              <p className="case-study__kicker">Case study 1 · Data architecture</p>
              <h4 className="case-study__block-title">Project management system</h4>
              <div className="case-study__block">
                <h4>What it does</h4>
                <p>
                  A structured system for creating, editing, and organizing projects with persistent
                  local storage through Room.
                </p>
              </div>
              <div className="case-study__block">
                <h4>What makes it valuable</h4>
                <ul>
                  <li>Data is safely stored and persists across sessions (no loss, no resets)</li>
                  <li>Well structured relationships between features and data</li>
                  <li>Built to handle growth without performance issues</li>
                  <li>Clear separation of UI and logic for easier updates and fewer bugs</li>
                </ul>
              </div>
              <div className="case-study__block">
                <h4>Why this matters for your app</h4>
                <p>
                  Your app is built on a solid foundation, so it stays stable, scalable, and easy to
                  expand over time. No rebuilds. No fragile code.
                </p>
              </div>
              <div className="case-study__strip">
                <CaseStudyImage
                  src={`${IMG_DEV}/case1_data_library.png`}
                  caption="Project library"
                  enlargedDescription="Project library screen with project cards"
                  variant="strip"
                />
                <CaseStudyImage
                  src={`${IMG_DEV}/case2_data_project_details.png`}
                  caption="Project details"
                  enlargedDescription="Project details screen with fields and progress"
                  variant="strip"
                />
                <CaseStudyImage
                  src={`${IMG_DEV}/case2_data_room_dao.png`}
                  caption="Room DAO"
                  enlargedDescription="Kotlin Room DAO with Flow queries and suspend writes"
                  variant="strip"
                />
              </div>
            </div>
          </section>

          <section className="case-study__section">
            <h3 className="case-study__section-title case-study__section-title--accent">
              Proof: Keep user data safe and transferable across devices
            </h3>
            <p className="case-study__section-lead">
              Back up and restore app data locally without loss, so users can move to a new device
              and keep their progress.
            </p>
            <div className="case-study__card">
              <p className="case-study__kicker">Case study 2 · Data safety &amp; reliability</p>
              <h4 className="case-study__block-title">Backup &amp; restore system</h4>
              <div className="case-study__block">
                <h4>What it does</h4>
                <p>Safely export and restore full app data with validation and error handling.</p>
              </div>
              <div className="case-study__block">
                <h4>What makes it valuable</h4>
                <ul>
                  <li>Data can be backed up and restored without corruption or loss</li>
                  <li>Invalid data is handled safely to prevent crashes</li>
                  <li>Clear feedback for success and failure states</li>
                  <li>Edge cases handled to keep behavior predictable</li>
                </ul>
              </div>
              <div className="case-study__block">
                <h4>Why this matters for your app</h4>
                <p>
                  Protects user data and prevents crashes, so your app stays reliable even when things
                  go wrong.
                </p>
              </div>
              <div className="case-study__row--2">
                <CaseStudyImage
                  src={`${IMG_DEV}/case2_backup_restore_settings.png`}
                  caption="Backup &amp; restore UI"
                  enlargedDescription="Settings screen with Backup and Restore export and import actions"
                  variant="pair"
                />
                <CaseStudyImage
                  src={`${IMG_DEV}/case2_backup_backup_manager.png`}
                  caption="BackupManager"
                  enlargedDescription="Kotlin BackupManager creating backup zip with JSON and image files"
                  variant="pair"
                />
              </div>
            </div>
          </section>

          <section className="case-study__section">
            <h3 className="case-study__section-title case-study__section-title--accent">
              Proof: Fast, stable UI that stays in sync as your app grows
            </h3>
            <p className="case-study__section-lead">
              Keep scrolling, updates, and navigation smooth without lag, dropped frames, or out-of-sync
              state.
            </p>
            <div className="case-study__card">
              <p className="case-study__kicker">Case study 3 · Performance &amp; state handling</p>
              <h4 className="case-study__block-title">
                Fast, stable UI and state handling that stays in sync
              </h4>
              <div className="case-study__block">
                <h4>What it does</h4>
                <p>
                  Keeps UI, navigation, and state updates fast and in sync across complex screens.
                </p>
              </div>
              <div className="case-study__block">
                <h4>Performance and state handling in real usage</h4>
                <ul>
                  <li>Smooth scrolling and interaction with large datasets</li>
                  <li>No UI freezing or dropped frames</li>
                  <li>UI stays in sync with navigation and app state</li>
                  <li>
                    Efficient rendering that avoids unnecessary work and reduces battery usage
                  </li>
                </ul>
              </div>
              <div className="case-study__block">
                <h4>Why this matters for your app</h4>
                <p>
                  Keeps your app fast and predictable, even as data and complexity grow, without lag
                  or inconsistent behavior.
                </p>
              </div>
              <div className="case-study__row--2">
                <CaseStudyImage
                  src={`${IMG_DEV}/case3_smooth_scrolling.png`}
                  caption="Smooth scrolling (LazyColumn)"
                  enlargedDescription="Kotlin LaunchedEffect with animateScrollBy and tween for smooth list scrolling after new items"
                  variant="pair"
                />
                <CaseStudyImage
                  src={`${IMG_DEV}/case3_navigation_sync.png`}
                  caption="UI in sync with navigation"
                  enlargedDescription="RootNavigationScreen deriving selected tab from NavController back stack for bottom bar and rail"
                  variant="pair"
                />
              </div>
            </div>
          </section>
        </article>

        <article className="case-study__doc" id="case-study-android-ui-ux">
          <div className="case-study__hero-band" style={{ borderRadius: 'var(--radius-lg)', marginBottom: 0 }}>
            <div style={{ padding: 'var(--spacing-xl) 0' }}>
              <h3 className="case-study__doc-intro-title">
                Android UI/UX:{' '}
                <span className="case-study__headline-accent">That actually work</span>
              </h3>
              <p className="case-study__section-lead" style={{ marginTop: 'var(--spacing-sm)' }}>
                Fast, reliable feature work for existing Android apps. Interfaces and experience that
                hold up under real use.
              </p>
              <div className="case-study__hero-chips">
                <span className="case-study__chip">Real app systems</span>
                <span className="case-study__chip">Responsive UI</span>
                <span className="case-study__chip">Smart UX</span>
              </div>
            </div>
          </div>

          <section className="case-study__section">
            <div className="case-study__two-col">
              <div className="case-study__card">
                <h3 className="case-study__block-title">What I build</h3>
                <div className="case-study__bullet-list">
                  <div className="case-study__bullet">
                    <span className="case-study__bullet-dot" aria-hidden />
                    <span>New features added to your existing Android app</span>
                  </div>
                  <div className="case-study__bullet">
                    <span className="case-study__bullet-dot" aria-hidden />
                    <span>Responsive Compose UI that works across devices</span>
                  </div>
                  <div className="case-study__bullet">
                    <span className="case-study__bullet-dot" aria-hidden />
                    <span>UX that increases user engagement</span>
                  </div>
                  <div className="case-study__bullet">
                    <span className="case-study__bullet-dot" aria-hidden />
                    <span>
                      Clean, maintainable feature architecture (MVVM / separation of concerns)
                    </span>
                  </div>
                </div>
              </div>
              <div className="case-study__frame">
                <CaseStudyImage
                  src={`${IMG_UX}/library_screen.default_theme.jpg`}
                  caption="Project library"
                  enlargedDescription="Project library screen with default theme"
                  variant="default"
                />
              </div>
            </div>
          </section>

          <section className="case-study__section">
            <h3 className="case-study__section-title case-study__section-title--accent">
              Proof: Production-ready UI that works flawlessly across devices
            </h3>
            <p className="case-study__section-lead">
              Get instant, lag-free input and a layout that scales cleanly across phones and tablets:
              no broken screens, no performance issues.
            </p>
            <div className="case-study__card">
              <div className="case-study__case-split">
                <div className="case-study__case-split-media">
                  <CaseStudyImage
                    src={`${IMG_UX}/counter_big_numbers_portrait.png`}
                    caption="Dynamic text scaling — portrait"
                    enlargedDescription="Smart counter with large numbers in portrait"
                    variant="default"
                  />
                  <CaseStudyImage
                    src={`${IMG_UX}/landscape_example.png`}
                    caption="Dynamic text scaling — landscape"
                    enlargedDescription="Counter layout in landscape orientation"
                    variant="default"
                  />
                </div>
                <div className="case-study__case-split-copy">
                  <p className="case-study__kicker">Case study 1 · UI / interaction</p>
                  <h4 className="case-study__block-title">Smart counter system</h4>
                  <div className="case-study__block">
                    <h4>What it does</h4>
                    <p>
                      A real-time counter interaction system designed for fast input and long-running
                      usage sessions.
                    </p>
                  </div>
                  <div className="case-study__block">
                    <h4>What makes it valuable</h4>
                    <ul>
                      <li>Instant input response with no visible UI lag</li>
                      <li>UI that adapts cleanly as content changes (no overflow or layout breakage)</li>
                      <li>Seamless experience across portrait and landscape on phones and tablets</li>
                      <li>Consistent, stable layout across different screen sizes</li>
                    </ul>
                  </div>
                  <div className="case-study__block">
                    <h4>Why this matters for your app</h4>
                    <p>
                      Designed to hold up under real usage, not just ideal conditions, so your app
                      stays stable as users interact with it over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="case-study__section">
            <h3 className="case-study__section-title case-study__section-title--accent">
              Proof: Consistent, polished UI across every screen and theme
            </h3>
            <p className="case-study__section-lead">
              Switch between themes and dark modes without visual bugs, broken layouts, or
              inconsistent styling.
            </p>
            <div className="case-study__card">
              <p className="case-study__kicker">Case study 2 · UI / UX</p>
              <h4 className="case-study__block-title">Dynamic theme system</h4>
              <div className="case-study__block">
                <h4>What it does</h4>
                <p>
                  A flexible theming system that supports multiple visual styles with consistent
                  behavior across the entire app by overriding Material Design 3.
                </p>
              </div>
              <div className="case-study__block">
                <h4>What makes it valuable</h4>
                <ul>
                  <li>Multiple fully designed themes with consistent styling across all screens</li>
                  <li>Dark mode support for every theme</li>
                  <li>Custom app icons that match each theme for a cohesive experience</li>
                  <li>Centralized styling system that keeps UI consistent as features grow</li>
                  <li>Theme switching without layout issues</li>
                </ul>
              </div>
              <div className="case-study__block">
                <h4>Why this matters for your app</h4>
                <p>
                  Creates a polished, cohesive experience across your entire app, so it feels
                  intentional and production-ready instead of pieced together.
                </p>
              </div>
              <div className="case-study__strip">
                <CaseStudyImage
                  src={`${IMG_UX}/case2_theme_settings.png`}
                  caption="Theme settings"
                  enlargedDescription="Theme settings with multiple color schemes"
                  variant="strip"
                />
                <CaseStudyImage
                  src={`${IMG_UX}/case2_counter_dark.png`}
                  caption="Counter · dark"
                  enlargedDescription="Stitch counter in dark mode"
                  variant="strip"
                />
                <CaseStudyImage
                  src={`${IMG_UX}/case2_counter_light.png`}
                  caption="Counter · light"
                  enlargedDescription="Stitch counter in light theme"
                  variant="strip"
                />
                <CaseStudyImage
                  src={`${IMG_UX}/case2_library_default.png`}
                  caption="Library · Forest"
                  enlargedDescription="Project library with default theme"
                  variant="strip"
                />
                <CaseStudyImage
                  src={`${IMG_UX}/case2_library_sea_cottage.png`}
                  caption="Library · Sea"
                  enlargedDescription="Project library with Sea Cottage theme"
                  variant="strip"
                />
              </div>
            </div>
          </section>

          <section className="case-study__section">
            <h3 className="case-study__section-title case-study__section-title--accent">
              Proof: Intuitive interactions that stay fast and predictable as your app grows
            </h3>
            <p className="case-study__section-lead">
              Handle complex actions like editing, deleting, and navigation without confusion, lag, or
              clunky workflows.
            </p>
            <div className="case-study__card">
              <p className="case-study__kicker">Case study 3 · UI / UX</p>
              <h4 className="case-study__block-title">UI interaction &amp; usability system</h4>
              <div className="case-study__block">
                <h4>What it does</h4>
                <p>
                  A set of interaction patterns and screen designs that handle complex user actions
                  while keeping the app fast, clear, and easy to use.
                </p>
              </div>
              <div className="case-study__block">
                <h4>Real interaction patterns used in the app</h4>
                <p>These patterns are used throughout the app and can be adapted to different features.</p>
                <ul>
                  <li>Swipe actions and multi-select for fast bulk delete operations</li>
                  <li>Bottom sheets for quick edits without leaving the current screen</li>
                  <li>Expandable UI that handles complex content without clutter</li>
                  <li>Structured detail screens for editing titles, notes, images, and progress</li>
                  <li>Clear visual feedback for user actions and state changes</li>
                  <li>
                    Modal dialogs for important decisions or confirmations to prevent accidental
                    actions and user errors
                  </li>
                </ul>
              </div>
              <div className="case-study__block">
                <h4>Why this matters for your app</h4>
                <p>
                  Prevents confusing or clunky interactions, so users can move through your app
                  quickly without friction as features and data grow.
                </p>
              </div>
              <div className="case-study__strip">
                <CaseStudyImage
                  src={`${IMG_UX}/case3_multi_delete.png`}
                  caption="Multi delete"
                  enlargedDescription="Library multi-select delete mode"
                  variant="strip"
                />
                <CaseStudyImage
                  src={`${IMG_UX}/case3_swipe_delete.png`}
                  caption="Swipe to delete"
                  enlargedDescription="Library row with swipe-to-delete action revealed"
                  variant="strip"
                />
                <CaseStudyImage
                  src={`${IMG_UX}/case3_confirm_delete.png`}
                  caption="Confirm delete"
                  enlargedDescription="Delete project confirmation dialog"
                  variant="strip"
                />
                <CaseStudyImage
                  src={`${IMG_UX}/case3_project_details.png`}
                  caption="Project details"
                  enlargedDescription="Project details screen with title, notes, photos, and progress"
                  variant="strip"
                />
                <CaseStudyImage
                  src={`${IMG_UX}/case3_settings_expandable.png`}
                  caption="Expanding cards"
                  enlargedDescription="Settings screen with expandable sections and actions"
                  variant="strip"
                />
              </div>
            </div>
          </section>
        </article>
      </div>
    </section>
  )
}
