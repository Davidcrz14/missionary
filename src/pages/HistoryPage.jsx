import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const HistoryPage = () => {
    // Línea de tiempo de eventos clave
    const timeline = [
        { year: "1820", event: "La Primera Visión", desc: "Arboleda Sagrada, Nueva York", highlight: true },
        { year: "1823", event: "Visita de Moroni", desc: "El ángel revela las planchas de oro" },
        { year: "1827", event: "José recibe las planchas", desc: "Cerro Cumorah" },
        { year: "1829", event: "Restauración del Sacerdocio", desc: "Juan el Bautista y Pedro, Santiago, Juan", highlight: true },
        { year: "1830", event: "Organización de la Iglesia", desc: "6 de abril, Fayette, Nueva York", highlight: true },
        { year: "1836", event: "Templo de Kirtland", desc: "Aparición del Salvador (D&C 110)" },
        { year: "1844", event: "Martirio del Profeta", desc: "27 de junio, Carthage, Illinois", highlight: true },
        { year: "1847", event: "Llegada a Utah", desc: "'Este es el lugar correcto'" },
        { year: "1893", event: "Templo de Salt Lake", desc: "40 años de construcción" },
        { year: "1978", event: "Revelación del Sacerdocio", desc: "Declaración Oficial 2", highlight: true },
        { year: "2018", event: "Russell M. Nelson", desc: "Profeta de revelación acelerada" },
        { year: "2026", event: "Dallin H. Oaks", desc: "Profeta actual", highlight: true },
    ];

    // Profetas con más detalles
    const prophets = [
        { num: 1, name: "José Smith", years: "1830-1844", key: "Profeta de la Restauración", detail: "Recibió la Primera Visión, tradujo el Libro de Mormón, recibió más de 130 revelaciones" },
        { num: 2, name: "Brigham Young", years: "1847-1877", key: "Éxodo al Oeste", detail: "Dirigió a 70,000 pioneros a Utah, fundó 350 comunidades, inició el Templo de Salt Lake" },
        { num: 3, name: "John Taylor", years: "1880-1887", key: "Campeón de la Libertad", detail: "Testigo del martirio, herido por 5 balas, escribió D&C 135" },
        { num: 4, name: "Wilford Woodruff", years: "1889-1898", key: "Manifiesto de 1890", detail: "Dedicó el Templo de Salt Lake, preservó la Iglesia mediante revelación" },
        { num: 5, name: "Lorenzo Snow", years: "1898-1901", key: "Ley del Diezmo", detail: "Vio al Salvador en el templo, salvó a la Iglesia de la bancarrota" },
        { num: 6, name: "Joseph F. Smith", years: "1901-1918", key: "Visión de los muertos", detail: "Recibió D&C 138, instituyó la Noche de Hogar" },
        { num: 7, name: "Heber J. Grant", years: "1918-1945", key: "Programa de Bienestar", detail: "Guió la Iglesia durante la Gran Depresión y dos guerras mundiales" },
        { num: 8, name: "George Albert Smith", years: "1945-1951", key: "Profeta del Amor", detail: "Envió ayuda humanitaria a Europa devastada por la guerra" },
        { num: 9, name: "David O. McKay", years: "1951-1970", key: "Expansión Global", detail: "Visitó 50+ países, construyó templos internacionales" },
        { num: 10, name: "Joseph Fielding Smith", years: "1970-1972", key: "Erudito Doctrinal", detail: "Escribió 25 libros doctrinales, 62 años como apóstol" },
        { num: 11, name: "Harold B. Lee", years: "1972-1973", key: "Correlación", detail: "Reorganizó la estructura de la Iglesia para el crecimiento global" },
        { num: 12, name: "Spencer W. Kimball", years: "1973-1985", key: "Revelación de 1978", detail: "Extendió el sacerdocio a todos los hombres dignos" },
        { num: 13, name: "Ezra Taft Benson", years: "1985-1994", key: "Libro de Mormón", detail: "Llamó a inundar la tierra con el Libro de Mormón" },
        { num: 14, name: "Howard W. Hunter", years: "1994-1995", key: "Profeta del Templo", detail: "Invitó a todos a ser dignos de una recomendación" },
        { num: 15, name: "Gordon B. Hinckley", years: "1995-2008", key: "Constructor de Templos", detail: "Dedicó 90+ templos, más que todos los anteriores juntos" },
        { num: 16, name: "Thomas S. Monson", years: "2008-2018", key: "Profeta del Servicio", detail: "Redujo edad misional, inspiró servicio uno por uno" },
        { num: 17, name: "Russell M. Nelson", years: "2018-2025", key: "Revelación Continua", detail: "Anunció 200+ templos, implementó cambios inspirados" },
        { num: 18, name: "Dallin H. Oaks", years: "2025-presente", key: "Profeta Actual", detail: "41 años de servicio apostólico, defensor de la verdad" },
    ];

    // Testigos del Libro de Mormón
    const threeWitnesses = ["Oliver Cowdery", "David Whitmer", "Martin Harris"];
    const eightWitnesses = ["Christian Whitmer", "Jacob Whitmer", "Peter Whitmer Jr.", "John Whitmer", "Hiram Page", "Joseph Smith Sr.", "Hyrum Smith", "Samuel H. Smith"];

    // Estadísticas actuales
    const stats = [
        { value: "17.5M+", label: "Miembros" },
        { value: "350+", label: "Templos" },
        { value: "450+", label: "Misiones" },
        { value: "195", label: "Países" },
    ];

    // Profecías de la Apostasía
    const apostasyProphecies = [
        {
            ref: "2 Tesalonicenses 2:3",
            text: "Nadie os engañe en ninguna manera; porque no vendrá sin que antes venga la apostasía, y se manifieste el hombre de pecado.",
            context: "Pablo advirtió que la segunda venida no ocurriría hasta después de una gran apostasía."
        },
        {
            ref: "1 Timoteo 4:1-3",
            text: "El Espíritu dice claramente que en los postreros tiempos algunos apostatarán de la fe, escuchando a espíritus engañadores y a doctrinas de demonios.",
            context: "Pablo profetizó que algunos abandonarían la verdadera doctrina."
        },
        {
            ref: "Amós 8:11-12",
            text: "He aquí vienen días, dice Jehová el Señor, en los cuales enviaré hambre a la tierra, no hambre de pan, ni sed de agua, sino de oír la palabra de Jehová.",
            context: "El profeta Amós predijo un tiempo sin profetas ni revelación."
        },
        {
            ref: "Isaías 29:10",
            text: "Porque Jehová derramó sobre vosotros espíritu de sueño profundo, y cerró los ojos de vuestros profetas, y cubrió vuestras cabezas de los videntes.",
            context: "Isaías profetizó que los profetas serían silenciados."
        }
    ];

    // Profecías de la Restauración
    const restorationProphecies = [
        {
            ref: "Apocalipsis 14:6-7",
            text: "Vi volar por en medio del cielo a otro ángel, que tenía el evangelio eterno para predicarlo a los moradores de la tierra, a toda nación, tribu, lengua y pueblo.",
            fulfillment: "El ángel Moroni restauró el evangelio eterno mediante el Libro de Mormón."
        },
        {
            ref: "Hechos 3:19-21",
            text: "Para que vengan de la presencia del Señor tiempos de refrigerio, y él envíe a Jesucristo... a quien de cierto es necesario que el cielo reciba hasta los tiempos de la restauración de todas las cosas.",
            fulfillment: "La restauración de todas las cosas comenzó con José Smith en 1820."
        },
        {
            ref: "Daniel 2:44",
            text: "En los días de estos reyes el Dios del cielo levantará un reino que no será jamás destruido... permanecerá para siempre.",
            fulfillment: "La Iglesia restaurada es el reino que nunca será destruido."
        },
        {
            ref: "Isaías 29:14",
            text: "He aquí que yo volveré a hacer una obra maravillosa entre este pueblo, una obra maravillosa y un prodigio.",
            fulfillment: "La restauración del evangelio es la obra maravillosa profetizada."
        },
        {
            ref: "Efesios 1:10",
            text: "De reunir todas las cosas en Cristo, en la dispensación del cumplimiento de los tiempos, así las que están en los cielos, como las que están en la tierra.",
            fulfillment: "Vivimos en la dispensación del cumplimiento de los tiempos."
        }
    ];

    // El Libro de Mormón en la Biblia
    const bookOfMormonProphecies = [
        {
            ref: "Ezequiel 37:15-17",
            text: "Toma ahora un palo, y escribe en él: Para Judá... Toma después otro palo, y escribe en él: Para José, palo de Efraín... júntalos luego el uno con el otro, para que sean uno solo.",
            meaning: "El palo de Judá es la Biblia. El palo de José/Efraín es el Libro de Mormón. Juntos testifican de Cristo."
        },
        {
            ref: "Isaías 29:11-12",
            text: "Toda visión os será como palabras de libro sellado, el cual si dieren al que sabe leer... dirá: No puedo, porque está sellado. Y si se diere el libro al que no sabe leer, diciendo: Lee ahora esto; él dirá: No sé leer.",
            meaning: "Martin Harris llevó caracteres a Charles Anthon (el 'instruido'). José Smith, sin educación formal, tradujo las planchas por el poder de Dios."
        },
        {
            ref: "Juan 10:16",
            text: "También tengo otras ovejas que no son de este redil; aquéllas también debo traer, y oirán mi voz; y habrá un rebaño, y un pastor.",
            meaning: "Cristo visitó a Sus 'otras ovejas' en las Américas después de Su resurrección (3 Nefi 15:21)."
        },
        {
            ref: "2 Corintios 13:1",
            text: "Por boca de dos o tres testigos se decidirá todo asunto.",
            meaning: "La Biblia y el Libro de Mormón son dos testigos que testifican de Cristo."
        }
    ];

    // Organización de la Iglesia Primitiva
    const churchOrganization = [
        {
            ref: "Efesios 4:11-14",
            text: "Y él mismo constituyó a unos, apóstoles; a otros, profetas; a otros, evangelistas; a otros, pastores y maestros, a fin de perfeccionar a los santos para la obra del ministerio.",
            application: "La Iglesia restaurada tiene apóstoles, profetas, setentas, obispos, élderes, y maestros."
        },
        {
            ref: "Efesios 2:19-20",
            text: "Edificados sobre el fundamento de los apóstoles y profetas, siendo la principal piedra del ángulo Jesucristo mismo.",
            application: "Cristo es la piedra angular; apóstoles y profetas son el fundamento de Su Iglesia."
        },
        {
            ref: "1 Corintios 12:28",
            text: "A unos puso Dios en la iglesia, primeramente apóstoles, luego profetas, lo tercero maestros.",
            application: "El orden divino de la Iglesia incluye apóstoles y profetas vivientes."
        }
    ];

    // Sacerdocio y Autoridad
    const priesthoodScriptures = [
        {
            ref: "Hebreos 5:4",
            text: "Y nadie toma para sí esta honra, sino el que es llamado por Dios, como lo fue Aarón.",
            meaning: "La autoridad del sacerdocio debe ser conferida por Dios, no tomada por uno mismo."
        },
        {
            ref: "Mateo 16:19",
            text: "Y a ti te daré las llaves del reino de los cielos; y todo lo que atares en la tierra será atado en los cielos.",
            meaning: "Pedro recibió las llaves del sacerdocio de Cristo mismo. Pedro, Santiago y Juan las restauraron a José Smith."
        },
        {
            ref: "Hechos 8:17-20",
            text: "Entonces les imponían las manos, y recibían el Espíritu Santo... Simón les ofreció dinero, diciendo: Dadme también a mí este poder.",
            meaning: "El Espíritu Santo se confiere por imposición de manos por quienes tienen autoridad, no puede comprarse."
        }
    ];

    // Doctrinas Restauradas
    const restoredDoctrines = [
        {
            title: "Bautismo por los Muertos",
            scriptures: [
                { ref: "1 Corintios 15:29", text: "De otro modo, ¿qué harán los que se bautizan por los muertos, si en ninguna manera los muertos resucitan? ¿Por qué, pues, se bautizan por los muertos?" },
                { ref: "1 Pedro 3:18-19", text: "Cristo... fue y predicó a los espíritus encarcelados, los que en otro tiempo desobedecieron." },
                { ref: "1 Pedro 4:6", text: "Por esto también ha sido predicado el evangelio a los muertos, para que sean juzgados en carne según los hombres, pero vivan en espíritu según Dios." }
            ],
            explanation: "El evangelio se predica a los muertos y el bautismo vicario les permite aceptar las ordenanzas."
        },
        {
            title: "Grados de Gloria",
            scriptures: [
                { ref: "1 Corintios 15:40-42", text: "Hay cuerpos celestiales, y cuerpos terrestres; pero una es la gloria de los celestiales, y otra la de los terrestres. Una es la gloria del sol, otra la gloria de la luna, y otra la gloria de las estrellas." },
                { ref: "2 Corintios 12:2", text: "Conozco a un hombre en Cristo, que hace catorce años... fue arrebatado hasta el tercer cielo." }
            ],
            explanation: "Existen diferentes grados de gloria: celestial, terrestre y telestial, como el sol, la luna y las estrellas."
        }
    ];

    // Períodos Históricos
    const historicalPeriods = [
        {
            name: "Kirtland, Ohio",
            years: "1831-1837",
            color: "bg-[#B2EBF2]",
            events: [
                "Primera sede de la Iglesia",
                "Construcción del Templo de Kirtland (dedicado 1836)",
                "Aparición del Salvador a José y Oliver (D&C 110)",
                "Moisés, Elías y Elías el profeta restauraron llaves",
                "Se recibieron muchas revelaciones de D&C"
            ]
        },
        {
            name: "Misuri",
            years: "1838-1839",
            color: "bg-[#FFCCBC]",
            events: [
                "Revelado como 'Tierra de Sion'",
                "Templo de Far West comenzado",
                "Orden de exterminio del gobernador Boggs",
                "Expulsión de 10,000 Santos",
                "José encarcelado en Liberty"
            ]
        },
        {
            name: "Nauvoo, Illinois",
            years: "1839-1846",
            color: "bg-[#C8E6C9]",
            events: [
                "Ciudad 'Hermosa' fundada por José Smith",
                "Se convirtió en la ciudad más grande de Illinois",
                "Templo de Nauvoo construido",
                "Restauración de ordenanzas del templo",
                "Martirio de José y Hyrum (1844)"
            ]
        },
        {
            name: "Éxodo Pionero",
            years: "1846-1847",
            color: "bg-[#FFF59D]",
            events: [
                "70,000 pioneros cruzaron las planicies",
                "Brigham Young dirigió la compañía pionera",
                "Winter Quarters establecido",
                "Llegada al Valle del Lago Salado (24 julio 1847)",
                "'Este es el lugar correcto'"
            ]
        }
    ];

    // ¿Por qué se llama así la Iglesia?
    const churchNameParts = [
        {
            part: "La Iglesia de Jesucristo",
            meaning: "Esta es la Iglesia de Jesucristo restaurada. Él es la cabeza, el centro de su doctrina y su misión es ayudar a las personas a venir a Él.",
            icon: faCross
        },
        {
            part: "Santos",
            meaning: "Se refiere a los miembros fieles que se esfuerzan por vivir en santidad, siguiendo el ejemplo de Jesucristo. Este término evoca a la iglesia primitiva del Nuevo Testamento.",
            icon: faUsers
        },
        {
            part: "de los Últimos Días",
            meaning: "Señala que esta es la iglesia establecida por Dios en la era final antes de la Segunda Venida de Jesucristo, restaurando el evangelio en los tiempos profetizados.",
            icon: faHourglass
        }
    ];

    // Artículos de Fe
    const articlesOfFaith = [
        { num: 1, text: "Nosotros creemos en Dios el Eterno Padre, y en su Hijo Jesucristo, y en el Espíritu Santo." },
        { num: 2, text: "Creemos que los hombres serán castigados por sus propios pecados, y no por la transgresión de Adán." },
        { num: 3, text: "Creemos que por la Expiación de Cristo, todo el género humano puede salvarse, mediante la obediencia a las leyes y ordenanzas del Evangelio." },
        { num: 4, text: "Creemos que los primeros principios y ordenanzas del Evangelio son: primero, Fe en el Señor Jesucristo; segundo, Arrepentimiento; tercero, Bautismo por inmersión para la remisión de los pecados; cuarto, Imposición de manos para comunicar el don del Espíritu Santo." },
        { num: 5, text: "Creemos que el hombre debe ser llamado por Dios, por profecía y la imposición de las manos, por aquellos que tienen la autoridad, a fin de que pueda predicar el Evangelio y administrar sus ordenanzas." },
        { num: 6, text: "Creemos en la misma organización que existió en la Iglesia Primitiva, esto es, apóstoles, profetas, pastores, maestros, evangelistas, etc." },
        { num: 7, text: "Creemos en el don de lenguas, profecía, revelación, visiones, sanidades, interpretación de lenguas, etc." },
        { num: 8, text: "Creemos que la Biblia es la palabra de Dios hasta donde esté traducida correctamente; también creemos que el Libro de Mormón es la palabra de Dios." },
        { num: 9, text: "Creemos todo lo que Dios ha revelado, todo lo que actualmente revela, y creemos que aún revelará muchos grandes e importantes asuntos pertenecientes al reino de Dios." },
        { num: 10, text: "Creemos en la satisfacción de Israel y en la restauración de las Diez Tribus; que Sion (la Nueva Jerusalén) será satisfecha sobre el continente americano; que Cristo reinará personalmente sobre la tierra; y que la tierra será satisfecha y recibirá su gloria paradisíaca." },
        { num: 11, text: "Reclamamos el derecho de adorar a Dios Todopoderoso conforme a los dictados de nuestra propia conciencia, y concedemos a todos los hombres el mismo privilegio: que adoren cómo, dónde o lo que deseen." },
        { num: 12, text: "Creemos en estar sujetos a los reyes, presidentes, gobernantes y magistrados; en obedecer, honrar y sostener la ley." },
        { num: 13, text: "Creemos en ser honrados, verídicos, castos, benevolentes, virtuosos y en hacer el bien a todos los hombres; en verdad, podemos decir que seguimos la admonición de Pablo: Todo lo creemos, todo lo esperamos; hemos sufrido muchas cosas, y esperamos poder sufrir todas las cosas. Si hay algo virtuoso, o bello, o de buena reputación, o digno de alabanza, a esto aspiramos." }
    ];

    return (
        <div className="w-full max-w-[1400px] mx-auto px-8 pb-20">
            {/* Hero Header */}
            <div className="mt-8 mb-12 rounded-[2.5rem] p-12 bg-[#B2DFDB]">
                <Link to="/" className="inline-flex items-center gap-2 text-black/50 hover:text-black/80 mb-6 text-sm">
                    ← Volver al inicio
                </Link>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="opacity-40">
                        <FontAwesomeIcon icon={faBook} className="text-8xl" />
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
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white/40 rounded-2xl p-5 text-center backdrop-blur-sm">
                            <div className="text-2xl font-bold text-black/80">{stat.value}</div>
                            <div className="text-sm text-black/50 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ============ BASES BÍBLICAS: APOSTASÍA ============ */}
            <section className="mb-16 bg-[#FFCCBC] rounded-[2.5rem] p-8 md:p-12">
                <div className="text-center mb-10">
                    <span className="text-black/40 text-sm uppercase tracking-widest font-medium">
                        Fundamento Bíblico
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black/90 mt-2 mb-2">
                        Profecías de la Apostasía
                    </h2>
                    <p className="text-black/60 text-lg max-w-2xl mx-auto">
                        La Biblia profetizó que habría una apostasía general antes de la restauración del evangelio
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {apostasyProphecies.map((prophecy, i) => (
                        <div key={i} className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6">
                            <div className="font-bold text-black/70 text-sm mb-3 flex items-center gap-2">
                                <FontAwesomeIcon icon={faScroll} className="text-lg" /> {prophecy.ref}
                            </div>
                            <p className="text-black/80 italic mb-4 leading-relaxed">"{prophecy.text}"</p>
                            <p className="text-black/50 text-sm">{prophecy.context}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============ BASES BÍBLICAS: RESTAURACIÓN ============ */}
            <section className="mb-16 bg-[#C8E6C9] rounded-[2.5rem] p-8 md:p-12">
                <div className="text-center mb-10">
                    <span className="text-black/40 text-sm uppercase tracking-widest font-medium">
                        Fundamento Bíblico
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black/90 mt-2 mb-2">
                        Profecías de la Restauración
                    </h2>
                    <p className="text-black/60 text-lg max-w-2xl mx-auto">
                        Los profetas antiguos vieron nuestros días y profetizaron la restauración del evangelio
                    </p>
                </div>

                <div className="space-y-4">
                    {restorationProphecies.map((prophecy, i) => (
                        <div key={i} className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 flex flex-col md:flex-row gap-6">
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
            <section className="mb-16">
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
                            className="w-full rounded-[2.5rem]"
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
                <div className="text-center mb-10">
                    <span className="text-black/40 text-sm uppercase tracking-widest font-medium">
                        Fundamento Bíblico
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black/90 mt-2 mb-2">
                        El Libro de Mormón en la Biblia
                    </h2>
                    <p className="text-black/60 text-lg max-w-2xl mx-auto">
                        La Biblia profetizó la venida de otro testamento de Jesucristo
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {bookOfMormonProphecies.map((prophecy, i) => (
                        <div key={i} className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6">
                            <div className="font-bold text-black/70 text-lg mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 bg-[#9C27B0] text-white rounded-full flex items-center justify-center text-sm"><FontAwesomeIcon icon={faBookOpen} /></span>
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
                <div className="text-center mb-10">
                    <span className="text-black/40 text-sm uppercase tracking-widest font-medium">
                        1827 - 1830
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black/90 mt-2 mb-2">
                        El Libro de Mormón
                    </h2>
                    <p className="text-black/60 text-lg">
                        Otro Testamento de Jesucristo
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                        <img
                            src="/images/history/golden-plates.png"
                            alt="Las Planchas de Oro"
                            className="w-full rounded-[2rem]"
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
                                {threeWitnesses.map((name, i) => (
                                    <span key={i} className="px-4 py-2 bg-[#C8E6C9] text-black/70 rounded-full text-sm font-medium">
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
                                {eightWitnesses.map((name, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-[#B2DFDB] text-black/70 rounded-full text-xs font-medium">
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
                <div className="text-center mb-10">
                    <span className="text-black/40 text-sm uppercase tracking-widest font-medium">
                        Fundamento Bíblico
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black/90 mt-2 mb-2">
                        Organización de la Iglesia Primitiva
                    </h2>
                    <p className="text-black/60 text-lg max-w-2xl mx-auto">
                        Cristo organizó Su Iglesia con apóstoles y profetas - La Iglesia restaurada sigue el mismo modelo
                    </p>
                </div>

                <div className="space-y-4">
                    {churchOrganization.map((scripture, i) => (
                        <div key={i} className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6">
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
                <div className="text-center mb-10">
                    <span className="text-black/40 text-sm uppercase tracking-widest font-medium">
                        Fundamento Bíblico
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black/90 mt-2 mb-2">
                        Sacerdocio y Autoridad
                    </h2>
                    <p className="text-black/60 text-lg max-w-2xl mx-auto">
                        La autoridad para actuar en nombre de Dios debe ser conferida por Dios mismo
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {priesthoodScriptures.map((scripture, i) => (
                        <div key={i} className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6">
                            <div className="w-12 h-12 bg-[#FFC107] text-black/70 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                                <FontAwesomeIcon icon={faKey} />
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
                <div className="text-center mb-10">
                    <span className="text-black/40 text-sm uppercase tracking-widest font-medium">
                        Fundamento Bíblico
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black/90 mt-2 mb-2">
                        Doctrinas Restauradas
                    </h2>
                    <p className="text-black/60 text-lg max-w-2xl mx-auto">
                        Verdades bíblicas que fueron perdidas y restauradas
                    </p>
                </div>

                <div className="space-y-8">
                    {restoredDoctrines.map((doctrine, i) => (
                        <div key={i} className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6">
                            <h3 className="font-bold text-black/80 text-xl mb-4 flex items-center gap-3">
                                <span className="w-10 h-10 bg-[#E91E63] text-white rounded-full flex items-center justify-center">
                                    {i + 1}
                                </span>
                                {doctrine.title}
                            </h3>

                            <div className="space-y-3 mb-4">
                                {doctrine.scriptures.map((scripture, j) => (
                                    <div key={j} className="bg-[#F8BBD0] rounded-xl p-4">
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
                <div className="text-center mb-10">
                    <span className="text-[#9E9E9E] text-sm uppercase tracking-widest font-medium">
                        1831 - 1847
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black/90 mt-2">
                        Períodos Históricos
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {historicalPeriods.map((period, i) => (
                        <div key={i} className={`${period.color} rounded-[2rem] p-6`}>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-black/80 text-xl">{period.name}</h3>
                                <span className="bg-white/50 px-3 py-1 rounded-full text-sm text-black/60">{period.years}</span>
                            </div>
                            <ul className="space-y-2">
                                {period.events.map((event, j) => (
                                    <li key={j} className="flex items-start gap-2 text-black/70 text-sm">
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
            <section className="mb-16">
                <div className="text-center mb-10">
                    <span className="text-[#9E9E9E] text-sm uppercase tracking-widest font-medium">
                        Cronología
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black/90 mt-2">
                        Línea del Tiempo
                    </h2>
                </div>

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
            <section className="mb-16 bg-[#FFF59D] rounded-[2.5rem] p-8 md:p-12">
                <div className="text-center mb-10">
                    <span className="text-black/40 text-sm uppercase tracking-widest font-medium">
                        1830 - Presente
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black/90 mt-2 mb-2">
                        Los Profetas de la Restauración
                    </h2>
                    <p className="text-black/60">
                        18 profetas han guiado la Iglesia desde su organización
                    </p>
                </div>

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

            {/* ============ ¿POR QUÉ SE LLAMA ASÍ? ============ */}
            <section className="mb-16 bg-[#B2EBF2] rounded-[2.5rem] p-8 md:p-12">
                <div className="text-center mb-10">
                    <span className="text-black/40 text-sm uppercase tracking-widest font-medium">
                        Revelado por Dios
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black/90 mt-2 mb-2">
                        ¿Por qué se llama La Iglesia de Jesucristo<br />de los Santos de los Últimos Días?
                    </h2>
                    <p className="text-black/60 text-lg max-w-2xl mx-auto">
                        El nombre fue revelado por el Señor el 26 de abril de 1838
                    </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 mb-8 text-center">
                    <p className="text-black/80 italic text-lg leading-relaxed mb-4">
                        "Porque así se llamará mi iglesia en los postreros días, a saber, <strong className="text-black/90">La Iglesia de Jesucristo de los Santos de los Últimos Días</strong>."
                    </p>
                    <p className="text-black/50 font-semibold text-sm">— Doctrina y Convenios 115:4</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {churchNameParts.map((item, i) => (
                        <div key={i} className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 text-center">
                            <div className="text-4xl mb-4"><FontAwesomeIcon icon={item.icon} /></div>
                            <h3 className="font-bold text-black/80 text-xl mb-3">"{item.part}"</h3>
                            <p className="text-black/60 text-sm">{item.meaning}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 bg-[#80DEEA] rounded-[2rem] p-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="text-5xl"><FontAwesomeIcon icon={faMicrophone} /></div>
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
            <section className="mb-16 bg-[#FFCCBC] rounded-[2.5rem] p-8 md:p-12">
                <div className="text-center mb-10">
                    <span className="text-black/40 text-sm uppercase tracking-widest font-medium">
                        1 de Marzo de 1842
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black/90 mt-2 mb-2">
                        Los 13 Artículos de Fe
                    </h2>
                    <p className="text-black/60 text-lg max-w-2xl mx-auto">
                        Declaración concisa de las creencias fundamentales de la Iglesia
                    </p>
                </div>

                {/* Origen */}
                <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 mb-8">
                    <h3 className="font-bold text-black/80 text-xl mb-4 flex items-center gap-3">
                        <span className="w-10 h-10 bg-[#FF7043] text-white rounded-full flex items-center justify-center"><FontAwesomeIcon icon={faScroll} /></span>
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
                                <li><FontAwesomeIcon icon={faCalendar} className="mr-2" /><strong>Fecha:</strong> 1 de marzo de 1842</li>
                                <li><FontAwesomeIcon icon={faNewspaper} className="mr-2" /><strong>Publicado en:</strong> Times and Seasons (Nauvoo)</li>
                                <li><FontAwesomeIcon icon={faBookOpen} className="mr-2" /><strong>Canonizado:</strong> 1880 en La Perla de Gran Precio</li>
                                <li><FontAwesomeIcon icon={faPen} className="mr-2" /><strong>Autor:</strong> Profeta José Smith</li>
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
