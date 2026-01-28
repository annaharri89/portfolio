import Hero from '../components/Hero'
import ProjectDetailsCard from '../components/ProjectDetailsCard'
import ComingSoonBadge from '../components/ComingSoonBadge'

export default function CollabCheckLists() {
  return (
    <>
      <Hero
        title="Collab Check Lists"
        subtitle="Collaborative checklist application - coming soon"
      />
      <section className="project-detail">
        <div className="container">
          <div className="project-detail-content">
            <ProjectDetailsCard
              about="Collab Check Lists is a collaborative checklist application that enables teams to work together efficiently. More information coming soon."
              features={<p className="text-neutral-500 italic">Details to be added...</p>}
              tags={<ComingSoonBadge />}
            />
          </div>
        </div>
      </section>
    </>
  )
}
