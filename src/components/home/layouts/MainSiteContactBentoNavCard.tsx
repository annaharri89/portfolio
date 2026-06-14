import { A } from '@solidjs/router'
import { ROUTES } from '@consts/routes'

export default function MainSiteContactBentoNavCard() {
  return (
    <A
      href={ROUTES.CONTACT}
      classList={{
        'nav-card': true,
        'nav-card-contact': true,
        'home-layout-bento-nav-link': true,
      }}
    >
      <span class="nav-card-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 6L12 13L2 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <h3 class="nav-card-title">Contact</h3>
      <p class="nav-card-description">Reach out about work or collaboration.</p>
      <span class="nav-card-action">Send a message →</span>
    </A>
  )
}
