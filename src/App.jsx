import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import HistoryPage from './pages/HistoryPage'
import HomePage from './pages/HomePage'
import SectionPage from './pages/SectionPage'
import TopicPage from './pages/TopicPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/section/:sectionId" element={<SectionPage />} />
          <Route path="/section/:sectionId/topic/:topicId" element={<TopicPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

