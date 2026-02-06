import { Link, useLocation, useParams } from 'react-router-dom'
import { getSectionById, getTopicById } from '../data/sections/sectionsConfig'

const Layout = ({ children }) => {
    const location = useLocation()
    const { sectionId, topicId } = useParams()

    const isHomePage = location.pathname === '/'
    const currentYear = new Date().getFullYear()

    return (
        <div className="min-h-screen bg-[#FFFBF5] text-gray-900 font-sans flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-30 bg-[#FFFBF5]/80 backdrop-blur-md border-b border-black/[0.04]">
                <div className="relative py-4 px-6 md:px-8 max-w-[1400px] mx-auto w-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl overflow-hidden">
                            <img
                                src="/christus-logo.png"
                                alt="Logo Notas de Estudio SUD"
                                className="w-full h-full object-cover"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg md:text-xl font-semibold text-gray-900 tracking-tight leading-tight">
                                Notas de Estudio
                            </span>
                            <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase leading-tight">
                                Misioneros SUD
                            </span>
                        </div>
                    </Link>

                    {/* Breadcrumbs inline in header for non-home pages */}
                    {!isHomePage && (
                        <nav aria-label="Breadcrumb" className="hidden md:flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                            <Link to="/" className="hover:text-gray-900 transition-colors">Inicio</Link>
                            {sectionId && (
                                <>
                                    <span className="text-gray-300">/</span>
                                    <Link
                                        to={`/section/${sectionId}`}
                                        className="hover:text-gray-900 transition-colors truncate max-w-[180px]"
                                    >
                                        {getSectionById(sectionId)?.title?.replace(/^[A-G]\.\s/, '')}
                                    </Link>
                                </>
                            )}
                            {topicId && (
                                <>
                                    <span className="text-gray-300">/</span>
                                    <span className="text-gray-600 truncate max-w-[200px]">
                                        {getTopicById(sectionId, topicId)?.title}
                                    </span>
                                </>
                            )}
                        </nav>
                    )}
                </div>
            </header>

            {/* Mobile breadcrumbs */}
            {!isHomePage && (
                <nav aria-label="Breadcrumb" className="md:hidden max-w-[1400px] mx-auto px-6 mt-3 mb-1 text-xs text-gray-400 font-medium flex items-center gap-1.5">
                    <Link to="/" className="hover:text-gray-900 transition-colors">Inicio</Link>
                    {sectionId && (
                        <>
                            <span className="text-gray-300">/</span>
                            <span className="truncate">{getSectionById(sectionId)?.title?.replace(/^[A-G]\.\s/, '')}</span>
                        </>
                    )}
                </nav>
            )}

            {/* Main Content */}
            <main className="w-full flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="mt-auto border-t border-black/[0.04] bg-[#FFFBF5]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <img
                            src="/christus-logo.png"
                            alt=""
                            className="w-5 h-5 rounded opacity-50"
                            width={20}
                            height={20}
                        />
                        <span>Notas de Estudio — Misioneros SUD</span>
                    </div>
                    <p className="text-xs text-gray-300 text-center md:text-right">
                        © {currentYear} · Material de estudio no oficial · Hecho con ❤️ para los misioneros
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
