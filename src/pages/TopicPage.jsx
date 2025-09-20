import { Link, useParams } from 'react-router-dom'
import TopicDetail from '../components/TopicDetail'
import { getTopicById } from '../data/sections/sectionsConfig'

const TopicPage = () => {
    const { sectionId, topicId } = useParams()
    const topic = getTopicById(sectionId, topicId)

    if (!topic) {
        return (
            <div className="text-center py-16">
                <div className="text-6xl mb-6">❌</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Tema no encontrado
                </h2>
                <p className="text-gray-600 mb-8">
                    El tema que buscas no existe.
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
        <TopicDetail
            topic={topic}
            onBack={() => window.history.back()}
            onHome={() => window.location.href = '/'}
            renderAsPage={true}
            sectionId={sectionId}
        />
    )
}

export default TopicPage
