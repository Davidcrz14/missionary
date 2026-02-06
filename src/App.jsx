import { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

// Lazy-loaded pages — reduces initial bundle significantly
const HomePage = lazy(() => import('./pages/HomePage'))
const HistoryPage = lazy(() => import('./pages/HistoryPage'))
const SectionPage = lazy(() => import('./pages/SectionPage'))
const TopicPage = lazy(() => import('./pages/TopicPage'))

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-gray-200 border-t-gray-800 rounded-full animate-spin" />
      <span className="text-sm text-gray-400 font-medium">Cargando...</span>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/section/:sectionId" element={<SectionPage />} />
            <Route path="/section/:sectionId/topic/:topicId" element={<TopicPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App

