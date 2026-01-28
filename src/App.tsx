import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import StitchTracker from './pages/StitchTracker'
import StitchCounter from './pages/StitchCounter'
import HPFPulse from './pages/HPFPulse'
import CollabCheckLists from './pages/CollabCheckLists'
import Projects from './pages/Projects'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import { ROUTES } from './constants/routes'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.STITCH_COUNTER_V2} element={<StitchTracker />} />
          <Route path={ROUTES.STITCH_COUNTER} element={<StitchCounter />} />
          <Route path={ROUTES.HPF_PULSE} element={<HPFPulse />} />
          <Route path={ROUTES.COLLAB_CHECK_LISTS} element={<CollabCheckLists />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.SKILLS} element={<Skills />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
