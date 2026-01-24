export interface CarouselSlide {
  image: string;
  text: string;
  id: number;
}

export interface CarouselOptions {
  autoScroll?: boolean;
  autoScrollInterval?: number;
  pauseOnHover?: boolean;
}

export function createImageCarousel(
  slides: CarouselSlide[], 
  containerId: string,
  options: CarouselOptions = {}
) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const {
    autoScroll = true,
    autoScrollInterval = 5000,
    pauseOnHover = true,
  } = options;

  let currentIndex = 0;
  let autoScrollTimer: number | null = null;
  let isPaused = false;

  const carouselHTML = `
    <div class="carousel" role="region" aria-label="Image carousel">
      <div class="carousel-viewport">
        <div class="carousel-track" id="carouselTrack-${containerId}">
          ${slides
            .map(
              (slide, index) => `
            <div class="carousel-slide ${index === 0 ? 'active' : ''}" data-index="${index}" role="group" aria-roledescription="slide" aria-label="Slide ${index + 1} of ${slides.length}">
              <img src="${slide.image}" alt="${slide.text}" loading="lazy" />
              <p class="carousel-slide-text">${slide.text}</p>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
      <div class="carousel-controls">
        <button class="carousel-btn carousel-btn-prev" id="carouselPrev-${containerId}" aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <div class="carousel-indicators" role="tablist" aria-label="Slide indicators" id="carouselIndicators-${containerId}">
          ${slides
            .map(
              (_, index) => `
            <button class="carousel-indicator ${index === 0 ? 'active' : ''}" data-index="${index}" role="tab" aria-label="Go to slide ${index + 1}" aria-selected="${index === 0}"></button>
          `
            )
            .join('')}
        </div>
        <button class="carousel-btn carousel-btn-next" id="carouselNext-${containerId}" aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  `;

  container.innerHTML = carouselHTML;

  const carousel = container.querySelector('.carousel') as HTMLElement;
  const track = document.getElementById(`carouselTrack-${containerId}`) as HTMLElement;
  const prevBtn = document.getElementById(`carouselPrev-${containerId}`) as HTMLButtonElement;
  const nextBtn = document.getElementById(`carouselNext-${containerId}`) as HTMLButtonElement;
  const indicators = container.querySelectorAll(`.carousel-indicator`) as NodeListOf<HTMLButtonElement>;
  const slideElements = container.querySelectorAll('.carousel-slide') as NodeListOf<HTMLElement>;

  function updateCarousel(index: number, smooth = true) {
    currentIndex = index;
    
    slideElements.forEach((slide, i) => {
      const isActive = i === index;
      slide.classList.toggle('active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });
    
    indicators.forEach((indicator, i) => {
      const isActive = i === index;
      indicator.classList.toggle('active', isActive);
      indicator.setAttribute('aria-selected', String(isActive));
    });
    
    if (track) {
      track.style.transition = smooth ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
      track.style.transform = `translateX(-${index * 100}%)`;
    }
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    updateCarousel(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(prevIndex);
  }

  function startAutoScroll() {
    if (!autoScroll || isPaused) return;
    
    stopAutoScroll();
    autoScrollTimer = window.setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, autoScrollInterval);
  }

  function stopAutoScroll() {
    if (autoScrollTimer !== null) {
      clearInterval(autoScrollTimer);
      autoScrollTimer = null;
    }
  }

  function pauseAutoScroll() {
    isPaused = true;
    stopAutoScroll();
  }

  function resumeAutoScroll() {
    isPaused = false;
    startAutoScroll();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      if (autoScroll) {
        pauseAutoScroll();
        setTimeout(resumeAutoScroll, autoScrollInterval * 2);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      if (autoScroll) {
        pauseAutoScroll();
        setTimeout(resumeAutoScroll, autoScrollInterval * 2);
      }
    });
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      updateCarousel(index);
      if (autoScroll) {
        pauseAutoScroll();
        setTimeout(resumeAutoScroll, autoScrollInterval * 2);
      }
    });
  });

  if (pauseOnHover && carousel) {
    carousel.addEventListener('mouseenter', pauseAutoScroll);
    carousel.addEventListener('mouseleave', resumeAutoScroll);
    carousel.addEventListener('focusin', pauseAutoScroll);
    carousel.addEventListener('focusout', resumeAutoScroll);
  }

  if (autoScroll) {
    startAutoScroll();
  }

  const keyboardHandler = (e: KeyboardEvent) => {
    if (document.activeElement?.closest('.carousel') !== carousel) return;
    
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  };

  document.addEventListener('keydown', keyboardHandler);

  return {
    destroy: () => {
      stopAutoScroll();
      document.removeEventListener('keydown', keyboardHandler);
    },
  };
}
