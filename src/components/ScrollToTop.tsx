import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const fragmentId = decodeURIComponent(hash.replace(/^#/, ''))
      const scrollToFragment = () => {
        const target = document.getElementById(fragmentId)
        if (target) {
          target.scrollIntoView({ behavior: 'instant', block: 'start' })
          return true
        }
        return false
      }
      let retryTimeoutId: number | undefined
      requestAnimationFrame(() => {
        if (!scrollToFragment()) {
          retryTimeoutId = window.setTimeout(() => scrollToFragment(), 120)
        }
      })
      return () => {
        if (retryTimeoutId !== undefined) {
          window.clearTimeout(retryTimeoutId)
        }
      }
    }

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

    return () => {
      clearTimeout(scrollAfterTimeout)
    }
  }, [pathname, hash])

  return null
}
