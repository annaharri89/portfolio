import Hero from '../components/Hero'
import KorgeSolitaireEmbed from '../components/KorgeSolitaireEmbed'
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
        subtitle="Shared Kotlin rules and tests in one module; a lightweight KorGE client runs them on Android, desktop, web, and iOS."
        leadingIconSrc={korgeWebIconUrl}
        leadingIconAlt="KMPCardGames project icon"
        variant="compact"
      />
      <section class="project-detail">
        <div class="site-container">
          <div class="project-detail-section">
              <div class="project-header">
                <p class="text-neutral-700 leading-relaxed text-base">
                  This repository is a Kotlin Multiplatform exercise: Solitaire and FreeCell rules live
                  in a shared module with common tests, and a small real-time KorGE client stresses that
                  stack across Android, desktop JVM, web, and iOS. KorGE is the playable demo shell—the
                  focus is consistent domain code, per-platform input and rendering, and multi-target
                  Gradle packaging, not game-industry scope.
                </p>
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
                    <li>One implementation of the rules for web, desktop JVM, Android, and iOS targets</li>
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
                <a
                  href="https://github.com/annaharri89/KMPCardGames/actions/workflows/ci.yml"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link"
                  aria-label="View KMPCardGames CI workflow status"
                >
                  <img
                    src="https://github.com/annaharri89/KMPCardGames/actions/workflows/ci.yml/badge.svg"
                    alt="CI status badge"
                  />
                </a>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}
