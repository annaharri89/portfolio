import { createEffect, onCleanup } from 'solid-js'
import { useLocation } from '@solidjs/router'

if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

export default function ScrollToTop() {
  const location = useLocation()

  createEffect(() => {
    location.pathname

    const forceScrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      if (window.scrollY !== 0) {
        window.scrollTo(0, 0)
      }
    }
    
    forceScrollToTop()
    requestAnimationFrame(forceScrollToTop)
    
    const scrollAfterTimeout = setTimeout(forceScrollToTop, 50)
    
    onCleanup(() => {
      clearTimeout(scrollAfterTimeout)
    })
  })

  return null
}
