import { A } from '@solidjs/router'
import CaseStudyImage from '../components/caseStudy/CaseStudyImage'
import Hero from '../components/Hero'
import { CaseStudyLightboxProvider } from '../components/caseStudy/CaseStudyLightbox'
import { ROUTES } from '../constants/routes'
import StitchTrackerCaseStudyFooter from './StitchTrackerCaseStudyFooter'

const IMG_DEV = '/work/android-feature-development'

function FeatureDevelopmentContent() {
  return (
    <>
      <Hero
        title="Feature development"
        subtitle="Stitch Counter (V2): architecture, data, and reliability."
        variant="compact"
      />
      <section
        class="project-detail case-study"
        id="stitch-counter-case-studies"
        aria-label="Case study: feature development for Stitch Counter (V2)"
      >
        <div class="site-container">
        <article class="case-study__doc" id="case-study-feature-development">
          <div class="case-study__hero-band" style={{ 'border-radius': 'var(--radius-lg)', 'margin-bottom': 0 }}>
            <div class="case-study__hero-band-inner">
              <h3 class="case-study__doc-intro-title">
                Feature development:{' '}
                <span class="case-study__headline-accent">
                  Architecture, data, and reliability
                </span>
              </h3>
              <p class="case-study__section-lead" style={{ 'margin-top': 'var(--spacing-sm)' }}>
                Stitch Counter V2 is a local-first craft app on Google Play. These
                notes cover how I set up architecture, Room, zip backup, and UI
                state so new features do not turn into one-off fixes.
              </p>
              <div class="case-study__hero-chips">
                <span class="case-study__chip">Kotlin · Compose · Room</span>
                <span class="case-study__chip">Local-first, no cloud account</span>
                <span class="case-study__chip">Zip backup and restore</span>
              </div>
            </div>
          </div>

          <section class="case-study__section">
            <div class="case-study__two-col">
              <div class="case-study__card">
                <h3 class="case-study__block-title">How I structure feature work</h3>
                <div class="case-study__bullet-list">
                  <div class="case-study__bullet">
                    <span class="case-study__bullet-dot" aria-hidden />
                    <span>
                      <strong>Separation of concerns: </strong>UI, domain rules, and
                      persistence stay in different layers.
                    </span>
                  </div>
                  <div class="case-study__bullet">
                    <span class="case-study__bullet-dot" aria-hidden />
                    <span>
                      <strong>Data as a stable foundation: </strong>Room models and
                      Flow queries so lists refresh from real storage.
                    </span>
                  </div>
                  <div class="case-study__bullet">
                    <span class="case-study__bullet-dot" aria-hidden />
                    <span>
                      <strong>Reliability by design: </strong>Validation and typed
                      failures on backup and restore, not just the happy path.
                    </span>
                  </div>
                  <div class="case-study__bullet">
                    <span class="case-study__bullet-dot" aria-hidden />
                    <span>
                      <strong>UI that follows real state: </strong>Navigation and
                      lists stay tied to the back stack and database, not one-off
                      flags.
                    </span>
                  </div>
                </div>
              </div>
              <div class="case-study__frame">
                <CaseStudyImage
                  src={`${IMG_DEV}/case2_data_room_dao.png`}
                  caption="Room DAO"
                  enlargedDescription="Kotlin Room DAO with Flow queries and suspend writes"
                  variant="default"
                />
              </div>
            </div>
          </section>

          <section class="case-study__section">
            <p class="case-study__kicker">Problem</p>
            <h3 class="case-study__section-title case-study__section-title--accent">
              Business rules were ending up in every screen
            </h3>
            <p class="case-study__section-lead">
              A craft counter looks simple until you add a project library, photos,
              deletes that must clean up files, and phone plus tablet navigation.
              Without clear layers, schema tweaks and new screens start rewriting
              the same logic in three places.
            </p>
            <div class="case-study__card">
              <p class="case-study__kicker">Approach · App architecture</p>
              <h4 class="case-study__block-title">
                Thin screens over use cases and Room
              </h4>
              <div class="case-study__block">
                <h4>What it does</h4>
                <p>
                  Compose and ViewModels on top; small use-case classes for
                  validation and orchestration; Room underneath with Flow-backed
                  queries so lists refresh when the database changes. Hilt wires
                  the DB, repository, and use cases once so feature code only pulls
                  what it needs.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Why I built it this way</h4>
                <ul>
                  <li>
                    Domain models and mappers sit between Room entities and the UI,
                    so schema tweaks do not ripple through every screen
                  </li>
                  <li>
                    Deletes run through use cases that remove image files and rows
                    together so files and rows stay in sync
                  </li>
                  <li>
                    Compose Destinations plus one root scaffold keeps tabs, rail,
                    and sheets aligned on phones and tablets
                  </li>
                </ul>
              </div>
              <div class="case-study__block">
                <h4>Outcome</h4>
                <p>
                  Most changes stay in one layer. Reviews stay smaller, and new
                  features do not require re-threading the whole codebase.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Takeaway</h4>
                <p>
                  The win is not “more architecture.” It is knowing where a bug or
                  schema change lives before you open the IDE.
                </p>
              </div>
              <div class="case-study__row--2">
                <CaseStudyImage
                  src={`${IMG_DEV}/case2_data_room_dao.png`}
                  caption="Room → Flow → UI"
                  enlargedDescription="Kotlin Room DAO with Flow queries and suspend writes"
                  variant="pair"
                />
                <CaseStudyImage
                  src={`${IMG_DEV}/case3_navigation_sync.png`}
                  caption="Root navigation shell"
                  enlargedDescription="RootNavigationScreen deriving selected tab from NavController back stack for bottom bar and rail"
                  variant="pair"
                />
              </div>
            </div>
          </section>

          <section class="case-study__section">
            <p class="case-study__kicker">Problem</p>
            <h3 class="case-study__section-title case-study__section-title--accent">
              Project data has to survive restarts and new features
            </h3>
            <p class="case-study__section-lead">
              Stitch counts and project notes only matter if they are still there
              next week. The data model had to support a growing library of
              projects, counters, and related fields without turning every screen
              into a special case.
            </p>
            <div class="case-study__card">
              <p class="case-study__kicker">Approach · Data architecture</p>
              <h4 class="case-study__block-title">
                Room-backed project library with clear relationships
              </h4>
              <div class="case-study__block">
                <h4>What it does</h4>
                <p>
                  Create, edit, and organize projects with persistent local storage
                  through Room. Preferences and active theme state live in DataStore
                  so UI settings stay separate from project rows.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Why I built it this way</h4>
                <ul>
                  <li>Data persists across sessions; no cloud account required</li>
                  <li>
                    Relationships between projects, counters, and related fields
                    stay explicit in the schema
                  </li>
                  <li>
                    UI and persistence stay separated so list and detail screens
                    can evolve without rewriting storage
                  </li>
                </ul>
              </div>
              <div class="case-study__block">
                <h4>Outcome</h4>
                <p>
                  Users keep long-running projects locally. New features read and
                  write through the same foundation instead of adding a second store.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Takeaway</h4>
                <p>
                  For a local-first app, a boring durable schema matters more than
                  fancy sync on day one.
                </p>
              </div>
              <div class="case-study__strip">
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

          <section class="case-study__section">
            <p class="case-study__kicker">Problem</p>
            <h3 class="case-study__section-title case-study__section-title--accent">
              Users need to move their library to a new phone
            </h3>
            <p class="case-study__section-lead">
              Privacy-first meant no cloud sync. Users still needed a way to move
              a full library (metadata plus images) to a new device without
              corruption or a silent half-restore.
            </p>
            <div class="case-study__card">
              <p class="case-study__kicker">Approach · Data safety</p>
              <h4 class="case-study__block-title">
                Zip backup and restore with validation
              </h4>
              <div class="case-study__block">
                <h4>What it does</h4>
                <p>
                  Export and restore full app data locally: a zip with a JSON file
                  for metadata plus each project photo as its own image file, typed
                  failures, and clear success or error messaging in Settings. No
                  cloud account required.{' '}
                  <A href={ROUTES.STITCH_COUNTER_V2_CASE_STUDY_BACKUP_RESTORE} class="text-accent-link">
                    Read the full backup and restore case study
                  </A>
                  .
                </p>
              </div>
              <div class="case-study__block">
                <h4>Details</h4>
                <ul>
                  <li>
                    Validation before restore so invalid payloads fail safely
                    instead of crashing mid-import
                  </li>
                  <li>
                    Clear feedback for success and failure so users know whether
                    the library landed
                  </li>
                  <li>
                    Missing or malformed files handled so behavior stays predictable
                  </li>
                </ul>
              </div>
              <div class="case-study__block">
                <h4>Outcome</h4>
                <p>
                  Users can export a zip and restore on another device. The app
                  stays offline-first, and support has one file to ask about when
                  something goes wrong.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Takeaway</h4>
                <p>
                  Backup is a product feature for a local-first app. Invalid
                  restores need the same attention as the happy-path export.
                </p>
              </div>
              <div class="case-study__row--2">
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

          <section class="case-study__section">
            <p class="case-study__kicker">Problem</p>
            <h3 class="case-study__section-title case-study__section-title--accent">
              Big libraries and tabs need one source of truth for state
            </h3>
            <p class="case-study__section-lead">
              As the project list grows, scrolling and tab selection have to stay
              tied to real data and the navigation back stack. One-off UI flags
              drift; Flow queries and a root scaffold do not.
            </p>
            <div class="case-study__card">
              <p class="case-study__kicker">Approach · Performance &amp; state</p>
              <h4 class="case-study__block-title">
                Lazy lists, controlled scrolling, navigation-derived selection
              </h4>
              <div class="case-study__block">
                <h4>What it does</h4>
                <p>
                  LazyColumn-based lists with controlled scrolling for large
                  libraries, debounced autosave where rapid edits would otherwise
                  thrash storage, and a root navigation shell that derives the
                  selected tab from the NavController back stack for the bottom bar
                  and rail.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Why I built it this way</h4>
                <ul>
                  <li>
                    Lazy lists keep large libraries usable as projects accumulate
                  </li>
                  <li>
                    Tab selection follows navigation instead of a separate flag
                  </li>
                  <li>
                    Debounced autosave cuts down writes during fast editing
                  </li>
                </ul>
              </div>
              <div class="case-study__block">
                <h4>Outcome</h4>
                <p>
                  Library browsing and tab switches stay predictable as the catalog
                  grows. State comes from the database and navigation graph, not
                  duplicated screen flags.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Takeaway</h4>
                <p>
                  Lists observe Flow; chrome observes the back stack. That was
                  less work than keeping screen flags in sync by hand.
                </p>
              </div>
              <div class="case-study__row--2">
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
          <StitchTrackerCaseStudyFooter currentStudyId="stitch-feature-development" />
        </div>
      </section>
    </>
  )
}

export default function StitchTrackerCaseStudyFeatureDevelopment() {
  return (
    <CaseStudyLightboxProvider>
      <FeatureDevelopmentContent />
    </CaseStudyLightboxProvider>
  )
}
