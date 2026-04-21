import { useLocation } from '@solidjs/router'
import { createEffect } from 'solid-js'
import { applyRouteSeoToDocument } from '../seo/documentSeo'

export default function SeoHead() {
  const location = useLocation()

  createEffect(() => {
    const path = location.pathname || '/'
    applyRouteSeoToDocument(path)
  })

  return null
}
