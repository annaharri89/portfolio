import { useState, useEffect } from 'react'

interface Slide {
  image: string
  text: string
  id: number
}

interface ImageCarouselProps {
  slides: Slide[]
  interval?: number
}

export default function ImageCarousel({ slides, interval = 5000 }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [slides.length, interval])

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="card overflow-hidden">
        <div className="relative aspect-video bg-neutral-100">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.text}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900/70 to-transparent p-4">
                <p className="text-white text-center text-sm font-medium">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all shadow-md"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all shadow-md"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex
                  ? 'w-8 bg-neutral-900'
                  : 'w-1.5 bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
