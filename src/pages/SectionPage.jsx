import { Link, useParams } from 'react-router-dom'
import TopicCard from '../components/TopicCard'
import { getSectionById } from '../data/sections/sectionsConfig'

const SectionPage = () => {
    const { sectionId } = useParams()
    const section = getSectionById(sectionId)

    if (!section) {
        return (
            <div className="text-center py-16">
                <div className="text-6xl mb-6">❌</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Sección no encontrada
                </h2>
                <p className="text-gray-600 mb-8">
                    La sección que buscas no existe.
                </p>
                <Link
                    to="/"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-300"
                >
                    Volver al inicio
                </Link>
            </div>
        )
    }

    if (section.topics.length === 0) {
        return (
            <div className="text-center py-16">
                <div className="text-6xl mb-6">🚧</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {section.title}
                </h2>
                <p className="text-gray-600 mb-8">
                    Esta sección está en desarrollo. ¡Pronto estará disponible!
                </p>
                <Link
                    to="/"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-300"
                >
                    Volver al inicio
                </Link>
            </div>
        )
    }

    return (
        <>
            {/* Header de sección */}
            <div className="mb-8">
                <div className={`bg-gradient-to-r from-${section.color}-600 to-${section.color}-700 rounded-2xl p-8 text-white shadow-xl`}>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="text-6xl">{section.icon}</div>
                        <div>
                            <h1 className="text-3xl font-bold">{section.title}</h1>
                            <p className="text-xl opacity-90">{section.subtitle}</p>
                            <p className="opacity-80">{section.description}</p>
                        </div>
                    </div>

                    {/* Stats de la sección */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold">{section.stats.topics}</div>
                            <div className="text-sm opacity-80">Temas</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold">{section.stats.scriptures}</div>
                            <div className="text-sm opacity-80">Escrituras</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold">{section.stats.activities}</div>
                            <div className="text-sm opacity-80">Actividades</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold">{section.stats.questions}</div>
                            <div className="text-sm opacity-80">Preguntas</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {section.topics.map((topic) => (
                    <Link
                        key={topic.id}
                        to={`/section/${sectionId}/topic/${topic.id}`}
                    >
                        <TopicCard topic={topic} />
                    </Link>
                ))}
            </div>
        </>
    )
}

export default SectionPage
