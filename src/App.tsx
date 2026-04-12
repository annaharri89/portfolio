import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import CanonicalLink from './components/CanonicalLink'
import Home from './pages/Home'
import StitchTracker from './pages/StitchTracker'
import StitchCounter from './pages/StitchCounter'
import HPFPulse from './pages/HPFPulse'
import Solitaire from './pages/Solitaire'
import Projects from './pages/Projects'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import StitchTrackerEula from './pages/StitchTrackerEula'
import StitchTrackerPrivacyPolicy from './pages/StitchTrackerPrivacyPolicy'
import Beta from './pages/Beta'
import { ROUTES } from './constants/routes'

function App() {
  return (
    <Router>
      <CanonicalLink />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.STITCH_COUNTER_V2} element={<StitchTracker />} />
          <Route path={ROUTES.STITCH_COUNTER} element={<StitchCounter />} />
          <Route path={ROUTES.HPF_PULSE} element={<HPFPulse />} />
          <Route path={ROUTES.SOLITAIRE} element={<Solitaire />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.SKILLS} element={<Skills />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.STITCH_COUNTER_V2_EULA} element={<StitchTrackerEula />} />
          <Route path={ROUTES.STITCH_COUNTER_V2_PRIVACY_POLICY} element={<StitchTrackerPrivacyPolicy />} />
          <Route path={ROUTES.STITCH_COUNTER_V2_BETA} element={<Beta />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
