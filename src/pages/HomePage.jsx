import { Link } from 'react-router-dom'
import SectionIcon from '../components/SectionIcon'
import { sections } from '../data/sections/sectionsConfig'

// Definición de colores *exactos* o lo más cercanos posible a la imagen de referencia (Pasteles Planos)
const PASTEL_COLORS = [
    'bg-[#B2EBF2]', // Celeste (Principios)
    'bg-[#C8E6C9]', // Verde Menta (Escrituras)
    'bg-[#FFCCBC]', // Salmón (Restauración)
    'bg-[#B2DFDB]', // Aqua (Mandamientos)
    'bg-[#E1BEE7]', // Lila (Habilidades)
    'bg-[#FFAB91]', // Coral intenso (Artículos)
    'bg-[#FFF59D]', // Amarillo (Extra 1)
    'bg-[#F8BBD0]', // Rosa (Extra 2)
]

const HomePage = () => {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-8 pb-20">

            {/* Hero Text */}
            <div className="text-center mt-12 mb-16 relative">
                 {/* Decorative 'Starburst' textur (Simulated simple SVG positioned absolute if needed, or keeping clean for now as requested 'clone') */}
                <h1 className="text-4xl md:text-5xl font-medium text-black mb-3 tracking-tight">
                    Temas Fundamentales del Evangelio
                </h1>
                <div className="flex justify-center items-center gap-2">
                    <p className="text-[#9E9E9E] text-sm uppercase tracking-widest font-medium">
                        GUÍA DE ESTUDIO PARA MISIONEROS
                    </p>
                </div>
            </div>

            {/* Main Grid - 4 Columns, Flat Cards, Rounded Corners */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sections.map((section, index) => {
                    // Cycle through pastel colors
                    const colorClass = PASTEL_COLORS[index % PASTEL_COLORS.length]

                    return (
                        <Link
                            key={section.id}
                            to={`/section/${section.id}`}
                            className={`
                                group relative w-full aspect-square
                                ${colorClass}
                                rounded-[2.5rem] p-8
                                flex flex-col justify-between
                                transition-transform duration-300 hover:scale-[1.02]
                            `}
                        >
                            {/* Icon Top-Left */}
                            <div className="flex justify-start">
                                {/* Using thin/light styling for icons to match reference linear icons */}
                                <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                                    <SectionIcon
                                        iconName={section.icon}
                                        className="text-4xl text-black/70 stroke-1"
                                    />
                                </div>
                            </div>

                            {/* Title Bottom-Left */}
                            <div className="mt-auto">
                                <h2 className="text-2xl font-bold text-black/90 leading-tight">
                                    {section.title.replace(/^[A-F]\.\s/, '')}
                                </h2>
                                {/* Removed Subtitle/Stats to match the clean look of the reference cards which only have Text */}
                            </div>
                        </Link>
                    )
                })}
            </div>

             {/* Background Decoration Elements (Starbursts) - Absolute positioned to Body/Container normally, placing here for containment */}
             <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
                {/* Left Starburst */}
                <svg className="absolute top-20 -left-20 w-96 h-96 text-black/5 opacity-20" viewBox="0 0 200 200">
                    <g transform="translate(100,100)">
                        {[...Array(24)].map((_, i) => (
                             <line key={i} x1="0" y1="0" x2="100" y2="0" transform={`rotate(${i * 15})`} stroke="currentColor" strokeWidth="0.5" />
                        ))}
                    </g>
                </svg>
                 {/* Right Starburst */}
                 <svg className="absolute top-20 -right-20 w-96 h-96 text-black/5 opacity-20" viewBox="0 0 200 200">
                    <g transform="translate(100,100)">
                        {[...Array(24)].map((_, i) => (
                             <line key={i} x1="0" y1="0" x2="100" y2="0" transform={`rotate(${i * 15})`} stroke="currentColor" strokeWidth="0.5" />
                        ))}
                    </g>
                </svg>
             </div>
        </div>
    )
}

export default HomePage
