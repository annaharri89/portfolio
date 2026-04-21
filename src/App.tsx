import { Router, Route } from '@solidjs/router'
import { For, type ParentProps } from 'solid-js'
import Layout from '@components/Layout'
import SeoHead from '@components/SeoHead'
import ScrollToTop from '@components/ScrollToTop'
import { routeDefinitions } from '@consts/routes'
import { ROUTE_PAGES } from '@consts/routePages'

function AppShell(props: ParentProps) {
  return (
    <>
      <SeoHead />
      <ScrollToTop />
      <Layout>{props.children}</Layout>
    </>
  )
}

export default function App() {
  return (
    <Router root={AppShell}>
      <For each={routeDefinitions}>
        {(route) => (
          <Route path={route.path} component={ROUTE_PAGES[route.id]} />
        )}
      </For>
    </Router>
  )
}
