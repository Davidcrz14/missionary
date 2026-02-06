import { Link, useParams } from 'react-router-dom'
import ArticleDetail from '../components/ArticleDetail'
import TopicDetail from '../components/TopicDetail'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { getTopicById } from '../data/sections/sectionsConfig'

const TopicPage = () => {
    const { sectionId, topicId } = useParams()
    const topic = getTopicById(sectionId, topicId)
    useDocumentTitle(topic?.title || 'Tema')

    if (!topic) {
        return (
            <div className="w-full max-w-[1400px] mx-auto px-8 py-20 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tema no encontrado</h2>
                <Link to="/" className="text-black underline">Volver al inicio</Link>
            </div>
        )
    }

    // Determinar si es un artículo o un tema regular
    const isArticle = sectionId === 'articles' || topic.content?.sections

    return (
        <>
            {isArticle ? (
                <ArticleDetail article={topic} />
            ) : (
                <TopicDetail
                    topic={topic}
                    onBack={() => window.history.back()}
                    onHome={() => window.location.href = '/'}
                    renderAsPage={true}
                    sectionId={sectionId}
                />
            )}
        </>
    )
}

export default TopicPage
