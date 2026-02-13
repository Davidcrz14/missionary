import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import SectionHeader from '../components/history/SectionHeader';
import QuickNav from '../components/history/QuickNav';
import {
    faBook,
    faScroll,
    faKey,
    faMicrophone,
    faCross,
    faUsers,
    faHourglass,
    faCalendar,
    faNewspaper,
    faBookOpen,
    faPen,
    faChurch,
    faHandsPraying
} from '@fortawesome/free-solid-svg-icons';
import {
    timeline,
    prophets,
    threeWitnesses,
    eightWitnesses,
    stats,
    apostasyProphecies,
    restorationProphecies,
    bookOfMormonProphecies,
    churchOrganization,
    priesthoodScriptures,
    restoredDoctrines,
    historicalPeriods,
    churchNameParts,
    articlesOfFaith,
    quickNavItems,
    restorationGlobalImpact,
    studyGuide,
} from '../data/historyPageData';

const HistoryPage = () => {
    useDocumentTitle('Historia de la Iglesia');
    const churchNameIcons = {
        cross: faCross,
        users: faUsers,
        hourglass: faHourglass,
    };

    return (
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 pb-20">
            {/* Hero Header */}
            <div className="mt-8 mb-8 rounded-[2.5rem] p-8 md:p-12 bg-gradient-to-br from-[#B2DFDB] to-[#B2EBF2] shadow-sm border border-white/50">
                <Link to="/" className="inline-flex items-center gap-2 text-black/60 hover:text-black/90 mb-6 text-sm font-medium">
                    ← Volver al inicio
                </Link>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="opacity-40" aria-hidden>
                        <FontAwesomeIcon icon={faBook} className="text-7xl md:text-8xl" />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-black/90 mb-3">
                            Historia de la Iglesia
                        </h1>
                        <p className="text-xl text-black/70 max-w-2xl">
                            La Restauración del Evangelio en los Últimos Días
                        </p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-white/50 rounded-2xl p-5 text-center backdrop-blur-sm border border-white/50">
                            <div className="text-2xl font-bold text-black/80">{stat.value}</div>
                            <div className="text-sm text-black/50 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <QuickNav items={quickNavItems} />

            {/* ============ BASES BÍBLICAS: APOSTASÍA ============ */}
            <section id="fundamento-apostasia" className="scroll-mt-24 mb-16 bg-[#FFCCBC] rounded-[2.5rem] p-8 md:p-12">
                <SectionHeader
                    eyebrow="Fundamento Bíblico"
                    title="Profecías de la Apostasía"
                    description="La Biblia profetizó que habría una apostasía general antes de la restauración del evangelio"
                />

                <div className="grid md:grid-cols-2 gap-6">
                    {apostasyProphecies.map((prophecy) => (
                        <div key={prophecy.ref} className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 border border-white/50">
                            <div className="font-bold text-black/70 text-sm mb-3 flex items-center gap-2">
                                <FontAwesomeIcon icon={faScroll} className="text-lg" aria-hidden /> {prophecy.ref}
                            </div>
                            <p className="text-black/80 italic mb-4 leading-relaxed">"{prophecy.text}"</p>
                            <p className="text-black/50 text-sm">{prophecy.context}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============ BASES BÍBLICAS: RESTAURACIÓN ============ */}
            <section id="fundamento-restauracion" className="scroll-mt-24 mb-16 bg-[#C8E6C9] rounded-[2.5rem] p-8 md:p-12">
                <SectionHeader
                    eyebrow="Fundamento Bíblico"
                    title="Profecías de la Restauración"
                    description="Los profetas antiguos vieron nuestros días y profetizaron la restauración del evangelio"
                />

                <div className="space-y-4">
                    {restorationProphecies.map((prophecy, i) => (
                        <div key={prophecy.ref} className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 flex flex-col md:flex-row gap-6 border border-white/50">
                            <div className="md:w-1/3">
                                <div className="font-bold text-black/70 text-lg flex items-center gap-2">
                                    <span className="w-8 h-8 bg-[#4CAF50] text-white rounded-full flex items-center justify-center text-sm">{i + 1}</span>
                                    {prophecy.ref}
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-black/80 italic mb-3 leading-relaxed">"{prophecy.text}"</p>
                                <p className="text-black/60 text-sm font-medium">✓ Cumplimiento: {prophecy.fulfillment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============ PRIMERA VISIÓN ============ */}
            <section id="primera-vision" className="scroll-mt-24 mb-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <span className="text-[#9E9E9E] text-sm uppercase tracking-widest font-medium">
                            Primavera de 1820
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-black/90 mt-2 mb-6">
                            La Primera Visión
                        </h2>
                        <p className="text-black/60 text-lg leading-relaxed mb-6">
                            En un período de intenso avivamiento religioso, el joven José Smith de <strong className="text-black/80">14 años</strong> buscaba
                            sinceramente saber cuál iglesia era verdadera. Inspirado por <strong className="text-black/80">Santiago 1:5</strong>, se retiró
                            a una arboleda para orar.
                        </p>
                        <p className="text-black/60 text-lg leading-relaxed mb-8">
                            En respuesta a su oración sincera, <strong className="text-black/80">Dios el Padre y Jesucristo</strong> se le aparecieron,
                            marcando el inicio de la Restauración del evangelio en los últimos días.
                        </p>

                        <div className="bg-[#B2EBF2] rounded-[2rem] p-8">
                            <p className="text-black/70 text-lg italic leading-relaxed mb-4">
                                "Vi dos Personajes, cuyo fulgor y gloria no admiten descripción... Uno de ellos me habló,
                                llamándome por mi nombre, y dijo, señalando al otro: <strong className="text-black/90">Éste es mi Hijo Amado: ¡Escúchalo!</strong>"
                            </p>
                            <p className="text-black/50 font-semibold text-sm">
                                — José Smith—Historia 1:17
                            </p>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 relative">
                        <img
                            src="/images/history/sacred-grove.png"
                            alt="La Arboleda Sagrada"
                            className="w-full rounded-[2.5rem] shadow-sm"
                            loading="lazy"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl">
                            <div className="font-bold text-black/80">Arboleda Sagrada</div>
                            <div className="text-sm text-black/50">Palmyra, Nueva York</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ LIBRO DE MORMÓN EN LA BIBLIA ============ */}
            <section className="mb-16 bg-[#E1BEE7] rounded-[2.5rem] p-8 md:p-12">
                <SectionHeader
                    eyebrow="Fundamento Bíblico"
                    title="El Libro de Mormón en la Biblia"
                    description="La Biblia profetizó la venida de otro testamento de Jesucristo"
                />

                <div className="grid md:grid-cols-2 gap-6">
                    {bookOfMormonProphecies.map((prophecy) => (
                        <div key={prophecy.ref} className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 border border-white/50">
                            <div className="font-bold text-black/70 text-lg mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 bg-[#9C27B0] text-white rounded-full flex items-center justify-center text-sm"><FontAwesomeIcon icon={faBookOpen} aria-hidden /></span>
                                {prophecy.ref}
                            </div>
                            <p className="text-black/80 italic mb-4 leading-relaxed text-sm">"{prophecy.text}"</p>
                            <div className="bg-[#E1BEE7] rounded-xl p-4">
                                <p className="text-black/70 text-sm"><strong>Significado:</strong> {prophecy.meaning}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============ LIBRO DE MORMÓN - TESTIGOS ============ */}
            <section className="mb-16 bg-[#C8E6C9] rounded-[2.5rem] p-8 md:p-12">
                <SectionHeader
                    eyebrow="1827 - 1830"
                    title="El Libro de Mormón"
                    description="Otro Testamento de Jesucristo"
                />

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                        <img
                            src="/images/history/golden-plates.png"
                            alt="Las Planchas de Oro"
                            className="w-full rounded-[2rem]"
                            loading="lazy"
                        />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="w-12 h-12 bg-[#4CAF50] text-white rounded-full flex items-center justify-center font-bold text-xl">3</span>
                                <h3 className="text-xl font-bold text-black/80">Los Tres Testigos</h3>
                            </div>
                            <p className="text-black/50 text-sm mb-4">
                                Vieron las planchas de oro y al ángel Moroni. Su testimonio aparece en cada ejemplar del Libro de Mormón.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {threeWitnesses.map((name) => (
                                    <span key={name} className="px-4 py-2 bg-[#C8E6C9] text-black/70 rounded-full text-sm font-medium">
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="w-12 h-12 bg-[#009688] text-white rounded-full flex items-center justify-center font-bold text-xl">8</span>
                                <h3 className="text-xl font-bold text-black/80">Los Ocho Testigos</h3>
                            </div>
                            <p className="text-black/50 text-sm mb-4">
                                Manejaron físicamente las planchas, sintieron su peso y vieron los grabados.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {eightWitnesses.map((name) => (
                                    <span key={name} className="px-3 py-1.5 bg-[#B2DFDB] text-black/70 rounded-full text-xs font-medium">
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ ORGANIZACIÓN DE LA IGLESIA PRIMITIVA ============ */}
            <section className="mb-16 bg-[#B2EBF2] rounded-[2.5rem] p-8 md:p-12">
                <SectionHeader
                    eyebrow="Fundamento Bíblico"
                    title="Organización de la Iglesia Primitiva"
                    description="Cristo organizó Su Iglesia con apóstoles y profetas - La Iglesia restaurada sigue el mismo modelo"
                />

                <div className="space-y-4">
                    {churchOrganization.map((scripture) => (
                        <div key={scripture.ref} className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 border border-white/50">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/4">
                                    <div className="font-bold text-black/70 text-lg">{scripture.ref}</div>
                                </div>
                                <div className="md:w-3/4">
                                    <p className="text-black/80 italic mb-3">"{scripture.text}"</p>
                                    <p className="text-black/60 text-sm font-medium bg-[#B2EBF2] rounded-xl p-3">
                                        <strong>Aplicación:</strong> {scripture.application}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============ SACERDOCIO Y AUTORIDAD ============ */}
            <section className="mb-16 bg-[#FFF59D] rounded-[2.5rem] p-8 md:p-12">
                <SectionHeader
                    eyebrow="Fundamento Bíblico"
                    title="Sacerdocio y Autoridad"
                    description="La autoridad para actuar en nombre de Dios debe ser conferida por Dios mismo"
                />

                <div className="grid md:grid-cols-3 gap-6">
                    {priesthoodScriptures.map((scripture) => (
                        <div key={scripture.ref} className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 border border-white/50">
                            <div className="w-12 h-12 bg-[#FFC107] text-black/70 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                                <FontAwesomeIcon icon={faKey} aria-hidden />
                            </div>
                            <div className="font-bold text-black/70 mb-3">{scripture.ref}</div>
                            <p className="text-black/70 italic text-sm mb-4">"{scripture.text}"</p>
                            <p className="text-black/50 text-sm">{scripture.meaning}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 text-center">
                    <h3 className="font-bold text-black/80 text-xl mb-4">Restauración del Sacerdocio</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-[#FFF59D] rounded-xl p-4">
                            <div className="font-bold text-black/70">Sacerdocio Aarónico</div>
                            <p className="text-black/50 text-sm">Restaurado por Juan el Bautista, 15 de mayo de 1829</p>
                        </div>
                        <div className="bg-[#FFF59D] rounded-xl p-4">
                            <div className="font-bold text-black/70">Sacerdocio de Melquisedec</div>
                            <p className="text-black/50 text-sm">Restaurado por Pedro, Santiago y Juan, mayo de 1829</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ DOCTRINAS RESTAURADAS ============ */}
            <section className="mb-16 bg-[#F8BBD0] rounded-[2.5rem] p-8 md:p-12">
                <SectionHeader
                    eyebrow="Fundamento Bíblico"
                    title="Doctrinas Restauradas"
                    description="Verdades bíblicas que fueron perdidas y restauradas"
                />

                <div className="space-y-8">
                    {restoredDoctrines.map((doctrine, i) => (
                        <div key={doctrine.title} className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 border border-white/50">
                            <h3 className="font-bold text-black/80 text-xl mb-4 flex items-center gap-3">
                                <span className="w-10 h-10 bg-[#E91E63] text-white rounded-full flex items-center justify-center">
                                    {i + 1}
                                </span>
                                {doctrine.title}
                            </h3>

                            <div className="space-y-3 mb-4">
                                {doctrine.scriptures.map((scripture, j) => (
                                    <div key={`${doctrine.title}-${scripture.ref}-${j}`} className="bg-[#F8BBD0] rounded-xl p-4">
                                        <div className="font-medium text-black/70 text-sm mb-1">{scripture.ref}</div>
                                        <p className="text-black/60 text-sm italic">"{scripture.text}"</p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-black/70 bg-white/50 rounded-xl p-4">
                                <strong>Explicación:</strong> {doctrine.explanation}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============ PERÍODOS HISTÓRICOS ============ */}
            <section className="mb-16">
                <SectionHeader eyebrow="1831 - 1847" title="Períodos Históricos" />

                <div className="grid md:grid-cols-2 gap-6">
                    {historicalPeriods.map((period) => (
                        <div key={period.name} className={`${period.color} rounded-[2rem] p-6 border border-white/50`}>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-black/80 text-xl">{period.name}</h3>
                                <span className="bg-white/50 px-3 py-1 rounded-full text-sm text-black/60">{period.years}</span>
                            </div>
                            <ul className="space-y-2">
                                {period.events.map((event) => (
                                    <li key={`${period.name}-${event}`} className="flex items-start gap-2 text-black/70 text-sm">
                                        <span className="text-black/40 mt-1">•</span>
                                        {event}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============ LÍNEA DEL TIEMPO ============ */}
            <section id="linea-tiempo" className="scroll-mt-24 mb-16">
                <SectionHeader eyebrow="Cronología" title="Línea del Tiempo" />

                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#FFCCBC] rounded-full" />

                    {timeline.map((item, index) => (
                        <div key={index} className={`relative flex items-center mb-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                <div className={`p-5 rounded-[1.5rem] ${item.highlight ? 'bg-[#FFCCBC]' : 'bg-white'}`}>
                                    <div className={`font-bold text-sm mb-1 ${item.highlight ? 'text-black/70' : 'text-black/40'}`}>
                                        {item.year}
                                    </div>
                                    <div className="font-bold text-black/80 text-lg mb-1">
                                        {item.event}
                                    </div>
                                    <div className="text-black/50 text-sm">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className={`w-4 h-4 rounded-full ${item.highlight ? 'bg-[#FF8A65] ring-4 ring-[#FFCCBC]' : 'bg-white border-4 border-[#FFAB91]'}`} />
                            </div>

                            <div className="w-5/12" />
                        </div>
                    ))}
                </div>
            </section>

            {/* ============ ÉXODO PIONERO ============ */}
            <section className="mb-16 relative rounded-[2.5rem] overflow-hidden">
                <img
                    src="/images/history/pioneer-trek.png"
                    alt="Éxodo Pionero"
                    className="w-full h-[500px] object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-8 max-w-2xl">
                        <span className="text-[#FFF59D] text-sm uppercase tracking-widest font-medium">
                            24 de Julio de 1847
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                            El Éxodo hacia el Oeste
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-8">
                            Bajo el liderazgo de <strong>Brigham Young</strong>, más de 70,000 pioneros cruzaron las planicies
                            hacia el Valle del Lago Salado.
                        </p>
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-5 border border-white/20">
                            <p className="text-2xl font-bold italic mb-2">
                                "Este es el lugar correcto"
                            </p>
                            <p className="text-white/60 text-sm">
                                — Brigham Young
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ TEMPLO ============ */}
            <section className="mb-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img
                            src="/images/history/salt-lake-temple.png"
                            alt="Templo de Salt Lake"
                            className="w-full rounded-[2.5rem]"
                            loading="lazy"
                        />
                    </div>

                    <div>
                        <span className="text-[#9E9E9E] text-sm uppercase tracking-widest font-medium">
                            1853 - 1893
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-black/90 mt-2 mb-6">
                            El Templo de Salt Lake
                        </h2>
                        <p className="text-black/60 text-lg leading-relaxed mb-6">
                            Construido a lo largo de <strong className="text-black/80">40 años</strong>, el Templo de Salt Lake es un símbolo de la fe,
                            sacrificio y dedicación de los pioneros.
                        </p>
                        <p className="text-black/60 text-lg leading-relaxed mb-8">
                            Fue dedicado por el presidente <strong className="text-black/80">Wilford Woodruff</strong> el 6 de abril de 1893.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#E1BEE7] rounded-[1.5rem] p-6 text-center">
                                <div className="text-3xl font-bold text-black/80">350+</div>
                                <div className="text-sm text-black/50">Templos hoy</div>
                            </div>
                            <div className="bg-[#E1BEE7] rounded-[1.5rem] p-6 text-center">
                                <div className="text-3xl font-bold text-black/80">195</div>
                                <div className="text-sm text-black/50">Países</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ PROFETAS ============ */}
            <section id="profetas" className="scroll-mt-24 mb-16 bg-[#FFF59D] rounded-[2.5rem] p-8 md:p-12">
                <SectionHeader
                    eyebrow="1830 - Presente"
                    title="Los Profetas de la Restauración"
                    description="18 profetas han guiado la Iglesia desde su organización"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {prophets.map((prophet) => (
                        <div key={prophet.num} className={`rounded-[1.5rem] p-5 ${prophet.num === 1 || prophet.num === 18 ? 'bg-[#FFAB91]' : 'bg-white/60'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm ${prophet.num === 1 || prophet.num === 18 ? 'bg-black/70' : 'bg-black/30'}`}>
                                    {prophet.num}
                                </div>
                                <div>
                                    <div className="font-bold text-black/80">{prophet.name}</div>
                                    <div className="text-xs text-black/40">{prophet.years}</div>
                                </div>
                            </div>
                            <div className="text-xs text-black/50 font-medium mb-2">{prophet.key}</div>
                            <div className="text-xs text-black/40 leading-relaxed">{prophet.detail}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============ IMPACTO GLOBAL ============ */}
            <section id="impacto-global" className="scroll-mt-24 mb-16 bg-[#D1C4E9] rounded-[2.5rem] p-8 md:p-12">
                <SectionHeader
                    eyebrow="Panorama Actual"
                    title="Impacto Global de la Restauración"
                    description="La obra del Señor sigue avanzando en todas las regiones del mundo"
                />

                <div className="grid md:grid-cols-2 gap-6">
                    {restorationGlobalImpact.map((item, i) => (
                        <article key={item.title} className="bg-white/70 rounded-[2rem] p-6 border border-white/60 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-9 h-9 bg-[#7E57C2] text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                                <h3 className="font-bold text-black/80">{item.title}</h3>
                            </div>
                            <p className="text-black/90 text-xl font-bold mb-2">{item.metric}</p>
                            <p className="text-black/60 text-sm leading-relaxed">{item.detail}</p>
                        </article>
                    ))}
                </div>

                <div className="mt-8 bg-white/70 rounded-[2rem] p-6 border border-white/60">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <div className="text-3xl text-black/70" aria-hidden>
                            <FontAwesomeIcon icon={faChurch} />
                        </div>
                        <p className="text-black/70 leading-relaxed">
                            La Restauración no es solo un evento histórico; es un proceso continuo de revelación, convenios y discipulado en cada nación.
                        </p>
                    </div>
                </div>
            </section>

            {/* ============ ¿POR QUÉ SE LLAMA ASÍ? ============ */}
            <section className="mb-16 bg-[#B2EBF2] rounded-[2.5rem] p-8 md:p-12">
                <SectionHeader
                    eyebrow="Revelado por Dios"
                    title={<>¿Por qué se llama La Iglesia de Jesucristo<br />de los Santos de los Últimos Días?</>}
                    description="El nombre fue revelado por el Señor el 26 de abril de 1838"
                />

                <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 mb-8 text-center">
                    <p className="text-black/80 italic text-lg leading-relaxed mb-4">
                        "Porque así se llamará mi iglesia en los postreros días, a saber, <strong className="text-black/90">La Iglesia de Jesucristo de los Santos de los Últimos Días</strong>."
                    </p>
                    <p className="text-black/50 font-semibold text-sm">— Doctrina y Convenios 115:4</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {churchNameParts.map((item) => (
                        <div key={item.part} className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 text-center">
                            <div className="text-4xl mb-4"><FontAwesomeIcon icon={churchNameIcons[item.icon]} aria-hidden /></div>
                            <h3 className="font-bold text-black/80 text-xl mb-3">"{item.part}"</h3>
                            <p className="text-black/60 text-sm">{item.meaning}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 bg-[#80DEEA] rounded-[2rem] p-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="text-5xl" aria-hidden><FontAwesomeIcon icon={faMicrophone} /></div>
                        <div>
                            <h4 className="font-bold text-black/80 text-lg mb-2">Énfasis del Presidente Russell M. Nelson (2018)</h4>
                            <p className="text-black/60 text-sm italic">
                                "Jesús nos mandó llamar a la Iglesia por Su nombre porque esta es Su Iglesia, llena de Su poder...
                                El Señor me ha puesto sobre el corazón la importancia del nombre que Él ha revelado para Su iglesia."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ ARTÍCULOS DE FE ============ */}
            <section id="articulos-fe" className="scroll-mt-24 mb-16 bg-[#FFCCBC] rounded-[2.5rem] p-8 md:p-12">
                <SectionHeader
                    eyebrow="1 de Marzo de 1842"
                    title="Los 13 Artículos de Fe"
                    description="Declaración concisa de las creencias fundamentales de la Iglesia"
                />

                {/* Origen */}
                <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 mb-8">
                    <h3 className="font-bold text-black/80 text-xl mb-4 flex items-center gap-3">
                        <span className="w-10 h-10 bg-[#FF7043] text-white rounded-full flex items-center justify-center"><FontAwesomeIcon icon={faScroll} aria-hidden /></span>
                        Origen: La Carta a Wentworth
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-black/70 text-sm mb-4">
                                <strong>John Wentworth</strong>, editor del periódico <em>Chicago Democrat</em>, solicitó a José Smith
                                un resumen de "los comienzos, el progreso, la persecución y la fe de los Santos de los Últimos Días".
                            </p>
                            <p className="text-black/70 text-sm">
                                En respuesta, José Smith escribió la <strong>Carta a Wentworth</strong> el 1 de marzo de 1842,
                                que concluye con los 13 Artículos de Fe, resumiendo las doctrinas esenciales en menos de 400 palabras.
                            </p>
                        </div>
                        <div className="bg-[#FFCCBC] rounded-xl p-4">
                            <h4 className="font-bold text-black/70 text-sm mb-2">Datos clave:</h4>
                            <ul className="space-y-2 text-black/60 text-sm">
                                <li><FontAwesomeIcon icon={faCalendar} className="mr-2" aria-hidden /><strong>Fecha:</strong> 1 de marzo de 1842</li>
                                <li><FontAwesomeIcon icon={faNewspaper} className="mr-2" aria-hidden /><strong>Publicado en:</strong> Times and Seasons (Nauvoo)</li>
                                <li><FontAwesomeIcon icon={faBookOpen} className="mr-2" aria-hidden /><strong>Canonizado:</strong> 1880 en La Perla de Gran Precio</li>
                                <li><FontAwesomeIcon icon={faPen} className="mr-2" aria-hidden /><strong>Autor:</strong> Profeta José Smith</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Los 13 Artículos */}
                <div className="grid md:grid-cols-2 gap-4">
                    {articlesOfFaith.map((article) => (
                        <div key={article.num} className="bg-white/60 backdrop-blur-sm rounded-[1.5rem] p-5 flex gap-4">
                            <div className="w-10 h-10 bg-[#FF7043] text-white rounded-full flex-shrink-0 flex items-center justify-center font-bold">
                                {article.num}
                            </div>
                            <p className="text-black/70 text-sm leading-relaxed">{article.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-black/50 text-sm italic">
                        Enlace a la Carta a Wentworth: <a
                            href="https://www.churchofjesuschrist.org/study/manual/teachings-joseph-smith/chapter-38?lang=spa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-black/80 break-all select-all"
                        >
                            https://www.churchofjesuschrist.org/study/manual/teachings-joseph-smith/chapter-38?lang=spa
                        </a>
                    </p>
                </div>
            </section>

            {/* ============ CÓMO ESTUDIAR ============ */}
            <section id="como-estudiar" className="scroll-mt-24 mb-16 bg-[#FFF8E1] rounded-[2.5rem] p-8 md:p-12">
                <SectionHeader
                    eyebrow="Aplicación Personal"
                    title="Cómo estudiar esta página"
                    description="Una guía breve para convertir historia en revelación personal"
                />

                <div className="grid md:grid-cols-2 gap-6">
                    {studyGuide.map((item) => (
                        <article key={item.title} className="bg-white rounded-[1.5rem] p-6 border border-black/5">
                            <h3 className="font-bold text-black/80 mb-2 flex items-center gap-2">
                                <FontAwesomeIcon icon={faHandsPraying} className="text-black/40" aria-hidden />
                                {item.title}
                            </h3>
                            <p className="text-black/60 text-sm leading-relaxed">{item.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* ============ TESTIMONIO FINAL ============ */}
            <section className="bg-[#F8BBD0] rounded-[2.5rem] p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-black/80 mb-6">
                    Nuestro Testimonio
                </h2>
                <p className="text-lg text-black/60 leading-relaxed max-w-3xl mx-auto mb-10">
                    Testificamos que Dios vive, que Jesucristo es el Salvador del mundo, que José Smith fue un profeta,
                    y que La Iglesia de Jesucristo de los Santos de los Últimos Días es la iglesia restaurada del Señor sobre la tierra.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/" className="btn-secondary">
                        Explorar más temas
                    </Link>
                    <a href="https://www.churchofjesuschrist.org" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        ChurchofJesusChrist.org
                    </a>
                </div>
            </section>

            {/* ============ FOOTER QUOTE ============ */}
            <div className="mt-12 text-center">
                <p className="text-black/30 italic max-w-xl mx-auto mb-2">
                    "Y vi volar por en medio del cielo a otro ángel, que tenía el evangelio eterno para predicarlo
                    a los moradores de la tierra, a toda nación, tribu, lengua y pueblo."
                </p>
                <p className="text-black/50 font-semibold text-sm">
                    Apocalipsis 14:6
                </p>
            </div>
        </div>
    );
};

export default HistoryPage;
