import Hero from '../components/Hero'
import GithubActionsWorkflowBadge from '../components/GithubActionsWorkflowBadge'
import KorgeSolitaireEmbed from '../components/KorgeSolitaireEmbed'
import ProjectDetailMetricGrid from '../components/ProjectDetailMetricGrid'
import ProjectDetailStatTile from '../components/ProjectDetailStatTile'
import GithubIcon from '../components/icons/GithubIcon'

function korgeSolitairePublicBase(): string {
  const base = import.meta.env.BASE_URL || '/'
  if (base === '/') {
    return '/korge-solitaire/'
  }
  return `${base.replace(/\/$/, '')}/korge-solitaire/`
}

export default function Solitaire() {
  const korgeWebIconUrl = `${korgeSolitairePublicBase()}app-icon.png`

  return (
    <>
      <Hero
        title="Solitaire & FreeCell (KMP)"
        subtitle="One Kotlin codebase ships the same game to Android, iOS, web, and desktop JVM—shared rules and tests in one module, with a lightweight KorGE client on top."
        leadingIconSrc={korgeWebIconUrl}
        leadingIconAlt="KMPCardGames project icon"
        variant="compact"
      />
      <section class="project-detail">
        <div class="site-container">
          <div class="project-detail-section">
            <div class="project-header">
              <p class="text-neutral-700 leading-relaxed text-base">
                This repository is a Kotlin Multiplatform example: Solitaire and FreeCell rules live
                in a shared module with common tests, and a small real-time KorGE shell runs the shared
                rules in a real client on each platform: Android, desktop JVM, web, and iOS. The focus is
                consistent domain code, per-platform input and rendering, and multi-target
                Gradle packaging, not game-industry scope.
              </p>
              <ProjectDetailMetricGrid columns="2">
                <ProjectDetailStatTile
                  label="Kotlin in the shared layer"
                  value="~98% of app code; ~105 lines platform-only"
                />
                <ProjectDetailStatTile
                  label="Automated tests on shared rules"
                  value="11 test files · 32 @Test cases"
                />
              </ProjectDetailMetricGrid>
              <p class="text-sm text-neutral-600 mt-2">
                Figures measured 2026-04-15. Tests live in the shared module’s{' '}
                <code class="text-sm bg-neutral-100 px-1 py-0.5 rounded">commonTest</code> source set
                (Gradle/KMP)—same tests back JVM, Android, and other linked targets. Breakdown and counting
                notes are in the{' '}
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
              <h4 class="mt-3">CI status</h4>
              <div class="flex flex-wrap gap-3 mt-3 mb-2">
                <GithubActionsWorkflowBadge
                  owner="annaharri89"
                  repo="KMPCardGames"
                  workflowFile="ci.yml"
                  ariaLabel="View KMPCardGames CI workflow status"
                  alt="CI status badge"
                />
              </div>
            </div>
            <KorgeSolitaireEmbed />
            <div class="grid grid-cols-1 gap-8 mt-6 mb-8">
              <div>
                <h4>What lives in shared code</h4>
                <ul class="list-disc list-inside space-y-2 text-neutral-700">
                  <li>Models for cards, piles, overall game state, and which variant rules apply</li>
                  <li>Player actions, validation, and accepted or rejected move results</li>
                  <li>Solitaire and FreeCell rule sets plus shared rule plumbing</li>
                  <li>Session management, deterministic state updates, undo and redo, and game factories</li>
                  <li>Read models so UIs can render without reaching into rule internals</li>
                </ul>
              </div>
              <div>
                <h4>Why Kotlin Multiplatform fits this project</h4>
                <ul class="list-disc list-inside space-y-2 text-neutral-700">
                  <li>
                    One implementation of the rules, shipped to web, desktop JVM, Android, and iOS from
                    the same project
                  </li>
                  <li>Tests in common source exercise the same paths every client links against</li>
                  <li>A clear boundary: KorGE stays in the client module; the domain stays plain Kotlin</li>
                  <li>
                    A small real-time client doubles as a stress test for shared state and multi-target
                    builds
                  </li>
                </ul>
              </div>
            </div>
            <div class="project-tags">
              <span class="year-chip">2026</span>
              <span class="tech-tag">Kotlin Multiplatform</span>
              <span class="tech-tag">Kotlin</span>
              <span class="tech-tag">KorGE</span>
              <span class="tech-tag">Gradle</span>
            </div>
            <div class="project-links">
              <a
                href="https://github.com/annaharri89/KMPCardGames"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                <GithubIcon />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
