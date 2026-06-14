import { useNavigate } from '@solidjs/router'
import { onMount } from 'solid-js'

export default function UpworkBlockedRoute() {
  const navigate = useNavigate()

  onMount(() => {
    navigate('/', { replace: true })
  })

  return null
}
