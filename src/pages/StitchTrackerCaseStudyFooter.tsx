import { A } from '@solidjs/router'
import { getCaseStudiesForProject } from '../constants/caseStudies'
import { ROUTES } from '../constants/routes'

export default function StitchTrackerCaseStudyFooter(props: { currentStudyId: string }) {
  const nextStudy = () => {
    const studies = getCaseStudiesForProject('stitch-counter-v2')
    const currentIndex = studies.findIndex((study) => study.id === props.currentStudyId)
    return studies[(currentIndex + 1) % studies.length]
  }

  return (
    <div class="project-links mt-8">
      <A href={ROUTES.STITCH_COUNTER_V2} class="project-link">
        Back to Stitch Counter (V2)
      </A>
      <A href={nextStudy().href} class="project-link">
        Next: {nextStudy().title}
      </A>
    </div>
  )
}
