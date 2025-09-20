import { Link, useLocation, useParams } from 'react-router-dom'
import { getSectionById, getTopicById } from '../data/sections/sectionsConfig'

const Layout = ({ children }) => {
    const location = useLocation()
    const { sectionId, topicId } = useParams()

    const isHomePage = location.pathname === '/'
    const currentSection = sectionId ? getSectionById(sectionId) : null
    const currentTopic = topicId && sectionId ? getTopicById(sectionId, topicId) : null

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Header */}
            <header className="relative bg-white/95 backdrop-blur-sm border-b border-blue-200/50 sticky top-0 z-20 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5"></div>

                <div className="relative max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo y título */}
                        <Link
                            to="/"
                            className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
                        >
                            <div className="p-3 bg-blue-600 rounded-2xl shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                                    Temas Fundamentales SUD
                                </h1>
                                <p className="text-gray-600 text-sm">
                                    Material de estudio para misioneros
                                </p>
                            </div>
                        </Link>

                        {/* Navigation breadcrumb */}
                        {!isHomePage && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Link
                                    to="/"
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    Inicio
                                </Link>
                                {currentSection && (
                                    <>
                                        <span>•</span>
                                        <Link
                                            to={`/section/${sectionId}`}
                                            className="hover:text-blue-600 transition-colors text-blue-600 font-medium"
                                        >
                                            {currentSection.title}
                                        </Link>
                                    </>
                                )}
                                {currentTopic && (
                                    <>
                                        <span>•</span>
                                        <span className="text-gray-800 font-medium">
                                            {currentTopic.title}
                                        </span>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-8">
                {children}
            </main>
        </div>
    )
}

export default Layout
