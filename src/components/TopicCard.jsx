
const TopicCard = ({ topic, color = 'blue', index = 0 }) => {
    // Definir colores de fondo para las tarjetas (mas suaves que los headers)
    const CARD_COLORS = {
        blue: 'bg-[#E0F7FA]',
        emerald: 'bg-[#E8F5E9]',
        purple: 'bg-[#F3E5F5]',
        amber: 'bg-[#FFFDE7]',
        red: 'bg-[#FFEBEE]',
        indigo: 'bg-[#E0F2F1]',
    }

    const cardBg = CARD_COLORS[color] || 'bg-white'

    return (
        <div className={`
            group relative w-full aspect-[4/3]
            ${cardBg}
            rounded-[2rem] p-8
            flex flex-col justify-between
            transition-all duration-300 hover:scale-[1.02]
        `}>
            {/* Header: ID pill */}
            <div className="flex justify-between items-start">
                <span className="px-4 py-1 bg-white/50 rounded-full text-sm font-bold text-gray-700 backdrop-blur-sm">
                    {topic.id}
                </span>

                {/* Arrow Icon on Hover */}
                 <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>

            {/* Conteido */}
            <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                    {topic.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                    {topic.description}
                </p>
            </div>

            {/* Footer Stats (Simple dots or icons) */}
             <div className="flex items-center gap-4 mt-6 pt-4 border-t border-black/5">
                <div className="flex items-center gap-1 text-xs font-semibold text-gray-500">
                    <span>📖</span>
                    <span>{topic.keyScriptures?.length || 0}</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-gray-500">
                    <span>⚡</span>
                    <span>{topic.principles?.length || 0}</span>
                </div>
            </div>
        </div>
    );
};

export default TopicCard;
