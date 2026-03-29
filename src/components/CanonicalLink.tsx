import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_CANONICAL_ORIGIN } from '../constants/site'

function canonicalHrefForPathname(pathname: string): string {
  const withoutTrailingSlash =
    pathname.length > 1 && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname
  if (withoutTrailingSlash === '/' || withoutTrailingSlash === '') {
    return SITE_CANONICAL_ORIGIN
  }
  return `${SITE_CANONICAL_ORIGIN}${withoutTrailingSlash}`
}

export default function CanonicalLink() {
  const { pathname } = useLocation()
  const canonicalHref = canonicalHrefForPathname(pathname)

  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonicalHref
  }, [canonicalHref])

  return null
}
