import { Link, useParams } from 'react-router-dom'
import SectionIcon from '../components/SectionIcon'
import TopicCard from '../components/TopicCard'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { getSectionById } from '../data/sections/sectionsConfig'

// Mapeo de colores pastel para coincidir con HomePage
const SECTION_PASTEL_COLORS = {
    blue: 'bg-[#B2EBF2]',
    emerald: 'bg-[#C8E6C9]',
    purple: 'bg-[#E1BEE7]',
    amber: 'bg-[#FFF59D]',
    red: 'bg-[#FFCCBC]',
    indigo: 'bg-[#B2DFDB]',
}

const TEXT_COLORS = {
    blue: 'text-cyan-900',
    emerald: 'text-emerald-900',
    purple: 'text-purple-900',
    amber: 'text-amber-900',
    red: 'text-red-900',
    indigo: 'text-teal-900'
}

const SectionPage = () => {
    const { sectionId } = useParams()
    const section = getSectionById(sectionId)
    useDocumentTitle(section?.title?.replace(/^[A-G]\.\s/, '') || 'Sección')

    if (!section) {
        return (
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 py-20 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Sección no encontrada</h2>
                <Link to="/" className="text-black underline">Volver al inicio</Link>
            </div>
        )
    }

    const pastelBg = SECTION_PASTEL_COLORS[section.color] || 'bg-gray-100'
    const textColor = TEXT_COLORS[section.color] || 'text-gray-900'

    return (
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 pb-20">
            {/* Section Header */}
            <div className={`mt-6 mb-10 rounded-[2rem] p-8 md:p-12 ${pastelBg} flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8`}>
                <div className="opacity-30">
                    <SectionIcon iconName={section.icon} className="text-6xl md:text-7xl text-black" />
                </div>
                <div>
                    <h1 className={`text-3xl md:text-5xl font-bold ${textColor} mb-2 tracking-tight`}>
                        {section.title.replace(/^[A-G]\.\s/, '')}
                    </h1>
                    <p className={`text-base md:text-lg ${textColor} opacity-70 max-w-2xl`}>
                        {section.description}
                    </p>
                    <div className={`flex items-center gap-4 mt-4 text-xs font-medium ${textColor} opacity-50`}>
                        <span>{section.topics.length} temas</span>
                        <span className="w-1 h-1 rounded-full bg-current" />
                        <span>{section.stats?.scriptures} escrituras</span>
                    </div>
                </div>
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {section.topics.map((topic, index) => (
                    <Link
                        key={topic.id}
                        to={`/section/${sectionId}/topic/${topic.id}`}
                        className={`opacity-0 animate-fade-in-up stagger-${Math.min(index + 1, 7)}`}
                    >
                        <TopicCard
                            topic={topic}
                            color={section.color}
                            index={index}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SectionPage
