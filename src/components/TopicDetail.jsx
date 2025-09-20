
import { Link } from 'react-router-dom';

const TopicDetail = ({ topic, onBack, onHome, renderAsPage = false, sectionId }) => {
    if (!topic) return null;

    const NavigationButtons = () => {
        if (renderAsPage && sectionId) {
            return (
                <div className="mb-6 flex items-center gap-4">
                    <Link
                        to={`/section/${sectionId}`}
                        className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-medium">Volver a los temas</span>
                    </Link>

                    <Link
                        to="/"
                        className="flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl border border-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="font-medium">Inicio</span>
                    </Link>
                </div>
            )
        } else {
            return (
                <div className="mb-6 flex items-center gap-4">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-medium">Volver a los temas</span>
                    </button>

                    <button
                        onClick={onHome}
                        className="flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl border border-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="font-medium">Inicio</span>
                    </button>
                </div>
            )
        }
    }

    return (
        <div className="max-w-5xl mx-auto">
            {/* Navigation Buttons */}
            <NavigationButtons />            {/* Header with Hero Image */}
            <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl p-8 mb-8 border border-blue-300 shadow-2xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                        <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Header Content */}
                <div className="relative flex items-start gap-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm text-white rounded-2xl border border-white/30 font-bold text-2xl flex-shrink-0 shadow-lg">
                        {topic.id}
                    </div>
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
                            {topic.title}
                        </h1>
                        <p className="text-blue-100 text-lg leading-relaxed max-w-3xl">
                            {topic.description}
                        </p>
                    </div>
                    {/* Decorative Icon */}
                    <div className="hidden lg:block opacity-20">
                        <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Escrituras Clave - Ocupa 2 columnas */}
                <section className="xl:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-blue-600 rounded-xl shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">Escrituras Clave</h2>
                            <p className="text-gray-600 text-sm">Fundamentos doctrinales</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        {topic.keyScriptures?.map((scripture, index) => (
                            <div key={index} className="group bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-200/50 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-lg font-bold text-sm flex-shrink-0 shadow-md">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-blue-800 mb-3 text-base">
                                            {scripture.reference}
                                        </h3>
                                        <blockquote className="text-gray-700 italic leading-relaxed mb-3 border-l-4 border-blue-300 pl-4">
                                            "{scripture.text}"
                                        </blockquote>
                                        {scripture.context && (
                                            <div className="bg-white/70 rounded-lg p-3 border border-blue-100">
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    <span className="font-medium text-blue-700">Contexto:</span> {scripture.context}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sidebar con Principios */}
                <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-green-600 rounded-xl shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">Principios</h2>
                            <p className="text-gray-600 text-sm">Verdades eternas</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {topic.principles?.map((principle, index) => (
                            <div key={index} className="group flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl border border-green-200/50 hover:border-green-300 transition-all duration-300 hover:shadow-md">
                                <div className="flex items-center justify-center w-7 h-7 bg-green-600 text-white rounded-lg text-xs font-bold flex-shrink-0 shadow-sm">
                                    {index + 1}
                                </div>
                                <p className="text-gray-700 leading-relaxed text-sm font-medium">
                                    {principle}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Nueva sección: Preguntas, Actividades y Compromisos */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                {/* Preguntas para Investigadores */}
                {topic.questionsToAsk && (
                    <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-amber-600 rounded-xl shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-800">Preguntas</h2>
                                <p className="text-gray-600 text-xs">Para investigadores</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            {topic.questionsToAsk.map((question, index) => (
                                <div key={index} className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-4 border border-amber-200/50 hover:border-amber-300 transition-all duration-300">
                                    <p className="text-gray-700 leading-relaxed text-sm font-medium">
                                        {question}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Actividades de Enseñanza */}
                {topic.activities && (
                    <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-purple-600 rounded-xl shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-800">Actividades</h2>
                                <p className="text-gray-600 text-xs">Métodos de enseñanza</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            {topic.activities.map((activity, index) => (
                                <div key={index} className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200/50 hover:border-purple-300 transition-all duration-300">
                                    <div className="flex items-start gap-3">
                                        <div className="flex items-center justify-center w-6 h-6 bg-purple-600 text-white rounded-lg text-xs font-bold flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-700 leading-relaxed text-sm font-medium">
                                            {activity}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Compromisos */}
                {topic.commitments && (
                    <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-red-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-red-600 rounded-xl shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-800">Compromisos</h2>
                                <p className="text-gray-600 text-xs">Invitaciones a actuar</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            {topic.commitments.map((commitment, index) => (
                                <div key={index} className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-4 border border-red-200/50 hover:border-red-300 transition-all duration-300">
                                    <p className="text-gray-700 leading-relaxed text-sm font-medium">
                                        {commitment}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Consejos para la Enseñanza - Rediseñado */}
            <section className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-indigo-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-indigo-600 rounded-2xl shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Consejos para la Enseñanza</h2>
                        <p className="text-gray-600">Métodos inspirados para compartir el evangelio</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {topic.teachingTips?.map((tip, index) => (
                        <div key={index} className="group bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-xl p-6 border border-indigo-200/50 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                            <div className="flex items-start gap-4">
                                <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 text-white rounded-xl text-lg flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                    💡
                                </div>
                                <p className="text-gray-700 leading-relaxed font-medium">
                                    {tip}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action - Rediseñado como centro espiritual */}
            <div className="mt-8 relative">
                {/* Imagen de fondo con overlay */}
                <div className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 rounded-2xl p-8 overflow-hidden shadow-2xl">
                    {/* Pattern decorativo */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 60 60" fill="none">
                            <defs>
                                <pattern id="temple-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="10" cy="10" r="2" fill="white" opacity="0.3" />
                                    <path d="M5 10 L15 10 M10 5 L10 15" stroke="white" strokeWidth="0.5" opacity="0.2" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#temple-pattern)" />
                        </svg>
                    </div>

                    {/* Contenido */}
                    <div className="relative text-center">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 mb-4 shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                Comparte este mensaje con poder espiritual
                            </h3>
                            <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto">
                                "Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación
                                a todo aquel que cree" - Romanos 1:16
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="group px-6 py-3 bg-white hover:bg-blue-50 text-blue-900 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    Estudiar más escrituras
                                </div>
                            </button>
                            <button className="group px-6 py-3 bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm hover:scale-105">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Preparar lección
                                </div>
                            </button>
                            <button className="group px-6 py-3 bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm hover:scale-105">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
                                    </svg>
                                    Orar por guía
                                </div>
                            </button>
                        </div>

                        {/* Versículo inspirador */}
                        <div className="mt-8 pt-6 border-t border-white/20">
                            <p className="text-white/90 italic text-sm max-w-xl mx-auto">
                                "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios,
                                el cual da a todos abundantemente y sin reproche, y le será dada."
                            </p>
                            <p className="text-white/70 text-xs mt-2">— Santiago 1:5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicDetail;
