import { Show } from 'solid-js'
import { A } from '@solidjs/router'
import stitchCounterV2Icon from '@images/icons/stitch_counter_v2.png'
import Hero from '../components/Hero'
import ImageCarousel from '@components/Carousel'
import ProjectDetailMetricGrid from '../components/ProjectDetailMetricGrid'
import ProjectDetailStatTile from '../components/ProjectDetailStatTile'
import {
  CaseStudyLightboxProvider,
  useCaseStudyLightboxOpen,
} from '../components/caseStudy/CaseStudyLightbox'
import { getProjectSlides, Project } from '@consts/projects'
import { stitchTrackerDemoDoubleCounter, stitchTrackerDemoSingleCounter } from '../constants/stitchTrackerDemos'
import {
  ROUTES,
  STITCH_COUNTER_V2_CASE_STUDY_HASHES,
  STITCH_COUNTER_V2_PLAY_STORE_URL,
} from '../constants/routes'
import { isUpworkMode, UPWORK_PROFILE_URL } from '../constants/upwork'
import {
  stitchCiBadgeSrc,
  stitchCodecovBadgeSrc,
  stitchCodecovHref,
  stitchIosCiBadgeSrcShortLabel,
  stitchPlayCdBadgeSrc,
} from '../constants/stitchStatusBadges'
import StitchTrackerCaseStudies from './StitchTrackerCaseStudies'

