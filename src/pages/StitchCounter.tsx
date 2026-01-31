import Hero from '../components/Hero'
import ImageCarousel from '../components/ImageCarousel'
import GithubIcon from '../components/icons/GithubIcon'
import { STITCH_COUNTER_SLIDES } from '../constants/projects'

export default function StitchCounter() {
  return (
    <>
      <Hero
        title="Stitch Counter"
        subtitle="An Android app for tracking knitting and crochet projects with customizable themes"
      />
      <section className="project-detail">
        <div className="container">
          <div className="project-detail-content">
            <div className="project-detail-section">
              <div className="project-header">
                <div className="project-header-row">
                  <img
                    src="/images/application_icon_stitch_counter.png"
                    alt="Stitch Counter Icon"
                    className="project-detail-icon project-header-icon"
                  />
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h3 className="project-header-title">Stitch Counter</h3>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed text-base">
                  Stitch Counter is an Android app that allows users to keep track of their knitting or crochet projects in two ways: through a single counter for tracking stitches or rows, or through a double counter with separate counters for stitches and rows.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4>Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-neutral-700">
                    <li>Single counter mode for tracking stitches or rows</li>
                    <li>Double counter mode with separate stitch and row counters</li>
                    <li>Library system to save counters and return to them later</li>
                    <li>6 different customizable color themes</li>
                    <li>Optimized for portrait and landscape modes</li>
                    <li>Responsive design for all device sizes</li>
                  </ul>
                </div>
                <div>
                  <ImageCarousel slides={STITCH_COUNTER_SLIDES} />
                </div>
              </div>
              <div className="project-tags">
                <span className="year-chip">2017</span>
                <span className="tech-tag">Native Android</span>
                <span className="tech-tag">Java</span>
                <span className="tech-tag">XML</span>
                <span className="tech-tag">SQLite</span>
                <span className="tech-tag">ContentProvider</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/annaharri89/stitchCounter"
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
