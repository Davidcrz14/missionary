import { Link } from 'react-router-dom'
import { sections } from '../data/sections/sectionsConfig'

const HomePage = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="text-center mb-12">
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 shadow-xl mb-8">
                    <div className="absolute top-4 left-4 w-16 h-16 bg-blue-100 rounded-full opacity-20"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-indigo-100 rounded-full opacity-20"></div>

                    <div className="relative">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            "Id por todo el mundo y predicad el evangelio"
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
                            Guía completa de <span className="font-bold text-blue-800">50 temas fundamentales</span> organizados en 5 secciones esenciales
                            para el estudio y la enseñanza del evangelio restaurado de Jesucristo.
                        </p>

                        <div className="text-center">
                            <p className="text-gray-600 mb-6">Selecciona una sección para comenzar tu estudio:</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Secciones principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {sections.map((section) => (
                    <Link
                        key={section.id}
                        to={`/section/${section.id}`}
                        className={`group cursor-pointer bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-${section.color}-200/50 hover:border-${section.color}-400/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl shadow-lg transform hover:-translate-y-1`}
                    >
                        {/* Header de sección */}
                        <div className="text-center mb-6">
                            <div className="text-4xl mb-3">{section.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {section.title}
                            </h3>
                            <p className={`text-${section.color}-600 font-medium text-sm mb-2`}>
                                {section.subtitle}
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {section.description}
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className={`flex items-center gap-2 p-3 bg-${section.color}-50 rounded-xl border border-${section.color}-100`}>
                                <div className="text-lg font-bold text-gray-800">
                                    {section.stats.topics}
                                </div>
                                <div className="text-xs text-gray-600">Temas</div>
                            </div>
                            <div className={`flex items-center gap-2 p-3 bg-${section.color}-50 rounded-xl border border-${section.color}-100`}>
                                <div className="text-lg font-bold text-gray-800">
                                    {section.stats.scriptures}
                                </div>
                                <div className="text-xs text-gray-600">Escrituras</div>
                            </div>
                        </div>

                        {/* Status */}
                        <div className={`text-center p-3 rounded-xl border ${section.topics.length > 0 ? `bg-green-50 border-green-200 text-green-700` : `bg-amber-50 border-amber-200 text-amber-700`}`}>
                            <p className="text-sm font-medium">
                                {section.topics.length > 0 ? '✅ Disponible' : '🚧 En desarrollo'}
                            </p>
                        </div>

                        {/* Hover indicator */}
                        <div className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className={`flex items-center justify-center gap-2 text-${section.color}-600 font-bold text-sm`}>
                                <span>Explorar sección</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default HomePage
