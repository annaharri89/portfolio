import { A } from '@solidjs/router'
import { HOME_SHOWCASE_PROJECTS } from '../../../constants/homeShowcase'
import { ROUTES } from '../../../constants/routes'
import type { HomeShowcaseProject } from '../../../constants/homeShowcase'
import {
  ShowcaseHighlights,
  ShowcasePrimaryCta,
  ShowcaseTagList,
  ShowcaseTitleLink,
  ShowcaseVisual,
} from '../showcaseShared'
import BentoHireNavCard from './BentoHireNavCard'
import {
  stitchCiBadgeSrc,
  stitchCodecovBadgeSrc,
  stitchCodecovHref,
  stitchIosCiBadgeSrc,
  stitchPlayCdBadgeSrc,
} from '../../../constants/stitchStatusBadges'

const stitch = HOME_SHOWCASE_PROJECTS[0]
const solitaire = HOME_SHOWCASE_PROJECTS[1]

function showcaseLead(project: HomeShowcaseProject) {
  return project.homeSummary ?? project.summary
}

const stitchHomeHighlights = stitch.highlights?.slice(0, 2) ?? []
const stitchHomeTags = stitch.tags.slice(0, 4)
const solitaireHomeTags = solitaire.tags.slice(0, 3)

const stitchCaseStudyHref = ROUTES.STITCH_COUNTER_V2

export default function HomeLayoutBento() {
  return (
    <section class="home-layout-bento" aria-label="Featured work and site navigation">
      <div class="site-container home-page-narrow">
        <div class="home-layout-bento-grid">
          <article class="home-layout-bento-cell home-layout-bento-cell--hero">
            <p class="home-layout-bento-featured-chip">Featured Work</p>
            <div class="home-layout-bento-hero-inner">
              <div class="home-layout-bento-tile-top">
                <ShowcaseVisual project={stitch} class="home-layout-bento-tile-visual" />
              </div>
              <div class="home-layout-bento-hero-body">
                <p class="home-layout-bento-meta">{stitch.year}</p>
                <h3 class="home-layout-bento-hero-title">
                  <ShowcaseTitleLink project={stitch} />
                </h3>
                <p class="home-layout-bento-hero-summary">{showcaseLead(stitch)}</p>
                {stitchHomeHighlights.length > 0 ? (
                  <>
                    <h4 class="home-layout-bento-hero-section-label">Metrics</h4>
                    <ShowcaseHighlights items={stitchHomeHighlights} />
                  </>
                ) : null}
                <div
                  class="home-layout-bento-badge-row"
                  role="group"
                  aria-label="Android CI, iOS CI, Play internal delivery, and code coverage"
                >
                  <A
                    href={stitchCaseStudyHref}
                    class="home-layout-bento-badge-link"
                    aria-label="Stitch Counter V2 case study — Android CI status"
                  >
                    <img
                      src={stitchCiBadgeSrc}
                      alt="Android CI workflow status"
                      class="home-layout-bento-badge-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </A>
                  {stitchIosCiBadgeSrc ? (
                    <A
                      href={stitchCaseStudyHref}
                      class="home-layout-bento-badge-link"
                      aria-label="Stitch Counter V2 case study — iOS CI status"
                    >
                      <img
                        src={stitchIosCiBadgeSrc}
                        alt="iOS CI workflow status"
                        class="home-layout-bento-badge-img"
                        loading="lazy"
                        decoding="async"
                      />
                    </A>
                  ) : null}
                  <A
                    href={stitchCaseStudyHref}
                    class="home-layout-bento-badge-link"
                    aria-label="Stitch Counter V2 case study — Play internal CD status"
                  >
                    <img
                      src={stitchPlayCdBadgeSrc}
                      alt="Play internal CD workflow status"
                      class="home-layout-bento-badge-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </A>
                  <a
                    href={stitchCodecovHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="home-layout-bento-badge-link"
                  >
                    <img
                      src={stitchCodecovBadgeSrc}
                      alt="Codecov coverage badge"
                      class="home-layout-bento-badge-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                </div>
                <ShowcaseTagList tags={stitchHomeTags} />
                <div class="home-layout-bento-hero-actions">
                  <ShowcasePrimaryCta project={stitch} class="btn home-hero-cta home-hero-cta-primary" />
                </div>
              </div>
            </div>
          </article>

          <article class="home-layout-bento-cell home-layout-bento-cell--tile home-layout-bento-cell--solitaire">
            <p class="home-layout-bento-featured-chip">Featured Work</p>
            <div class="home-layout-bento-tile-top">
              <ShowcaseVisual project={solitaire} class="home-layout-bento-tile-visual" />
            </div>
            <p class="home-layout-bento-meta">{solitaire.year}</p>
            <h3 class="home-layout-bento-tile-title">
              <ShowcaseTitleLink project={solitaire} />
            </h3>
            <p class="home-layout-bento-tile-lead">{showcaseLead(solitaire)}</p>
            <ShowcaseTagList tags={solitaireHomeTags} class="home-showcase-tags home-showcase-tags--compact" />
            <ShowcasePrimaryCta project={solitaire} class="btn btn-secondary home-layout-bento-tile-cta" />
          </article>

          <article class="home-layout-bento-cell home-layout-bento-cell--nav home-layout-bento-cell--nav-projects">
            <A
              href={ROUTES.PROJECTS}
              classList={{
                'nav-card': true,
                'nav-card-projects': true,
                'home-layout-bento-nav-link': true,
              }}
            >
              <span class="nav-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <h3 class="nav-card-title">Projects</h3>
              <p class="nav-card-description">Case studies, repos, and store links.</p>
              <span class="nav-card-action">View projects →</span>
            </A>
          </article>

          <article class="home-layout-bento-cell home-layout-bento-cell--nav home-layout-bento-cell--nav-skills">
            <A
              href={ROUTES.SKILLS}
              classList={{
                'nav-card': true,
                'nav-card-skills': true,
                'home-layout-bento-nav-link': true,
              }}
            >
              <span class="nav-card-icon">&lt; / &gt;</span>
              <h3 class="nav-card-title">Skills</h3>
              <p class="nav-card-description">Stack and tools I use.</p>
              <span class="nav-card-action">Browse stack →</span>
            </A>
          </article>

          <article class="home-layout-bento-cell home-layout-bento-cell--nav home-layout-bento-cell--nav-contact">
            <BentoHireNavCard />
          </article>
        </div>
      </div>
    </section>
  )
}
