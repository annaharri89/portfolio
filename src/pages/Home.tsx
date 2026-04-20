
import Hero from '../components/Hero'
import HomeLayoutBento from '../components/home/layouts/HomeLayoutBento'
import { ROUTES } from '../constants/routes'
import { SOCIAL_LINKS } from '../constants/social'

export default function Home() {
  return (
    <div class="home-page">
      <Hero
        title={
          <>
            Welcome!<br />
            <span class="hero-text-smaller">I'm</span> Anna Harrison
          </>
        }
        subtitle="Android developer first. I build production Kotlin + Jetpack Compose apps, with professional iOS experience in Swift/SwiftUI."
        actions={
          <>
            <a href={ROUTES.PROJECTS} class="btn home-hero-cta home-hero-cta-primary">
              View projects
            </a>
            <a
              href={SOCIAL_LINKS.github}
              class="home-hero-cta-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </>
        }
      />
      <HomeLayoutBento />
    </div>
  )
}
