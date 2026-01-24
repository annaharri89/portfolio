// Navigation menu toggle
const navToggle = document.getElementById('navToggle') as HTMLButtonElement;
const navMenu = document.getElementById('navMenu') as HTMLUListElement;

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.setAttribute('aria-expanded', String(!isExpanded));
  });

  // Close menu when clicking on a link
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (!navMenu.contains(target) && !navToggle.contains(target)) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.setAttribute('aria-expanded', 'false');
    }
  });
}

// Smooth scroll for anchor links within the same page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        // Save reference to the clicked link element
        const clickedLink = this as HTMLElement;
        const linkSelector = Array.from(document.querySelectorAll('a[href^="#"]')).indexOf(clickedLink);
        const linkId = clickedLink.id || `anchor-${linkSelector}`;
        if (!clickedLink.id) {
          clickedLink.id = linkId;
        }
        
        const navHeight = document.querySelector('.nav')?.clientHeight || 0;
        const targetPosition = (target as HTMLElement).offsetTop - navHeight;
        
        // Push state with link ID to restore position later
        history.pushState({ linkId: linkId }, '', href);
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Handle back button to restore scroll position to the clicked link
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.linkId) {
    const linkElement = document.getElementById(e.state.linkId);
    if (linkElement) {
      const navHeight = document.querySelector('.nav')?.clientHeight || 0;
      const linkPosition = linkElement.offsetTop - navHeight;
      window.scrollTo({
        top: linkPosition,
        behavior: 'smooth'
      });
    }
  }
});
