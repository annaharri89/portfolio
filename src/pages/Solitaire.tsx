import Hero from '../components/Hero'
import GithubIcon from '../components/icons/GithubIcon'

export default function Solitaire() {
  return (
    <>
      <Hero
        title="Solitaire & FreeCell (KMP)"
        subtitle="Shared Kotlin game rules with a KorGE client across Android, desktop, web, and iOS"
        variant="compact"
      />
      <section className="project-detail">
        <div className="container">
          <div className="project-detail-content">
            <div className="project-detail-section">
              <div className="project-header">
                <div className="project-header-row">
                  <span
                    className="project-detail-icon project-header-icon"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.75rem',
                      lineHeight: 1,
                    }}
                    role="img"
                    aria-label="Playing cards"
                  >
                    🃏
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h3 className="project-header-title">KMPCardGames</h3>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed text-base">
                  This repository is a Kotlin Multiplatform sample that keeps Solitaire and FreeCell
                  rules in one shared module and ships a playable KorGE client. The goal is to show how
                  a single domain implementation can stay consistent while different platforms only
                  handle input, rendering, and packaging.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 mb-8">
                <div>
                  <h4>What lives in shared code</h4>
                  <ul className="list-disc list-inside space-y-2 text-neutral-700">
                    <li>Models for cards, piles, overall game state, and which variant rules apply</li>
                    <li>Player actions, validation, and accepted or rejected move results</li>
                    <li>Solitaire and FreeCell rule sets plus shared rule plumbing</li>
                    <li>Session management, deterministic state updates, undo and redo, and game factories</li>
                    <li>Read models so UIs can render without reaching into rule internals</li>
                  </ul>
                </div>
                <div>
                  <h4>Why Kotlin Multiplatform fits this project</h4>
                  <ul className="list-disc list-inside space-y-2 text-neutral-700">
                    <li>One implementation of the rules for web, desktop JVM, Android, and iOS targets</li>
                    <li>Tests in common source exercise the same paths every client links against</li>
                    <li>A clear boundary: KorGE stays in the client module; the domain stays plain Kotlin</li>
                  </ul>
                </div>
              </div>
              <div className="project-tags">
                <span className="year-chip">2026</span>
                <span className="tech-tag">Kotlin Multiplatform</span>
                <span className="tech-tag">Kotlin</span>
                <span className="tech-tag">KorGE</span>
                <span className="tech-tag">Gradle</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/annaharri89/KMPCardGames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <GithubIcon />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
