
const ArticleDetail = ({ article }) => {
    if (!article) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-600 text-lg">Artículo no encontrado</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header del artículo - Minimal Flat */}
            <div className="bg-[#FFF8E1] rounded-[2.5rem] p-10 mb-10">
                <div className="mb-6">
                    {/* Meta información */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 font-medium tracking-wide">
                        {article.category && (
                            <span className="px-3 py-1 bg-black/5 rounded-full">
                                {article.category}
                            </span>
                        )}
                        <span className="flex items-center gap-2">
                            {new Date(article.date).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                        {article.readTime && (
                           <span>• {article.readTime}</span>
                        )}
                    </div>

                    {/* Título */}
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight tracking-tight">
                        {article.title}
                    </h1>

                    {/* Subtítulo */}
                    {article.subtitle && (
                        <p className="text-xl text-gray-600 font-medium italic border-l-4 border-black/10 pl-4 py-1">
                            {article.subtitle}
                        </p>
                    )}
                </div>

                {/* Tags */}
                {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4">
                        {article.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-widest"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Contenido principal */}
            <div className="bg-white rounded-[2rem] p-8 md:p-12 mb-10 space-y-8">
                {/* Introducción */}
                {article.content?.introduction && (
                    <div className="text-xl text-gray-800 leading-relaxed font-serif">
                        <div dangerouslySetInnerHTML={{
                            __html: article.content.introduction
                                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong> ')
                                .replace(/\n\n/g, '<br/><br/>')
                                .replace(/\n/g, ' ')
                        }} />
                    </div>
                )}

                {/* Secciones */}
                {article.content?.sections && article.content.sections.map((section, index) => (
                    <div key={index} className="mt-12">
                        <h2 className="text-2xl font-bold text-black mb-6 flex items-baseline gap-3">
                            <span className="text-gray-300 text-3xl font-black">
                                {index + 1}.
                            </span>
                            {section.heading}
                        </h2>
                        <div
                            className="text-gray-700 leading-loose text-lg"
                            dangerouslySetInnerHTML={{
                                __html: section.content
                                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-black font-semibold">$1</strong> ')
                                    .replace(/> (.*?)$/gm, '<blockquote class="border-l-4 border-[#B2DFDB] pl-6 py-2 my-6 italic text-gray-600 bg-gray-50 rounded-r-lg">$1</blockquote>')
                                    .replace(/^- (.*?)$/gm, '<li class="ml-6 mb-3 list-disc pl-2 marker:text-gray-400">$1</li>')
                                    .replace(/\n\n/g, '<br/><br/>')
                                    .replace(/\n/g, ' ')
                            }}
                        />
                    </div>
                ))}

                {/* Conclusión */}
                {article.content?.conclusion && (
                    <div className="mt-12 p-8 bg-gray-50 rounded-3xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            En resumen
                        </h3>
                        <p className="text-gray-800 leading-relaxed text-lg">
                            {article.content.conclusion}
                        </p>
                    </div>
                )}
            </div>

            {/* Escrituras Clave */}
            {article.keyScriptures && article.keyScriptures.length > 0 && (
                <div className="bg-[#B2EBF2] rounded-[2rem] p-10 mb-10">
                    <h2 className="text-3xl font-bold text-cyan-900 mb-8">
                        Escrituras Clave
                    </h2>
                    <div className="grid gap-4">
                        {article.keyScriptures.map((scripture, index) => (
                            <div key={index} className="p-6 bg-white/70 rounded-3xl backdrop-blur-sm">
                                <p className="font-bold text-cyan-900 mb-2 text-lg">{scripture.reference}</p>
                                <p className="text-cyan-900/80 italic mb-3 text-lg">"{scripture.text}"</p>
                                <p className="text-cyan-800/60 text-sm font-medium uppercase tracking-wider">{scripture.context}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Preguntas de Reflexión */}
            {article.reflectionQuestions && article.reflectionQuestions.length > 0 && (
                <div className="bg-[#E1BEE7] rounded-[2rem] p-10 mb-10">
                    <h2 className="text-3xl font-bold text-purple-900 mb-8">
                        Para Reflexionar
                    </h2>
                    <div className="space-y-4">
                        {article.reflectionQuestions.map((question, index) => (
                            <div key={index} className="flex gap-4 p-4 bg-white/40 rounded-2xl items-start">
                                <span className="flex-shrink-0 w-8 h-8 bg-purple-200 text-purple-900 rounded-full flex items-center justify-center font-bold">
                                    {index + 1}
                                </span>
                                <p className="text-purple-900 text-lg leading-snug pt-1">{question}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Fuentes / Sources */}
            {article.sources && article.sources.length > 0 && (
                <div className="bg-white rounded-[2rem] p-10 mb-20 border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-widest">
                        Fuentes Consultadas
                    </h2>
                    <div className="grid gap-3">
                        {article.sources.map((source, index) => (
                            <a
                                key={index}
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors group"
                            >
                                <div>
                                    <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {source.title}
                                    </p>
                                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full mt-1 inline-block">
                                        {source.type}
                                    </span>
                                </div>
                                <span className="text-gray-300 group-hover:text-blue-600">↗</span>
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Footer del artículo */}
            {article.footer && (
                <div className="text-center py-8 mt-12">
                    <p className="text-gray-500 text-sm font-medium">
                        {article.footer}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ArticleDetail;
