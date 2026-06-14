import { lazy, type Component } from 'solid-js'
import UpworkBlockedRoute from '@components/UpworkBlockedRoute'

export function upworkGatedRoute(
  pageLoader: () => Promise<{ default: Component }>,
): Component {
  if (import.meta.env.VITE_UPWORK_MODE === 'true') {
    return UpworkBlockedRoute
  }

  return lazy(pageLoader)
}
