
const TopicCard = ({ topic, color = 'blue', index = 0 }) => {
    const CARD_COLORS = {
        blue: 'bg-[#E0F7FA]',
        emerald: 'bg-[#E8F5E9]',
        purple: 'bg-[#F3E5F5]',
        amber: 'bg-[#FFFDE7]',
        red: 'bg-[#FFEBEE]',
        indigo: 'bg-[#E0F2F1]',
        teal: 'bg-[#E0F2F1]',
    }

    const cardBg = CARD_COLORS[color] || 'bg-white'

    return (
        <div className={`
            group relative w-full aspect-[4/3]
            ${cardBg}
            rounded-[2rem] p-7 md:p-8
            flex flex-col justify-between
            hover:scale-[1.015] active:scale-[0.98]
            transition-transform duration-300 ease-out
            will-change-transform
        `}>
            {/* Header: ID pill + arrow */}
            <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-white/60 rounded-full text-xs font-bold text-gray-600">
                    {topic.id}
                </span>
                <span className="text-gray-300 group-hover:text-gray-600 transition-colors translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                    →
                </span>
            </div>

            {/* Content */}
            <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                    {topic.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                    {topic.description}
                </p>
            </div>

            {/* Footer Stats */}
            <div className="flex items-center gap-4 mt-5 pt-3 border-t border-black/[0.06]">
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                    <span className="text-sm">📖</span>
                    <span>{topic.keyScriptures?.length || 0} escrituras</span>
                </div>
                {topic.readTime ? (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                        <span className="text-sm">⏱️</span>
                        <span>{topic.readTime}</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                        <span className="text-sm">⚡</span>
                        <span>{topic.principles?.length || 0} principios</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopicCard;
