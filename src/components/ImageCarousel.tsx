import { useEffect, useRef, useState } from 'react'
import type { Slide } from '../constants/projects'

interface ImageCarouselProps {
  slides: Slide[]
  interval?: number
}

function slideHasVideoSource(slide: Slide): boolean {
  return Boolean(slide.videoSources?.webm || slide.videoSources?.mp4)
}

export default function ImageCarousel({ slides, interval = 2500 }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const videoElementBySlideId = useRef<Map<number, HTMLVideoElement>>(new Map())

  useEffect(() => {
    slides.forEach((slide, slideIndex) => {
      const videoElement = videoElementBySlideId.current.get(slide.id)
      if (!videoElement) {
        return
      }

      if (slideIndex === activeIndex) {
        videoElement.currentTime = 0
        void videoElement.play().catch(() => {
          // Playback can be blocked in rare environments; the user can still navigate manually.
        })
        return
      }

      videoElement.pause()
      videoElement.currentTime = 0
    })
  }, [activeIndex, slides])

  useEffect(() => {
    if (slides.length <= 1) {
      return
    }

    const activeSlide = slides[activeIndex]
    if (activeSlide && slideHasVideoSource(activeSlide)) {
      return
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, interval)

    return () => clearTimeout(timer)
  }, [activeIndex, interval, slides])

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }

  const handleActiveVideoPlaybackEnded = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }

  const setVideoElementForSlide = (slideId: number, videoElement: HTMLVideoElement | null) => {
    if (videoElement) {
      videoElementBySlideId.current.set(slideId, videoElement)
      return
    }
    videoElementBySlideId.current.delete(slideId)
  }

  return (
    <div className="carousel">
      <div className="carousel-viewport" style={{ minHeight: '570px', height: '570px' }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}
          >
            {slideHasVideoSource(slide) ? (
              <video
                ref={(videoElement) => setVideoElementForSlide(slide.id, videoElement)}
                className="carousel-media"
                muted
                playsInline
                preload="metadata"
                onEnded={index === activeIndex ? handleActiveVideoPlaybackEnded : undefined}
              >
                {slide.videoSources?.webm ? <source src={slide.videoSources.webm} type="video/webm" /> : null}
                {slide.videoSources?.mp4 ? <source src={slide.videoSources.mp4} type="video/mp4" /> : null}
              </video>
            ) : (
              <img
                className="carousel-media"
                src={slide.image}
                alt={slide.text}
              />
            )}
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button
          onClick={goToPrevious}
          className="carousel-btn"
          aria-label="Previous slide"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-indicator ${index === activeIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={goToNext}
          className="carousel-btn"
          aria-label="Next slide"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
