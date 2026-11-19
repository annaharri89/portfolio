import {
  CASE_STUDY_PROJECTS,
  getCaseStudiesForProject,
  type CaseStudyProjectKey,
} from '../../constants/caseStudies'
import CaseStudyCardList from './CaseStudyCardList'

export default function ProjectCaseStudyCards(props: { project: CaseStudyProjectKey }) {
  const project = () => CASE_STUDY_PROJECTS[props.project]

  return (
    <section
      class="project-detail case-study"
      id={project().anchorId}
      aria-label={`Case studies from ${project().name}`}
    >
      <div class="site-container">
        <h2 class="case-study__page-section-title">Case studies</h2>
        <CaseStudyCardList studies={getCaseStudiesForProject(props.project)} />
      </div>
    </section>
  )
}
