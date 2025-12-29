
import { Link } from 'react-router-dom';

const TopicDetail = ({ topic, onBack, onHome, renderAsPage = false, sectionId }) => {
    if (!topic) return null;

    const NavigationButtons = () => (
        <div className="mb-8 flex items-center gap-4">
             {renderAsPage && sectionId ? (
                <Link to={`/section/${sectionId}`} className="text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-1">
                     ← Volver
                </Link>
             ) : (
                <button onClick={onBack} className="text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-1">
                     ← Volver
                </button>
             )}
        </div>
    )

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <NavigationButtons />

            {/* Header Clean */}
            <div className="mb-12">
                <div className="inline-block px-4 py-1.5 bg-black text-white text-sm font-bold rounded-full mb-6">
                    {topic.id}
                </div>
                <h1 className="text-5xl font-bold text-black mb-6 leading-tight tracking-tight">
                    {topic.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                    {topic.description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Escrituras - Card Pastel Verde */}
                <section className="bg-[#C8E6C9] rounded-[2rem] p-8 md:col-span-2">
                    <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                        📖 Escrituras Clave
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {topic.keyScriptures?.map((scripture, index) => (
                            <div key={index} className="bg-white/60 p-6 rounded-3xl backdrop-blur-sm">
                                <h3 className="font-bold text-green-900 text-lg mb-2">
                                    {scripture.reference}
                                </h3>
                                <p className="text-green-900/80 italic mb-2">
                                    "{scripture.text}"
                                </p>
                                {scripture.context && (
                                    <p className="text-sm text-green-800/60 mt-2">
                                        Contexto: {scripture.context}
                                    </p>
                                )}
                            </div>
                         ))}
                    </div>
                </section>

                {/* Principios - Card Pastel Azul */}
                <section className="bg-[#B2EBF2] rounded-[2rem] p-8">
                    <h2 className="text-2xl font-bold text-cyan-900 mb-6">
                        ⚡ Principios
                    </h2>
                    <ul className="space-y-4">
                        {topic.principles?.map((principle, index) => (
                            <li key={index} className="flex items-start gap-3 text-cyan-900 font-medium text-lg">
                                <span className="mt-1.5 w-2 h-2 rounded-full bg-cyan-900 flex-shrink-0"></span>
                                {principle}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Preguntas - Card Pastel Ambar */}
                {topic.questionsToAsk && (
                    <section className="bg-[#FFF59D] rounded-[2rem] p-8">
                        <h2 className="text-2xl font-bold text-amber-900 mb-6">
                            ❓ Preguntas
                        </h2>
                        <ul className="space-y-4">
                            {topic.questionsToAsk.map((q, i) => (
                                <li key={i} className="text-amber-900 font-medium text-lg leading-snug">
                                    {q}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                 {/* Actividades - Card Pastel Lila */}
                 {topic.activities && (
                    <section className="bg-[#E1BEE7] rounded-[2rem] p-8">
                        <h2 className="text-2xl font-bold text-purple-900 mb-6">
                            🎯 Actividades
                        </h2>
                        <ul className="space-y-4">
                            {topic.activities.map((act, i) => (
                                <li key={i} className="text-purple-900 font-medium">
                                    {act}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Compromisos - Card Pastel Rojo/Salmon */}
                {topic.commitments && (
                    <section className="bg-[#FFCCBC] rounded-[2rem] p-8 md:col-span-2">
                        <h2 className="text-2xl font-bold text-red-900 mb-6">
                            🤝 Compromisos
                        </h2>
                         <div className="flex flex-wrap gap-3">
                            {topic.commitments.map((com, i) => (
                                <span key={i} className="px-4 py-2 bg-white/40 text-red-900 rounded-full font-bold">
                                    {com}
                                </span>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Tips / Consejos - Card Gris Claro o Especial */}
            {topic.teachingTips && (
                <section className="mt-8 bg-black text-white rounded-[2rem] p-8 md:p-12">
                     <h2 className="text-3xl font-bold mb-8">Consejos para enseñar</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {topic.teachingTips.map((tip, i) => (
                            <div key={i} className="flex gap-4">
                                <span className="text-2xl">💡</span>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    {tip}
                                </p>
                            </div>
                        ))}
                     </div>
                </section>
            )}
        </div>
    );
};

export default TopicDetail;
