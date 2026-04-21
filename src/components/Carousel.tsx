import { createSignal, createEffect, onCleanup, For } from 'solid-js'
import type { Slide } from '@consts/projects'

interface ImageCarouselProps {
  slides: Slide[]
  interval?: number
  /** Viewport fills parent height (parent must define height). Other pages keep fixed viewport. */
  fillParentHeight?: boolean
  /** When set, slide media is a button that invokes this (e.g. open lightbox). */
  onActivateSlide?: (slide: Slide) => void
}

function slideHasVideoSource(slide: Slide): boolean {
  return Boolean(slide.videoSources?.webm || slide.videoSources?.mp4)
}

export default function ImageCarousel(props: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = createSignal(0)
  const videoElementBySlideId = new Map<number, HTMLVideoElement>()

  createEffect(() => {
    const currentIndex = activeIndex()
    props.slides.forEach((slide, slideIndex) => {
      const videoElement = videoElementBySlideId.get(slide.id)
      if (!videoElement) return

      if (slideIndex === currentIndex) {
        videoElement.currentTime = 0
        void videoElement.play().catch(() => {})
        return
      }

      videoElement.pause()
      videoElement.currentTime = 0
    })
  })

  createEffect(() => {
    if (props.slides.length <= 1) return

    const currentIndex = activeIndex()
    const activeSlide = props.slides[currentIndex]
    if (activeSlide && slideHasVideoSource(activeSlide)) return

    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % props.slides.length)
    }, props.interval ?? 2500)

    onCleanup(() => clearTimeout(timer))
  })

  const goToSlide = (index: number) => setActiveIndex(index)
  const goToPrevious = () => setActiveIndex((prev) => (prev - 1 + props.slides.length) % props.slides.length)
  const goToNext = () => setActiveIndex((prev) => (prev + 1) % props.slides.length)
  const handleActiveVideoPlaybackEnded = () => setActiveIndex((prev) => (prev + 1) % props.slides.length)

  const fixedViewportStyle = { "min-height": '570px', height: '570px' } as const

  const renderMedia = (slide: Slide, slideIndex: number) => {
    const video = (
      <video
        ref={(el) => videoElementBySlideId.set(slide.id, el)}
        class="carousel-media"
        muted
        playsinline
        preload="metadata"
        aria-hidden={props.onActivateSlide ? true : undefined}
        onEnded={() => {
          if (slideIndex === activeIndex()) handleActiveVideoPlaybackEnded()
        }}
      >
        {slide.videoSources?.webm ? <source src={slide.videoSources.webm} type="video/webm" /> : null}
        {slide.videoSources?.mp4 ? <source src={slide.videoSources.mp4} type="video/mp4" /> : null}
      </video>
    )

    const image = (
      <img class="carousel-media" src={slide.image} alt={props.onActivateSlide ? '' : slide.text} />
    )

    const core = slideHasVideoSource(slide) ? video : image

    const activate = props.onActivateSlide
    if (!activate) return core

    return (
      <button
        type="button"
        class="carousel-media-trigger"
        aria-label={`View larger: ${slide.text}`}
        onClick={() => activate(slide)}
      >
        {core}
      </button>
    )
  }

  return (
    <div class={`carousel ${props.fillParentHeight ? 'carousel--fill' : ''}`}>
      <div
        class="carousel-viewport"
        style={props.fillParentHeight ? undefined : fixedViewportStyle}
      >
        <For each={props.slides}>{(slide, index) => (
          <div
            class={`carousel-slide ${index() === activeIndex() ? 'active' : ''}`}
            style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', width: '100%', height: '100%' }}
          >
            {renderMedia(slide, index())}
          </div>
        )}</For>
      </div>
      <div class="carousel-controls">
        <button onClick={goToPrevious} class="carousel-btn" aria-label="Previous slide">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div class="carousel-indicators">
          <For each={props.slides}>{(_, index) => (
            <button
              onClick={() => goToSlide(index())}
              class={`carousel-indicator ${index() === activeIndex() ? 'active' : ''}`}
              aria-label={`Go to slide ${index() + 1}`}
            />
          )}</For>
        </div>
        <button onClick={goToNext} class="carousel-btn" aria-label="Next slide">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
