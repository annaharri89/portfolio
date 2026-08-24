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
                  Layers that survive real growth
                </span>
              </h3>
              <p class="case-study__section-lead" style={{ 'margin-top': 'var(--spacing-sm)' }}>
                Stitch Counter V2 is a local-first craft app on Google Play. These
                notes cover how architecture, Room data, zip backup, and UI state
                were shaped so features stay shippable without fragile glue.
              </p>
              <div class="case-study__hero-chips">
                <span class="case-study__chip">Kotlin · Compose · Room</span>
                <span class="case-study__chip">Local-first · no cloud</span>
                <span class="case-study__chip">Backup that moves phone-to-phone</span>
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
                      failures on paths like backup and restore, not only the happy
                      path.
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
              Feature work gets expensive when every screen owns its own rules
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
                <h4>What I built</h4>
                <p>
                  Compose and ViewModels on top; small use-case classes for
                  validation and orchestration; Room underneath with Flow-backed
                  queries so lists refresh when the database changes. This is
                  MVVM-style: Compose + ViewModels over use cases and Room. Hilt
                  wires the DB, repository, and use cases once so feature code only
                  pulls what it needs.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Why this shape</h4>
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
                <h4>Results</h4>
                <p>
                  Most changes stay in one layer. Reviews stay smaller, and new
                  features do not require re-threading the whole codebase.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Lesson</h4>
                <p>
                  For production Android apps, the payoff is not “more architecture.”
                  It is knowing where a bug or schema change lives before you open
                  the IDE.
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
              Crafters need projects that survive app restarts and new features
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
                <h4>What I built</h4>
                <p>
                  A structured system for creating, editing, and organizing
                  projects with persistent local storage through Room. Preferences
                  and active theme state live in DataStore so UI settings stay
                  separate from project rows.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Why this shape</h4>
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
                <h4>Results</h4>
                <p>
                  Users keep long-running projects locally. New features can read
                  and write through the same foundation instead of inventing a
                  second store.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Lesson</h4>
                <p>
                  Local-first products win trust when the schema is boring and
                  durable. Fancy sync can wait; lost stitches cannot.
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
              Phone upgrades should not strand years of project history
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
                <h4>What I built</h4>
                <p>
                  Local export and restore of full app data: zip metadata paired
                  with embedded image bytes, plus typed failures and clear success
                  or error messaging in Settings. No cloud account in the path.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Why this shape</h4>
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
                    Edge cases handled so behavior stays predictable when files are
                    missing or malformed
                  </li>
                </ul>
              </div>
              <div class="case-study__block">
                <h4>Results</h4>
                <p>
                  Crafters can move projects phone-to-phone while the app stays
                  offline-first. Support paths stay simpler: the backup file is the
                  portable record.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Lesson</h4>
                <p>
                  For local-first apps, backup is a product feature, not a power-user
                  afterthought. Typed failure modes matter as much as the happy
                  export.
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
              Large libraries and multi-tab navigation fall apart without shared state
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
                <h4>What I built</h4>
                <p>
                  LazyColumn-based lists with controlled scrolling for large
                  libraries, debounced autosave where rapid edits would otherwise
                  thrash storage, and a root navigation shell that derives the
                  selected tab from the NavController back stack for the bottom bar
                  and rail.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Why this shape</h4>
                <ul>
                  <li>
                    Efficient list rendering so large libraries stay usable as
                    projects accumulate
                  </li>
                  <li>
                    UI selection stays in sync with navigation instead of a
                    separate source of truth
                  </li>
                  <li>
                    Autosave timing reduces unnecessary writes during fast editing
                    sessions
                  </li>
                </ul>
              </div>
              <div class="case-study__block">
                <h4>Results</h4>
                <p>
                  Library browsing and tab switches stay predictable as the catalog
                  grows. State comes from the database and navigation graph, not
                  duplicated screen flags.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Lesson</h4>
                <p>
                  “Smooth UI” is easier to keep when lists observe Flow and chrome
                  observes the back stack. Shared sources beat syncing by hand.
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
                  Built for long sessions on real devices
                </span>
              </h3>
              <p class="case-study__section-lead" style={{ 'margin-top': 'var(--spacing-sm)' }}>
                Knitters and crocheters tap counters for a long time, rotate the
                phone, switch themes, and manage projects in bulk. The UI work
                below is about holding up under that use, not demo-day screenshots.
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
              A counter that breaks in landscape is unusable mid-project
            </h3>
            <p class="case-study__section-lead">
              The primary action is rapid, repeated input. Numbers get large.
              Devices rotate. Layouts that look fine in a portrait mock often
              overflow or shrink into unreadable type when the session is real.
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
                    <h4>What I built</h4>
                    <p>
                      A real-time counter interaction system with dynamic text
                      scaling so large counts stay readable in portrait and
                      landscape on phones and tablets.
                    </p>
                  </div>
                  <div class="case-study__block">
                    <h4>Why this shape</h4>
                    <ul>
                      <li>Input stays responsive during long counting sessions</li>
                      <li>
                        Layout adapts as content changes so counts do not overflow
                        or break the screen
                      </li>
                      <li>
                        Portrait and landscape share one adaptive approach instead
                        of two frozen designs
                      </li>
                    </ul>
                  </div>
                  <div class="case-study__block">
                    <h4>Results</h4>
                    <p>
                      The counter remains usable when numbers grow and when the
                      device rotates, which is when craft sessions actually happen.
                    </p>
                  </div>
                  <div class="case-study__block">
                    <h4>Lesson</h4>
                    <p>
                      Design the primary control for the worst realistic content
                      size and orientation first. Everything else is easier after
                      that.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="case-study__section">
            <p class="case-study__kicker">Problem</p>
            <h3 class="case-study__section-title case-study__section-title--accent">
              Themes feel cheap when dark mode and icons disagree with the rest of the app
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
                <h4>What I built</h4>
                <p>
                  A theming system built by overriding Material Design 3: six
                  shipped visual styles, dark mode for each, and custom launcher
                  icons that match the active theme. Theme preference is stored in
                  DataStore so it survives restarts.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Why this shape</h4>
                <ul>
                  <li>
                    Centralized styling keeps screens consistent as features grow
                  </li>
                  <li>Dark mode is first-class for every theme, not a one-off</li>
                  <li>
                    Per-theme icons make the choice feel complete on the home
                    screen, not only inside the app
                  </li>
                </ul>
              </div>
              <div class="case-study__block">
                <h4>Results</h4>
                <p>
                  Users can switch themes without layout breakage, and the app
                  reads as one designed product instead of a pile of screens with
                  mismatched colors.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Lesson</h4>
                <p>
                  Theme work pays off when it is a system: tokens, dark variants,
                  and icons together. Isolated palette swaps rarely survive the
                  next feature.
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
              Bulk edits and deletes get clumsy when every action needs a new screen
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
                <h4>What I built</h4>
                <p>
                  A set of interaction patterns used throughout the app and adapted
                  per feature: swipe and multi-select for bulk delete, bottom sheets
                  for quick edits without leaving the screen, expandable sections for
                  dense settings, structured detail screens for titles, notes,
                  images, and progress, plus modal confirmations for destructive
                  choices.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Why this shape</h4>
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
                    Visual feedback for selection and state changes keeps bulk
                    operations understandable
                  </li>
                </ul>
              </div>
              <div class="case-study__block">
                <h4>Results</h4>
                <p>
                  Library management stays fast as the catalog grows. Users learn
                  one gesture vocabulary and reuse it across screens.
                </p>
              </div>
              <div class="case-study__block">
                <h4>Lesson</h4>
                <p>
                  Interaction systems compound. Investing once in swipe,
                  multi-select, sheets, and confirmations is cheaper than teaching
                  a new pattern per feature.
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
