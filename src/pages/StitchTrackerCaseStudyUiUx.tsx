import CaseStudyImage from '../components/caseStudy/CaseStudyImage'
import Hero from '../components/Hero'
import { CaseStudyLightboxProvider } from '../components/caseStudy/CaseStudyLightbox'
import StitchTrackerCaseStudyFooter from './StitchTrackerCaseStudyFooter'

const IMG_UX = '/work/android-ui-ux'

function UiUxContent() {
  return (
    <>
      <Hero
        title="Android UI/UX"
        subtitle="Stitch Counter (V2): built for real devices."
        variant="compact"
      />
      <section
        class="project-detail case-study"
        id="stitch-counter-case-studies"
        aria-label="Case study: Android UI/UX for Stitch Counter (V2)"
      >
        <div class="site-container">
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
          <StitchTrackerCaseStudyFooter currentStudyId="stitch-ui-ux" />
        </div>
      </section>
    </>
  )
}

export default function StitchTrackerCaseStudyUiUx() {
  return (
    <CaseStudyLightboxProvider>
      <UiUxContent />
    </CaseStudyLightboxProvider>
  )
}
