import Hero from '@components/Hero'
import CaseStudyCardList from '../components/caseStudy/CaseStudyCardList'
import { getCaseStudiesFeaturedFirst } from '../constants/caseStudies'

export default function CaseStudies() {
  return (
    <>
      <Hero
        title="Case Studies"
        subtitle="The engineering decisions behind my shipped work: architecture, data, UI, and cross-platform code."
        variant="compact"
      />
      <section class="project-detail case-study">
        <div class="site-container">
          <CaseStudyCardList studies={getCaseStudiesFeaturedFirst()} showProject />
        </div>
      </section>
    </>
  )
}
