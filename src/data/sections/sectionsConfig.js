import { doctrineBasics } from '../fundamentalTopics'
import scripturesRevelation from '../scripturesRevelation'

export const sections = [
  {
    id: 'principles',
    title: 'A. Principios Básicos',
    subtitle: 'Doctrina básica del Evangelio',
    description: 'Los fundamentos doctrinales que todo misionero debe dominar',
    icon: '🛡️',
    color: 'blue',
    topics: doctrineBasics,
    stats: { topics: 10, scriptures: '50+', activities: '40+', questions: '50+' }
  },
  {
    id: 'scriptures',
    title: 'B. Escrituras y Revelación',
    subtitle: 'Fundamentos escriturales',
    description: 'El poder de las escrituras y la revelación continua',
    icon: '📖',
    color: 'green',
    topics: scripturesRevelation,
    stats: { topics: 10, scriptures: '35+', activities: '30+', questions: '40+' }
  },
  {
    id: 'restoration',
    title: 'C. Restauración y Autoridad',
    subtitle: 'La restauración del evangelio',
    description: 'La Primera Visión y la restauración de la autoridad',
    icon: '⚡',
    color: 'purple',
    topics: [], // Pendiente
    stats: { topics: 10, scriptures: '30+', activities: '25+', questions: '35+' }
  },
  {
    id: 'commandments',
    title: 'D. Mandamientos y Convenios',
    subtitle: 'Vivir el evangelio',
    description: 'Los mandamientos y convenios que nos acercan a Cristo',
    icon: '📋',
    color: 'amber',
    topics: [], // Pendiente
    stats: { topics: 10, scriptures: '25+', activities: '30+', questions: '30+' }
  },
  {
    id: 'skills',
    title: 'E. Habilidades Misionales',
    subtitle: 'Enseñar con poder',
    description: 'Herramientas prácticas para enseñar el evangelio',
    icon: '🎯',
    color: 'red',
    topics: [], // Pendiente
    stats: { topics: 10, scriptures: '20+', activities: '50+', questions: '40+' }
  }
]

export const getSectionById = (id) => {
  return sections.find(section => section.id === id)
}

export const getTopicById = (sectionId, topicId) => {
  const section = getSectionById(sectionId)
  if (!section || !section.topics) return null
  return section.topics.find(topic => topic.id === parseInt(topicId))
}
