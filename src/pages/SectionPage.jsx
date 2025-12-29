import { Link, useParams } from 'react-router-dom'
import SectionIcon from '../components/SectionIcon'
import TopicCard from '../components/TopicCard'
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

    if (!section) {
        return (
            <div className="w-full max-w-[1400px] mx-auto px-8 py-20 text-center">
                 <h2 className="text-3xl font-bold text-gray-900 mb-4">Sección no encontrada</h2>
                 <Link to="/" className="text-black underline">Volver al inicio</Link>
            </div>
        )
    }

    const pastelBg = SECTION_PASTEL_COLORS[section.color] || 'bg-gray-100'
    const textColor = TEXT_COLORS[section.color] || 'text-gray-900'

    return (
        <div className="w-full max-w-[1400px] mx-auto px-8 pb-20">
            {/* Minimal Header */}
            <div className={`mt-8 mb-12 rounded-[2.5rem] p-12 ${pastelBg} flex flex-col md:flex-row items-start md:items-center gap-8`}>
                <div className="text-6xl text-gray-800 opacity-80">
                    {/* Render icon if it was a component, currently it is a string name for SectionIcon */}
                    {/* We can use SectionIcon here if imported, for now just hiding or simplifing */}
                    <div className="opacity-40">
                         <SectionIcon iconName={section.icon} className="text-8xl text-black" />
                    </div>
                </div>
                <div>
                    <h1 className={`text-4xl md:text-5xl font-bold ${textColor} mb-3`}>
                        {section.title}
                    </h1>
                    <p className={`text-xl ${textColor} opacity-80 max-w-2xl`}>
                        {section.subtitle}
                    </p>
                </div>
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {section.topics.map((topic, index) => (
                    <Link
                        key={topic.id}
                        to={`/section/${sectionId}/topic/${topic.id}`}
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
