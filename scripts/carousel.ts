export interface CarouselSlide {
  image: string;
  text: string;
  id: number;
}

export function createImageCarousel(slides: CarouselSlide[], containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let currentIndex = 0;

  const carouselHTML = `
    <div class="carousel">
      <div class="carousel-viewport">
        <div class="carousel-track" id="carouselTrack-${containerId}">
          ${slides
            .map(
              (slide, index) => `
            <div class="carousel-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
              <img src="${slide.image}" alt="${slide.text}" />
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
        <div class="carousel-indicators" id="carouselIndicators-${containerId}">
          ${slides
            .map(
              (_, index) => `
            <button class="carousel-indicator ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to slide ${index + 1}"></button>
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

  const track = document.getElementById(`carouselTrack-${containerId}`) as HTMLElement;
  const prevBtn = document.getElementById(`carouselPrev-${containerId}`) as HTMLButtonElement;
  const nextBtn = document.getElementById(`carouselNext-${containerId}`) as HTMLButtonElement;
  const indicators = container.querySelectorAll(`.carousel-indicator`) as NodeListOf<HTMLButtonElement>;
  const slideElements = container.querySelectorAll('.carousel-slide') as NodeListOf<HTMLElement>;

  function updateCarousel(index: number) {
    currentIndex = index;
    slideElements.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
    if (track) {
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

  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => updateCarousel(index));
  });

  // Auto-play (optional - can be removed if not desired)
  // let autoPlayInterval: number;
  // function startAutoPlay() {
  //   autoPlayInterval = window.setInterval(nextSlide, 5000);
  // }
  // function stopAutoPlay() {
  //   clearInterval(autoPlayInterval);
  // }
  // startAutoPlay();
  // container.addEventListener('mouseenter', stopAutoPlay);
  // container.addEventListener('mouseleave', startAutoPlay);
}
