import { Link, useLocation, useParams } from 'react-router-dom'

import { getSectionById, getTopicById } from '../data/sections/sectionsConfig'

const Layout = ({ children }) => {
    const location = useLocation()
    const { sectionId, topicId } = useParams()

    const isHomePage = location.pathname === '/'

    return (
        <div className="min-h-screen bg-[#FFFBF5] text-gray-900 font-sans">
            {/* Header Minimalista - Clean Logo & Title only */}
            <header className="relative py-6 px-8 max-w-[1400px] mx-auto w-full z-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                     {/* Logo Christus generado anteriormente */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden shadow-sm">
                        <img
                            src="/christus-logo.png"
                            alt="Logo SUD"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight">
                            Notas de Estudio
                        </span>
                        <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                            Misioneros SUD
                        </span>
                    </div>
                </Link>

                {/* Right side - Optional: Simple Profile/Search or Empty for absolute minimalism */}
                {/* For now, keeping it empty or just legal links if needed, but user asked to remove "source y todo lo de el header" */}
                {/* We'll leave it clean but maybe keep the breadcrumbs logic distinct if needed, but the user said "solo pon el title... y el logo" */}
            </header>

            {/* Breadcrumbs condicionles (se mantienen sutiles si no es Home) */}
            {!isHomePage && (
                <div className="max-w-[1400px] mx-auto px-8 mt-2 mb-4 text-xs text-gray-400 font-medium">
                    <Link to="/" className="hover:text-gray-900 transition-colors">Inicio</Link>
                    {sectionId && <span> <span className="mx-1">/</span> {getSectionById(sectionId)?.title}</span>}
                    {topicId && <span> <span className="mx-1">/</span> {getTopicById(sectionId, topicId)?.title}</span>}
                </div>
            )}

            {/* Main Content */}
            <main className="w-full">
                {children}
            </main>
        </div>
    )
}

export default Layout
