import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import StitchTracker from './pages/StitchTracker'
import CollabCheckLists from './pages/CollabCheckLists'
import Archive from './pages/Archive'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stitch-counter-v2" element={<StitchTracker />} />
          <Route path="/collab-check-lists" element={<CollabCheckLists />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
