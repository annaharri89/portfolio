// Shared navigation HTML generator
export function getNavigationHTML(currentPage: string = ''): string {
  const pages = [
    { href: 'about.html', label: 'About', id: 'about' },
    { href: 'projects.html', label: 'Projects', id: 'projects' },
    { href: 'skills.html', label: 'Skills', id: 'skills' },
    { href: 'contact.html', label: 'Contact', id: 'contact' },
  ];

  const navLinks = pages
    .map(
      (page) => `
    <li>
      <a href="${page.href}" class="nav-link ${currentPage === page.id ? 'active' : ''}">${page.label}</a>
    </li>
  `
    )
    .join('');

  return `
    <nav class="nav" id="nav">
      <div class="nav-container">
        <a href="index.html" class="nav-logo">Anna Harrison</a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-menu" id="navMenu">
          ${navLinks}
        </ul>
      </div>
    </nav>
  `;
}

// Initialize navigation functionality
export function initNavigation() {
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
    navLinks.forEach((link) => {
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
}
