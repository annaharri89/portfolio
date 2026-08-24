import CaseStudyImage from '../components/caseStudy/CaseStudyImage'

const IMG_DEV = '/work/android-feature-development'
const IMG_UX = '/work/android-ui-ux'

export default function StitchTrackerCaseStudies() {
  return (
    <section
      class="project-detail case-study"
      id="stitch-counter-case-studies"
      aria-label="Case studies from Stitch Counter (V2)"
    >
      <div class="site-container">
        <h2 class="case-study__page-section-title">Case studies</h2>

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
                  Export and restore full app data locally: zip metadata with
                  embedded image bytes, typed failures, and clear success or error
                  messaging in Settings. No cloud account required.
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

        <article class="case-study__doc" id="case-study-android-ui-ux">
          <div class="case-study__hero-band" style={{ 'border-radius': 'var(--radius-lg)', 'margin-bottom': 0 }}>
            <div class="case-study__hero-band-inner">
              <h3 class="case-study__doc-intro-title">
                Android UI/UX:{' '}
                <span class="case-study__headline-accent">
                  Built for real devices
                </span>
              </h3>
              <p class="case-study__section-lead" style={{ 'margin-top': 'var(--spacing-sm)' }}>
                Knitters and crocheters tap counters for a long time, rotate the
                phone, switch themes, and manage projects in bulk. This section
                covers UI that still works in those conditions.
              </p>
              <div class="case-study__hero-chips">
                <span class="case-study__chip">Adaptive Compose layouts</span>
                <span class="case-study__chip">Six themes · dark mode</span>
                <span class="case-study__chip">Swipe · multi-select · sheets</span>
              </div>
            </div>
          </div>

          <section class="case-study__section">
            <div class="case-study__two-col">
              <div class="case-study__card">
                <h3 class="case-study__block-title">What I build</h3>
                <div class="case-study__bullet-list">
                  <div class="case-study__bullet">
                    <span class="case-study__bullet-dot" aria-hidden />
                    <span>New features added into an existing Android app</span>
                  </div>
                  <div class="case-study__bullet">
                    <span class="case-study__bullet-dot" aria-hidden />
                    <span>Responsive Compose UI across phones and tablets</span>
                  </div>
                  <div class="case-study__bullet">
                    <span class="case-study__bullet-dot" aria-hidden />
                    <span>
                      Interaction patterns that keep common tasks fast (edit,
                      delete, navigate)
                    </span>
                  </div>
                  <div class="case-study__bullet">
                    <span class="case-study__bullet-dot" aria-hidden />
                    <span>
                      Maintainable feature architecture (MVVM / separation of
                      concerns)
                    </span>
                  </div>
                </div>
              </div>
              <div class="case-study__frame">
                <CaseStudyImage
                  src={`${IMG_UX}/library_screen.default_theme.jpg`}
                  caption="Project library"
                  enlargedDescription="Project library screen with default theme"
                  variant="default"
                />
              </div>
            </div>
          </section>

          <section class="case-study__section">
            <p class="case-study__kicker">Problem</p>
            <h3 class="case-study__section-title case-study__section-title--accent">
              The counter has to work in landscape with big numbers
            </h3>
            <p class="case-study__section-lead">
              The primary action is rapid, repeated input. Numbers get large.
              Devices rotate. Layouts that look fine in a portrait mock often
              overflow or shrink into unreadable type once someone is mid-project.
            </p>
            <div class="case-study__card">
              <div class="case-study__case-split">
                <div class="case-study__case-split-media">
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
                <div class="case-study__case-split-copy">
                  <p class="case-study__kicker">Approach · UI / interaction</p>
                  <h4 class="case-study__block-title">Smart counter system</h4>
                  <div class="case-study__block">
                    <h4>What it does</h4>
                    <p>
                      Real-time counter input with dynamic text scaling so large
                      counts stay readable in portrait and landscape on phones and
                      tablets.
                    </p>
                  </div>
                  <div class="case-study__block">
                    <h4>Why I built it this way</h4>
                    <ul>
                      <li>Input stays responsive during long counting sessions</li>
                      <li>
                        Layout adapts as counts grow so text does not overflow or
                        break the screen
                      </li>
                      <li>
                        Portrait and landscape share one adaptive approach instead
                        of two separate layouts
                      </li>
                    </ul>
                  </div>
                  <div class="case-study__block">
                    <h4>Outcome</h4>
                    <p>
                      The counter stays usable when numbers get large and when the
                      device rotates.
                    </p>
                  </div>
                  <div class="case-study__block">
                    <h4>Takeaway</h4>
                    <p>
                      I designed the primary control for large counts and landscape
                      first. Other screens were easier after that.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="case-study__section">
            <p class="case-study__kicker">Problem</p>
            <h3 class="case-study__section-title case-study__section-title--accent">
              Themes only work if dark mode and launcher icons match
            </h3>
            <p class="case-study__section-lead">
              Personalization is part of the product for this audience. Multiple
              color styles only work if every screen, dark mode, and launcher icon
              stay on the same system.
            </p>
            <div class="case-study__card">
              <p class="case-study__kicker">Approach · UI / UX</p>
              <h4 class="case-study__block-title">Dynamic theme system</h4>
              <div class="case-study__block">
                <h4>What it does</h4>
                <p>
                  Theming by overriding Material Design 3: six shipped visual
                  styles, dark mode for each, and custom launcher icons that match
                  the active theme. Theme preference is stored in DataStore so it
                  survives restarts.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Details</h4>
                <ul>
                  <li>
                    Centralized styling keeps screens consistent as features grow
                  </li>
                  <li>Dark mode is first-class for every theme, not a one-off</li>
                  <li>
                    Per-theme launcher icons so the choice shows on the home screen
                    too
                  </li>
                </ul>
              </div>
              <div class="case-study__block">
                <h4>Outcome</h4>
                <p>
                  Users can switch themes without layout breakage. The app reads
                  as one product instead of unrelated screens with mismatched
                  colors.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Takeaway</h4>
                <p>
                  Theme work needs tokens, dark variants, and icons together.
                  One-off palette swaps did not survive the next feature.
                </p>
              </div>
              <div class="case-study__strip">
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

          <section class="case-study__section">
            <p class="case-study__kicker">Problem</p>
            <h3 class="case-study__section-title case-study__section-title--accent">
              Library edits get slow when every flow uses different gestures
            </h3>
            <p class="case-study__section-lead">
              Managing a project library means multi-select, swipe, confirmations,
              quick edits, and dense detail. Without shared patterns, each flow
              invents its own gestures and users slow down.
            </p>
            <div class="case-study__card">
              <p class="case-study__kicker">Approach · UI / UX</p>
              <h4 class="case-study__block-title">
                Shared interaction patterns across the app
              </h4>
              <div class="case-study__block">
                <h4>What it does</h4>
                <p>
                  Shared patterns used across the app: swipe and multi-select for
                  bulk delete, bottom sheets for quick edits, expandable sections
                  for dense settings, structured detail screens for titles, notes,
                  images, and progress, plus modal confirmations for destructive
                  choices.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Why I built it this way</h4>
                <ul>
                  <li>
                    Common tasks stay on or near the current screen instead of
                    deep navigation chains
                  </li>
                  <li>
                    Confirmations protect against accidental deletes without
                    hiding the action
                  </li>
                  <li>
                    Selection and state feedback keeps bulk operations readable
                  </li>
                </ul>
              </div>
              <div class="case-study__block">
                <h4>Outcome</h4>
                <p>
                  Library management stays fast as the catalog grows. Users learn
                  the same gestures once and reuse them across screens.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Takeaway</h4>
                <p>
                  Swipe, multi-select, sheets, and confirmations were worth doing
                  once. A new pattern per feature would have been slower to build
                  and harder to use.
                </p>
              </div>
              <div class="case-study__strip">
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
