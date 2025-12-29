import articles from "../articles";
import commandmentsCovenants from "../commandmentsCovenants";
import { doctrineBasics } from "../fundamentalTopics";
import missionarySkills from "../missionarySkills";
import restorationAuthority from "../restorationAuthority";
import scripturesRevelation from "../scripturesRevelation";

export const sections = [
  {
    id: "principles",
    title: "A. Principios Básicos",
    subtitle: "Doctrina básica del Evangelio",
    description: "Los fundamentos doctrinales que todo misionero debe dominar",
    icon: "star", // Principios Básicos - Fundamental/Brillante
    color: "blue",
    topics: doctrineBasics,
    stats: {
      topics: 10,
      scriptures: "50+",
      activities: "40+",
      questions: "50+",
    },
  },
  {
    id: "scriptures",
    title: "B. Escrituras y Revelación",
    subtitle: "Fundamentos escriturales",
    description: "El poder de las escrituras y la revelación continua",
    icon: "book", // Escrituras - Clásico y claro
    color: "emerald",
    topics: scripturesRevelation,
    stats: {
      topics: 10,
      scriptures: "35+",
      activities: "30+",
      questions: "40+",
    },
  },
  {
    id: "restoration",
    title: "C. Restauración y Autoridad",
    subtitle: "La restauración del evangelio",
    description: "La Primera Visión y la restauración de la autoridad",
    icon: "sun", // Restauración - Primera Visión/Luz
    color: "purple",
    topics: restorationAuthority,
    stats: {
      topics: 6,
      scriptures: "24+",
      activities: "18+",
      questions: "24+",
    },
  },
  {
    id: "commandments",
    title: "D. Mandamientos y Convenios",
    subtitle: "Vivir el evangelio",
    description: "Los mandamientos y convenios que nos acercan a Cristo",
    icon: "compass", // Mandamientos - Guía/Dirección
    color: "amber",
    topics: commandmentsCovenants,
    stats: {
      topics: 8,
      scriptures: "32+",
      activities: "24+",
      questions: "32+",
    },
  },
  {
    id: "skills",
    title: "E. Habilidades Misionales",
    subtitle: "Enseñar con poder",
    description: "Herramientas prácticas para enseñar el evangelio",
    icon: "wand-magic-sparkles", // Habilidades - El "arte" de enseñar
    color: "red",
    topics: missionarySkills,
    stats: {
      topics: 8,
      scriptures: "15+",
      activities: "60+",
      questions: "35+",
    },
  },
  {
    id: "articles",
    title: "F. Artículos",
    subtitle: "Estudios doctrinales profundos",
    description: "Análisis teológico de temas selectos del evangelio",
    icon: "feather-pointed", // Artículos - Escritura/Pluma
    color: "indigo",
    topics: articles,
    stats: {
      topics: articles.length,
      scriptures: "100+",
      activities: "0",
      questions: "15+",
    },
  },
];

export const getSectionById = (id) => {
  return sections.find((section) => section.id === id);
};

export const getTopicById = (sectionId, topicId) => {
  const section = getSectionById(sectionId);
  if (!section || !section.topics) return null;
  return section.topics.find((topic) => topic.id === parseInt(topicId));
};
