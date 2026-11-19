import { For, Show } from 'solid-js'
import { A } from '@solidjs/router'
import { CASE_STUDY_PROJECTS, type CaseStudyEntry } from '../../constants/caseStudies'

export default function CaseStudyCardList(props: { studies: CaseStudyEntry[]; showProject?: boolean }) {
  return (
    <div class="case-study__two-col">
      <For each={props.studies}>
        {(study) => (
          <div class="case-study__card case-study__card--stretch">
            <Show when={props.showProject}>
              <p class="text-sm text-neutral-600">{CASE_STUDY_PROJECTS[study.project].name}</p>
            </Show>
            <h3 class="case-study__block-title">{study.title}</h3>
            <p class="text-neutral-700 leading-relaxed text-base">{study.summary}</p>
            <div class="project-tags case-study__card-tags">
              <For each={study.chips}>{(chip) => <span class="tech-tag">{chip}</span>}</For>
            </div>
            <div class="project-links case-study__card-actions">
              <A href={study.href} class="project-link project-link--primary">
                Read case study
              </A>
            </div>
          </div>
        )}
      </For>
    </div>
  )
}
