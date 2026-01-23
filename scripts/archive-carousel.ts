import { createImageCarousel } from './carousel';

const hpfPulseSlides = [
  { image: '/images/screen_shot_main.PNG', text: 'Main Page', id: 0 },
  { image: '/images/screen_shot_map.PNG', text: 'Map Page', id: 1 },
  { image: '/images/screen_shot_all_resources.PNG', text: 'All Resources', id: 2 },
  { image: '/images/screen_shot_domestic_violence.PNG', text: 'Category Resources', id: 3 },
];

const stitchCounterSlides = [
  { image: '/images/stitch_counter_single_counter.png', text: 'Single Counter', id: 0 },
  { image: '/images/stitch_counter_double_counter.png', text: 'Double Counter', id: 1 },
  { image: '/images/stitch_counter_double_counter_tablet_7_inch.png', text: 'Themed Tablet', id: 2 },
  { image: '/images/stitch_counter_single_counter_landscape.png', text: 'Themed Single Counter Landscape', id: 3 },
  { image: '/images/stitch_counter_double_counter_landscape.png', text: 'Themed Double Counter Landscape', id: 4 },
];

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    createImageCarousel(hpfPulseSlides, 'hpfPulseCarousel');
    createImageCarousel(stitchCounterSlides, 'stitchCounterCarousel');
  });
} else {
  createImageCarousel(hpfPulseSlides, 'hpfPulseCarousel');
  createImageCarousel(stitchCounterSlides, 'stitchCounterCarousel');
}
