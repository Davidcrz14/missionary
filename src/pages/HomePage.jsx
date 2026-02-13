import { Link } from 'react-router-dom'
import SectionIcon from '../components/SectionIcon'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { sections } from '../data/sections/sectionsConfig'

const PASTEL_COLORS = [
    'bg-[#B2EBF2]', // Celeste
    'bg-[#C8E6C9]', // Verde Menta
    'bg-[#FFCCBC]', // Salmón
    'bg-[#B2DFDB]', // Aqua
    'bg-[#E1BEE7]', // Lila
    'bg-[#FFAB91]', // Coral
    'bg-[#FFF59D]', // Amarillo
    'bg-[#F8BBD0]', // Rosa
]

// Editorial asymmetric spans for visual rhythm
const GRID_SPANS = [
    'md:col-span-2 md:row-span-1',  // Wide
    'md:col-span-1 md:row-span-1',  // Normal
    'md:col-span-1 md:row-span-1',  // Normal
    'md:col-span-1 md:row-span-1',  // Normal
    'md:col-span-1 md:row-span-1',  // Normal
    'md:col-span-2 md:row-span-1',  // Wide
]

const HomePage = () => {
    useDocumentTitle(null) // Uses base title

    return (
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 pb-24">

            {/* Hero — editorial, typographic */}
            <div className="text-center mt-16 mb-20 relative">
                <p className="text-[#9E9E9E] text-[11px] uppercase tracking-[0.25em] font-medium mb-4">
                    Guía de estudio para misioneros
                </p>
                <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-[1.1] max-w-3xl mx-auto">
                    Temas Fundamentales
                    <span className="block text-gray-300 mt-1">del Evangelio</span>
                </h1>
                <p className="mt-6 text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                    Doctrina, escrituras, restauración, mandamientos e historia — todo lo esencial para la misión.
                </p>

                {/* Stats strip */}
                <div className="flex justify-center items-center gap-8 mt-10 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    <span>{sections.length} secciones</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>200+ escrituras</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>Estudio profundo</span>
                </div>
            </div>

            {/* Asymmetric editorial grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {sections.map((section, index) => {
                    const colorClass = PASTEL_COLORS[index % PASTEL_COLORS.length]
                    const spanClass = GRID_SPANS[index % GRID_SPANS.length]

                    return (
                        <Link
                            key={section.id}
                            to={section.customLink || `/section/${section.id}`}
                            className={`
                                group relative w-full
                                ${colorClass} ${spanClass}
                                rounded-[2rem] p-7 md:p-8
                                flex flex-col justify-between
                                min-h-[220px]
                                opacity-0 animate-fade-in-up stagger-${index + 1}
                                hover:scale-[1.015] active:scale-[0.98]
                                transition-transform duration-300 ease-out
                                will-change-transform
                            `}
                        >
                            {/* Icon + topic count */}
                            <div className="flex justify-between items-start">
                                <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                    <SectionIcon
                                        iconName={section.icon}
                                        className="text-3xl text-black/60"
                                    />
                                </div>
                                <span className="text-[11px] font-semibold text-black/30 uppercase tracking-wider">
                                    {section.stats?.topics || '—'} temas
                                </span>
                            </div>

                            {/* Title + arrow */}
                            <div className="mt-auto flex items-end justify-between gap-4">
                                <h2 className="text-xl md:text-2xl font-bold text-black/85 leading-tight">
                                    {section.title.replace(/^[A-G]\.\s/, '')}
                                </h2>
                                <span className="text-black/20 group-hover:text-black/60 transition-colors text-lg flex-shrink-0 translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                                    →
                                </span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage
