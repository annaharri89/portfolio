
import { Router, Route } from '@solidjs/router'
import type { ParentProps } from 'solid-js'
import Layout from '@components/Layout'
import ScrollToTop from '@components/ScrollToTop'
import Home from '@pages/Home'
import StitchTracker from '@pages/StitchTracker'
import StitchCounter from '@pages/StitchCounter'
import HPFPulse from '@pages/HPFPulse'
import Projects from '@pages/Projects'
import About from '@pages/About'
import Solitaire from './pages/Solitaire'
import Skills from '@pages/Skills'
import Contact from '@pages/Contact'
import StitchTrackerEula from '@pages/StitchTrackerEula'
import StitchTrackerPrivacyPolicy from '@pages/StitchTrackerPrivacyPolicy'
import Beta from '@pages/Beta'
import { ROUTES } from '@consts/routes'

function AppShell(props: ParentProps) {
  return (
    <>
      <ScrollToTop />
      <Layout>{props.children}</Layout>
    </>
  )
}

function App() {
  return (
    <Router root={AppShell}>
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.STITCH_COUNTER_V2} component={StitchTracker} />
      <Route path={ROUTES.STITCH_COUNTER} component={StitchCounter} />
      <Route path={ROUTES.HPF_PULSE} component={HPFPulse} />
      <Route path={ROUTES.PROJECTS} component={Projects} />
      <Route path={ROUTES.ABOUT} component={About} />
      <Route path={ROUTES.SKILLS} component={Skills} />
      <Route path={ROUTES.CONTACT} component={Contact} />
      <Route path={ROUTES.STITCH_COUNTER_V2_EULA} component={StitchTrackerEula} />
      <Route path={ROUTES.STITCH_COUNTER_V2_PRIVACY_POLICY} component={StitchTrackerPrivacyPolicy} />
      <Route path={ROUTES.STITCH_COUNTER_V2_BETA} component={Beta} />
      <Route path={ROUTES.SOLITAIRE} component={Solitaire} />
    </Router>
  )
}

export default App
