
const TopicCard = ({ topic, onClick = null }) => {
    const cardContent = (
        <>
            {/* Header with Number and Icon */}
            <div className="flex items-center justify-between mb-5">
                <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl border border-blue-500 font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {topic.id}
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="p-2 bg-blue-600 rounded-xl shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight group-hover:text-blue-700 transition-colors duration-300 min-h-[3.5rem]">
                {topic.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-5 line-clamp-3 min-h-[4.5rem]">
                {topic.description}
            </p>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-xl border border-blue-100 group-hover:bg-blue-100 transition-colors duration-300">
                    <div className="p-1.5 bg-blue-600 rounded-lg">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <div>
                        <div className="font-bold text-blue-800 text-sm">
                            {topic.keyScriptures?.length || 0}
                        </div>
                        <div className="text-xs text-blue-600">Escrituras</div>
                    </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-green-50 rounded-xl border border-green-100 group-hover:bg-green-100 transition-colors duration-300">
                    <div className="p-1.5 bg-green-600 rounded-lg">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <div className="font-bold text-green-800 text-sm">
                            {topic.principles?.length || 0}
                        </div>
                        <div className="text-xs text-green-600">Principios</div>
                    </div>
                </div>
            </div>

            {/* New Stats Row */}
            <div className="grid grid-cols-3 gap-2 mb-5">
                <div className="flex items-center gap-1 p-2 bg-amber-50 rounded-lg border border-amber-100">
                    <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                        <div className="font-bold text-amber-800 text-xs">
                            {topic.questionsToAsk?.length || 0}
                        </div>
                        <div className="text-xs text-amber-600">Preguntas</div>
                    </div>
                </div>

                <div className="flex items-center gap-1 p-2 bg-purple-50 rounded-lg border border-purple-100">
                    <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div>
                        <div className="font-bold text-purple-800 text-xs">
                            {topic.activities?.length || 0}
                        </div>
                        <div className="text-xs text-purple-600">Actividades</div>
                    </div>
                </div>

                <div className="flex items-center gap-1 p-2 bg-red-50 rounded-lg border border-red-100">
                    <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <div>
                        <div className="font-bold text-red-800 text-xs">
                            {topic.commitments?.length || 0}
                        </div>
                        <div className="text-xs text-red-600">Compromisos</div>
                    </div>
                </div>
            </div>

            {/* Enhanced Hover indicator */}
            <div className="pt-4 border-t border-blue-100 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Explorar tema completo
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </>
    );

    return (
        <div
            onClick={onClick}
            className="group cursor-pointer bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl shadow-lg transform hover:-translate-y-1"
        >
            {cardContent}
        </div>
    );
};

export default TopicCard;
