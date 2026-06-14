import { UPWORK_PROFILE_URL } from '@consts/upwork'

export default function UpworkNavCta(props: { onNavigate: () => void }) {
  return (
    <a
      href={UPWORK_PROFILE_URL}
      class="nav-cta"
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.onNavigate}
    >
      Upwork profile
    </a>
  )
}
