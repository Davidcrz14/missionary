import ReactMarkdown from 'react-markdown';

const ArticleDetail = ({ article }) => {
    if (!article) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-600 text-lg">Artículo no encontrado</p>
            </div>
        );
    }

    // Componentes personalizados para ReactMarkdown
    const markdownComponents = {
        // Negritas
        strong: ({ children }) => (
            <strong className="text-black font-semibold">{children}</strong>
        ),
        // Énfasis/Itálicas
        em: ({ children }) => (
            <em className="italic text-gray-700">{children}</em>
        ),
        // Blockquotes (citas)
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#B2DFDB] pl-6 py-3 my-6 italic text-gray-600 bg-gray-50 rounded-r-lg">
                {children}
            </blockquote>
        ),
        // Listas no ordenadas
        ul: ({ children }) => (
            <ul className="my-4 space-y-2">{children}</ul>
        ),
        // Listas ordenadas
        ol: ({ children }) => (
            <ol className="my-4 space-y-2 list-decimal list-inside">{children}</ol>
        ),
        // Items de lista
        li: ({ children }) => (
            <li className="ml-6 pl-2 text-gray-700 marker:text-gray-400">
                {children}
            </li>
        ),
        // Párrafos
        p: ({ children }) => (
            <p className="mb-4 last:mb-0">{children}</p>
        ),
        // Enlaces
        a: ({ href, children }) => (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
            >
                {children}
            </a>
        ),
        // Código inline
        code: ({ children }) => (
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">
                {children}
            </code>
        ),
    };

    // Componentes para la introducción (texto más grande)
    const introMarkdownComponents = {
        ...markdownComponents,
        p: ({ children }) => (
            <p className="mb-6 last:mb-0">{children}</p>
        ),
    };

    // Componentes para la conclusión
    const conclusionMarkdownComponents = {
        ...markdownComponents,
        strong: ({ children }) => (
            <strong className="text-gray-900 font-semibold">{children}</strong>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-6 py-3 my-4 italic text-gray-700 bg-gray-100/50 rounded-r-lg">
                {children}
            </blockquote>
        ),
    };

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
                    <div className="text-xl text-gray-800 leading-relaxed font-serif prose prose-lg max-w-none">
                        <ReactMarkdown components={introMarkdownComponents}>
                            {article.content.introduction}
                        </ReactMarkdown>
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
                        <div className="text-gray-700 leading-loose text-lg prose prose-lg max-w-none">
                            <ReactMarkdown components={markdownComponents}>
                                {section.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                ))}

                {/* Conclusión */}
                {article.content?.conclusion && (
                    <div className="mt-12 p-8 bg-gray-50 rounded-3xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            The End
                        </h3>
                        <div className="text-gray-800 leading-relaxed text-lg prose prose-lg max-w-none">
                            <ReactMarkdown components={conclusionMarkdownComponents}>
                                {article.content.conclusion}
                            </ReactMarkdown>
                        </div>
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