function StitchTrackerPage() {
  const openLightbox = useCaseStudyLightboxOpen()

  return (
    <>
      <Hero
        title="Stitch Counter (V2)"
        subtitle="One product, two native stacks: Android shipped on Google Play production and an iOS SwiftUI rewrite in progress toward the same local-first experience."
        leadingIconSrc={stitchCounterV2Icon}
        leadingIconAlt="Stitch Counter V2 Icon"
        variant="compact"
      />
      <section class="project-detail stitch-tracker-detail">
        <div class="site-container">
          <div class="project-detail-section">
            <div class="project-header">
              <p class="text-neutral-700 leading-relaxed text-base">
                Stitch Counter V2 solves a practical problem for knitters and crocheters: keeping
                long-running projects safe, readable, and easy to continue across sessions. I rebuilt the{' '}
                <a
                  href={ROUTES.STITCH_COUNTER}
                  class="text-accent-link"
                >
                  original Android app
                </a>{' '}
                in Kotlin with Jetpack Compose, Room, and DataStore so it can handle real
                usage patterns and local backup and restore (zip, no cloud). I added CI/CD so regressions and releases
                stay predictable: CI on every PR, CD to Play internal—same setup I’d use on a team
                where release discipline matters. The iOS rewrite is in progress toward the same local-first experience.
              </p>
              <ProjectDetailMetricGrid columns="2">
                <ProjectDetailStatTile label="Play installs" value="2k+ installs" />
                <ProjectDetailStatTile
                  label="Stability"
                  value="0 crashes"
                />
              </ProjectDetailMetricGrid>
              <p class="text-sm text-neutral-600 mt-2">
                Stability figures and install count come from Google Play Console.
              </p>
              <div class="chip-groups">
                <div class="chip-group">
                  <h4 class="chip-group-title">Native Android · Shipped</h4>
                  <div class="chip-group-badges" role="group" aria-label="Android CI, Play internal CD, and code coverage">
                    <img
                      src={stitchCiBadgeSrc}
                      alt="Android CI status badge"
                    />
                    <img
                      src={stitchPlayCdBadgeSrc}
                      alt="Play internal CD status badge"
                    />
                    <a
                      href={stitchCodecovHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-block"
                      aria-label="Stitch Counter V2 code coverage on Codecov"
                    >
                      <img
                        src={stitchCodecovBadgeSrc}
                        alt="Codecov coverage badge"
                      />
                    </a>
                  </div>
                  <div class="project-tags">
                    <span class="tech-tag">Kotlin</span>
                    <span class="tech-tag">Jetpack Compose</span>
                    <span class="tech-tag">Material3</span>
                    <span class="tech-tag">Room</span>
                    <span class="tech-tag">Hilt</span>
                    <span class="tech-tag">DataStore</span>
                    <span class="tech-tag">Coil</span>
                    <span class="tech-tag">Ramcosta Compose Destinations</span>
                  </div>
                </div>
                <div class="chip-group">
                  <h4 class="chip-group-title">Native iOS · In Progress</h4>
                  {stitchIosCiBadgeSrcShortLabel ? (
                    <div class="chip-group-badges" role="group" aria-label="iOS CI status">
                      <img
                        src={stitchIosCiBadgeSrcShortLabel}
                        alt="CI status badge"
                      />
                    </div>
                  ) : null}
                  <div class="project-tags">
                    <span class="tech-tag">Swift</span>
                    <span class="tech-tag">SwiftUI</span>
                    <span class="tech-tag">SwiftData</span>
                    <span class="tech-tag">Combine</span>
                    <span class="tech-tag">PhotosUI</span>
                    <span class="tech-tag">ZIPFoundation</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap gap-3 mt-4">
                <button
                  type="button"
                  class="project-link"
                  onClick={() =>
                    openLightbox({
                      kind: 'video',
                      webm: stitchTrackerDemoSingleCounter.webm,
                      mp4: stitchTrackerDemoSingleCounter.mp4,
                      enlargedDescription: stitchTrackerDemoSingleCounter.enlargedDescription,
                    })
                  }
                >
                  Watch demo: Single Counter
                </button>
                <button
                  type="button"
                  class="project-link"
                  onClick={() =>
                    openLightbox({
                      kind: 'video',
                      webm: stitchTrackerDemoDoubleCounter.webm,
                      mp4: stitchTrackerDemoDoubleCounter.mp4,
                      enlargedDescription: stitchTrackerDemoDoubleCounter.enlargedDescription,
                    })
                  }
                >
                  Watch demo: Double Counter
                </button>
              </div>
            
              <p class="text-neutral-700 leading-relaxed text-base mt-4">
                <a
                  href={`#${STITCH_COUNTER_V2_CASE_STUDY_HASHES.OVERVIEW}`}
                  class="text-accent-link"
                >
                  Case studies
                </a>{' '}
                (architecture, UI/UX, screenshots) for this app are below on this page.
              </p>
            </div>
            <div class="engineering-snapshot-row mb-6">
              <div class="engineering-snapshot-col-text">
                <h4>Engineering snapshot</h4>
                <ul class="list-disc list-inside space-y-2 text-neutral-700">
                  <li>Kotlin app with Jetpack Compose + Material 3 across counter, library, settings, and project detail flows.</li>
                  <li>
                    Room handles structured project and counter data; DataStore stores preferences and active theme state.
                  </li>
                  <li>
                    Six shipped themes with per-theme launcher icon updates and dark mode support.
                  </li>
                  <li>
                    Local backup and restore uses zip metadata + images, with typed failures and safe user messaging—no cloud sync.
                  </li>
                  <li>
                    CI runs on pull requests and pushes to <code class="text-sm bg-neutral-100 px-1 py-0.5 rounded">main</code>; CD publishes signed AABs to Play internal after successful CI on <code class="text-sm bg-neutral-100 px-1 py-0.5 rounded">main</code>.
                  </li>
                  <li>
                    Real performance details include debounced autosave and controlled list scrolling for large libraries.
                  </li>
                </ul>
              </div>
              <div class="engineering-snapshot-col-carousel" id="stitch-tracker-carousel">
                <ImageCarousel
                  fillParentHeight
                  slides={getProjectSlides(Project.STITCH_TRACKER)}
                  onActivateSlide={(slide) => {
                    const webm = slide.videoSources?.webm
                    const mp4 = slide.videoSources?.mp4
                    if (webm || mp4) {
                      openLightbox({
                        kind: 'video',
                        webm,
                        mp4,
                        enlargedDescription: slide.text,
                      })
                      return
                    }
                    if (slide.image) {
                      openLightbox({
                        kind: 'image',
                        src: slide.image,
                        enlargedDescription: slide.text,
                      })
                    }
                  }}
                />
              </div>
            </div>
            <div class="project-links project-links-vertical">
              <div class="project-links">
                <a
                  href={STITCH_COUNTER_V2_PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link project-link--primary"
                >
                  Get Stitch Counter on Google Play
                </a>
                <Show when={!isUpworkMode}>
                  <a href={ROUTES.STITCH_COUNTER_V2_PRIVACY_POLICY} class="project-link">
                    Privacy Policy
                  </a>
                  <a href={ROUTES.STITCH_COUNTER_V2_EULA} class="project-link">
                    EULA
                  </a>
                </Show>
              </div>
              <div class="project-links">
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
            </div>
          </div>
        </div>
      </section>
      <StitchTrackerCaseStudies />
    </>
  )
}

export default function StitchTracker() {
  return (
    <CaseStudyLightboxProvider>
      <StitchTrackerPage />
    </CaseStudyLightboxProvider>
  )
}
