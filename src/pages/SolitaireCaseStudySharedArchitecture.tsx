import { Show } from 'solid-js'
import { A } from '@solidjs/router'
import Hero from '../components/Hero'
import ProjectDetailMetricGrid from '../components/ProjectDetailMetricGrid'
import ProjectDetailStatTile from '../components/ProjectDetailStatTile'
import { ROUTES } from '../constants/routes'
import { isUpworkMode, UPWORK_PROFILE_URL } from '../constants/upwork'

type Bullet = { lead: string; text: string }

function BulletList(props: { items: Bullet[] }) {
  return (
    <div class="case-study__bullet-list">
      {props.items.map((item) => (
        <div class="case-study__bullet">
          <span class="case-study__bullet-dot" aria-hidden />
          <span>
            <strong>{item.lead} </strong>
            {item.text}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function SolitaireCaseStudySharedArchitecture() {
  return (
    <>
      <Hero
        title="Shared KMP architecture"
        subtitle="Solitaire & FreeCell: one rules engine, four platforms."
        variant="compact"
      />
      <section
        class="project-detail case-study"
        id="solitaire-case-study"
        aria-label="Case study: shared Kotlin Multiplatform architecture for Solitaire and FreeCell"
      >
        <div class="site-container">
          <article class="case-study__doc">
            <div
              class="case-study__hero-band"
              style={{ 'border-radius': 'var(--radius-lg)', 'margin-bottom': 0 }}
            >
              <div class="case-study__hero-band-inner">
                <h3 class="case-study__doc-intro-title">
                  Shared rules, thin clients:{' '}
                  <span class="case-study__headline-accent">One codebase, four targets</span>
                </h3>
                <p class="case-study__section-lead" style={{ 'margin-top': 'var(--spacing-sm)' }}>
                  I built this Kotlin Multiplatform card-game stack for Batteries Included, LLC. Solitaire
                  and FreeCell rules live in one shared module with common tests, and a small real-time
                  KorGE client runs them on Android, iOS, web, and desktop JVM. These notes cover where I
                  drew the boundaries and why.
                </p>
                <div class="case-study__hero-chips">
                  <span class="case-study__chip">Kotlin Multiplatform</span>
                  <span class="case-study__chip">KorGE client</span>
                  <span class="case-study__chip">Shared tests</span>
                </div>
              </div>
            </div>

            <section class="case-study__section">
              <h3 class="case-study__block-title">The shape of the codebase</h3>
              <ProjectDetailMetricGrid columns="2">
                <ProjectDetailStatTile
                  label="Kotlin in the shared layer"
                  value="~96% of app code; ~600 lines platform-only"
                />
                <ProjectDetailStatTile
                  label="Automated tests on shared rules"
                  value="33 test files · 174 @Test cases"
                />
              </ProjectDetailMetricGrid>
              <p class="text-sm text-neutral-600 mt-2">
                Figures measured 2026-08-22. Tests live in the shared module’s{' '}
                <code class="text-sm bg-neutral-100 px-1 py-0.5 rounded">commonTest</code> source set, so
                the same tests back JVM, Android, and the other linked targets. Counting notes are in the{' '}
                <a
                  href="https://github.com/annaharri89/KMPCardGames/blob/main/README.md#repo-metrics-current-snapshot"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-accent-link"
                >
                  repo README
                </a>
                .
              </p>
            </section>

            <section class="case-study__section">
              <div class="case-study__two-col">
                <div class="case-study__card">
                  <h3 class="case-study__block-title">What lives in shared code</h3>
                  <BulletList
                    items={[
                      {
                        lead: 'Models:',
                        text: 'cards, piles, overall game state, and which variant rules apply.',
                      },
                      {
                        lead: 'Actions and validation:',
                        text: 'player actions, with accepted or rejected move results.',
                      },
                      {
                        lead: 'Rule sets:',
                        text: 'Solitaire and FreeCell, plus the shared rule plumbing between them.',
                      },
                      {
                        lead: 'Sessions:',
                        text: 'deterministic state updates, undo and redo, and game factories.',
                      },
                      {
                        lead: 'Read models:',
                        text: 'so UIs can render without reaching into rule internals.',
                      },
                    ]}
                  />
                </div>
                <div class="case-study__card">
                  <h3 class="case-study__block-title">What stays in the client</h3>
                  <BulletList
                    items={[
                      {
                        lead: 'KorGE stays in the client module:',
                        text: 'the domain is plain Kotlin and never imports the rendering layer.',
                      },
                      {
                        lead: 'Per-platform input and rendering:',
                        text: 'each target handles its own input and drawing on top of the same read models.',
                      },
                      {
                        lead: 'Multi-target packaging:',
                        text: 'Gradle builds Android, desktop JVM, web, and iOS from one project.',
                      },
                    ]}
                  />
                </div>
              </div>
            </section>

            <section class="case-study__section">
              <div class="case-study__card">
                <h3 class="case-study__block-title">Why this split works</h3>
                <BulletList
                  items={[
                    {
                      lead: 'One implementation of the rules.',
                      text: 'A fix or a new variant lands once and ships to every platform.',
                    },
                    {
                      lead: 'Tests exercise what clients actually run.',
                      text: 'Common tests cover the same code paths every client links against.',
                    },
                    {
                      lead: 'A clear boundary.',
                      text: 'Rule code can be tested without a renderer, and the client stays small.',
                    },
                    {
                      lead: 'The client doubles as a stress test.',
                      text: 'A small real-time client puts shared state and multi-target builds under real use.',
                    },
                  ]}
                />
              </div>
            </section>

            <div class="project-links mt-8">
              <A href={ROUTES.SOLITAIRE} class="project-link">
                Back to Solitaire & FreeCell (KMP)
              </A>
              <Show
                when={isUpworkMode}
                fallback={
                  <A href={ROUTES.CONTACT} class="project-link">
                    Source available on request
                  </A>
                }
              >
                <a
                  href={UPWORK_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link"
                >
                  Source available on request
                </a>
              </Show>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
