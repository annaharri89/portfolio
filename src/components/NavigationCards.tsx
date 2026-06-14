import { Show } from 'solid-js'
import { ROUTES } from '@consts/routes'
import { isUpworkMode, UPWORK_PROFILE_URL } from '@consts/upwork'

export default function NavigationCards() {
  return (
    <section class="container">
      <div class="nav-cards">
        <a href={ROUTES.PROJECTS} class="nav-card nav-card-projects">
          <span class="nav-card-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <h3 class="nav-card-title">Projects</h3>
          <p class="nav-card-description">Android, Kotlin Multiplatform, and shipped apps—Compose, shared modules, and supporting web work.</p>
        </a>
        <a href={ROUTES.SKILLS} class="nav-card nav-card-skills">
          <span class="nav-card-icon">&lt; / &gt;</span>
          <h3 class="nav-card-title">Skills</h3>
          <p class="nav-card-description">Discover the technologies and tools I work with</p>
        </a>
        <Show
          when={isUpworkMode}
          fallback={
            <a href={ROUTES.CONTACT} class="nav-card nav-card-contact">
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
              <p class="nav-card-description">Let's connect and discuss your next project</p>
            </a>
          }
        >
          <a
            href={UPWORK_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="nav-card nav-card-upwork"
          >
            <span class="nav-card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h3 class="nav-card-title">Hire on Upwork</h3>
            <p class="nav-card-description">View my profile, reviews, and job history.</p>
          </a>
        </Show>
      </div>
    </section>
  )
}
