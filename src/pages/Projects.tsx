import Hero from '@components/Hero'
import { ProjectCardGrid, ProjectCard } from '@components/ProjectCardGrid'
import GithubIcon from '@icons/GithubIcon'
import { ROUTES } from '@consts/routes'
import stitchCounterV2 from '@images/icons/stitch_counter_v2.png';
import stitchCounter from '@images/icons/application_icon_stitch_counter.png';
import hpfIcon from '@images/icons/hpf_pulse_google_play_icon.png'

export default function Projects() {
  return (
    <>
      <Hero
        title="Projects"
        subtitle="A showcase of my current work and past projects, demonstrating my skills in mobile and web development"
        variant="compact"
      />

      <ProjectCardGrid>
        <ProjectCard
          icon={stitchCounterV2}
          title="Stitch Counter (V2)"
          description={`The next generation of stitch counting- an evolution of <a href="${ROUTES.STITCH_COUNTER}">Stitch Counter</a> with enhanced features and a modern user experience.`}
          tags={[
            [{ year: '2025', tech: 'Native Android' }, { tech: 'Kotlin' }, { tech: 'Jetpack Compose' }],
            [{ year: '2026', tech: 'Native iOS' }, { tech: 'Swift' }, { tech: 'SwiftUI' }],
          ]}
          tagGroupHeaders={[undefined, 'In Progress']}
          link={{ href: ROUTES.STITCH_COUNTER_V2, label: 'Learn More' }}
        />

        <ProjectCard
          icon="🌐"
          title="Portfolio Website"
          description="This portfolio website was built with modern web technologies, showcasing my ability to work with SolidJS and create responsive, modern user interfaces."
          tags={[[{ year: '2026', tech: 'SolidJS' }, { tech: 'SolidJS Router' }, { tech: 'TypeScript' }, { tech: 'Vite' }, { tech: 'Tailwind CSS' }]]}
          link={{ href: 'https://github.com/annaharri89/portfolio', label: 'View on GitHub' }}
        />

        <ProjectCard
          icon="📤"
          title="Share My Brand"
          description="A package of SDKs for Android, iOS, and Web that allows you to easily share content from your app to social media with your brand logo added. It has the benefit of not showing the brand logo until the user has tapped the share button and the content has been generated. This will keep your app UI decluttered, which leads to better UX."
          tags={[[{ year: '2026', tech: 'Kotlin Multiplatform' }, { tech: 'WASM' }, { tech: 'Compose Multiplatform' }]]}
          comingSoon
        />

        <ProjectCard
          icon="✓"
          title="Collab Checklists"
          description="A collaborative checklist application that enables teams to work together efficiently and stay organized."
          tags={[[{ year: '2026', tech: 'Kotlin Multiplatform' }, { tech: 'WASM' }, { tech: 'Compose Multiplatform' }]]}
          comingSoon
        />
      </ProjectCardGrid>

      <section class="archived-projects">
        <div class="container">
          <h2 class="section-title">Archived Projects</h2>
          <p class="hero-subtext hero-subtext-centered" style={{ "margin-bottom": 'var(--spacing-xl)', color: 'var(--color-text-primary)' }}>
            Early projects that mark the starting point of my journey into software development.
          </p>
          <div class="projects-grid">
            <ProjectCard
              icon="🔢"
              title="Math Game"
              description="A socket-based math game with a global scoreboard demonstrating real-time communication between client and server using WebSockets."
              tags={[[{ year: '2018', tech: 'HTML' }, { tech: 'JavaScript' }, { tech: 'WebSockets' }]]}
              link={[
                { href: 'https://github.com/annaharri89/math-game-client', label: 'Client Repo', icon: <GithubIcon class="w-4 h-4" /> },
                { href: 'https://github.com/annaharri89/math-game-server', label: 'Server Repo', icon: <GithubIcon class="w-4 h-4" /> },
              ]}
            />

            <ProjectCard
              icon={hpfIcon}
              title="HPF Pulse"
              description={`Android and iOS app developed for <a href="https://humanitypreservationfoundation.org" target="_blank" rel="noopener noreferrer">The Humanity Preservation Foundation</a> to provide a directory for finding services to combat bullying, domestic violence, and child abuse in all 50 states.`}
              tags={[
                [{ year: '2017', tech: 'Native Android' }, { tech: 'Java' }, { tech: 'XML' }],
                [{ year: '2017', tech: 'Native iOS' }, { tech: 'Swift' }, { tech: 'UIKit' }],
              ]}
              link={{ href: ROUTES.HPF_PULSE, label: 'Learn More' }}
            />

            <ProjectCard
              icon={stitchCounter}
              title="Stitch Counter"
              description="Android app for tracking knitting or crochet projects with single or double counters, library system, and a theming system."
              tags={[[{ year: '2017', tech: 'Native Android' }, { tech: 'Java' }, { tech: 'XML' }]]}
              link={{ href: ROUTES.STITCH_COUNTER, label: 'Learn More' }}
            />

            <ProjectCard
              icon="🧶"
              title="Crochet Central"
              description="iPad app created for Student Capstone Project at Indiana University East, demonstrating experience with Objective-C and iOS development."
              tags={[[{ year: '2013', tech: 'Native iOS' }, { tech: 'Objective-C' }]]}
              link={{ href: 'https://github.com/annaharri89/crochet-central', label: 'View on GitHub', icon: <GithubIcon class="w-4 h-4" /> }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
