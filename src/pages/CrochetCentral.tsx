import Hero from '../components/Hero'
import ProjectDetailsCard from '../components/ProjectDetailsCard'
import GithubIcon from '../components/icons/GithubIcon'

export default function CrochetCentral() {
  return (
    <>
      <Hero
        title="Crochet Central"
        subtitle="An iPad app created for my Student Capstone Project at Indiana University East"
      />
      <section className="project-detail">
        <div className="container">
          <div className="project-detail-content">
            <ProjectDetailsCard
              about="Crochet Central is an iPad app I created for my Student Capstone Project at Indiana University East. The app demonstrates my experience with Objective-C and iOS development. While the app is now outdated and may not function as it originally did, it serves as proof of my early experience in mobile development and my ability to work with native iOS technologies."
              features={
                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                  <li>Objective-C</li>
                  <li>iOS SDK</li>
                  <li>iPad-specific UI/UX design</li>
                </ul>
              }
              tags={
                <a
                  href="https://github.com/annaharri89/crochet-central"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover px-5 py-2.5 rounded-lg text-sm font-medium text-neutral-900 border border-neutral-300 flex items-center gap-2 inline-flex"
                >
                  <GithubIcon />
                  View on GitHub
                </a>
              }
            />
          </div>
        </div>
      </section>
    </>
  )
}
