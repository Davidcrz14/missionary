import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SectionPage from './pages/SectionPage'
import TopicPage from './pages/TopicPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/section/:sectionId" element={<SectionPage />} />
          <Route path="/section/:sectionId/topic/:topicId" element={<TopicPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
