import type { JSX } from 'solid-js'

interface CaseStudyCardProps {
  kicker: string
  title: string
  children: JSX.Element
  outcome: JSX.Element
  takeaway: JSX.Element
  footer?: JSX.Element
}

export default function CaseStudyCard(props: CaseStudyCardProps) {
  return (
    <div class="case-study__card">
      <p class="case-study__kicker">{props.kicker}</p>
      <h4 class="case-study__block-title">{props.title}</h4>
      <div class="case-study__block case-study__card-prose">{props.children}</div>
      <div class="case-study__block">
        <h4>Outcome</h4>
        <p>{props.outcome}</p>
      </div>
      <div class="case-study__block">
        <h4>Takeaway</h4>
        <p>{props.takeaway}</p>
      </div>
      {props.footer}
    </div>
  )
}
