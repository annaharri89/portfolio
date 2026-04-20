import Hero from '@components/Hero'
import ImageCarousel from '@components/Carousel'
import GithubIcon from '@components/icons/GithubIcon'
import { getProjectSlides, Project } from '@consts/projects';
import stitchCounterIcon from '@images/icons/application_icon_stitch_counter.png';

export default function StitchCounter() {
  return (
    <>
      <Hero
        title="Stitch Counter"
        subtitle="An Android app for tracking knitting and crochet projects with customizable themes"
        leadingIconSrc={stitchCounterIcon}
        leadingIconAlt="Stitch Counter Icon"
        variant="compact"
      />
      <section class="project-detail">
        <div class="site-container">
          <div class="project-detail-section">
              <div class="project-header">
                <p class="text-neutral-700 leading-relaxed text-base">
                  Stitch Counter is an Android app that allows users to keep track of their knitting or crochet projects in two ways: through a single counter for tracking stitches or rows, or through a double counter with separate counters for stitches and rows.
                </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4>Features</h4>
                  <ul class="list-disc list-inside space-y-2 text-neutral-700">
                    <li>Single counter mode for tracking stitches or rows</li>
                    <li>Double counter mode with separate stitch and row counters</li>
                    <li>Library system to save counters and return to them later</li>
                    <li>6 different customizable color themes</li>
                    <li>Optimized for portrait and landscape modes</li>
                    <li>Responsive design for all device sizes</li>
                  </ul>
                </div>
                <div>
                  <ImageCarousel slides={getProjectSlides(Project.STITCH_COUNTER)} />
                </div>
              </div>
              <div class="project-tags">
                <span class="year-chip">2017</span>
                <span class="tech-tag">Native Android</span>
                <span class="tech-tag">Java</span>
                <span class="tech-tag">XML</span>
                <span class="tech-tag">SQLite</span>
                <span class="tech-tag">ContentProvider</span>
              </div>
              <div class="project-links">
                <a
                  href="https://github.com/annaharri89/stitchCounter"
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
