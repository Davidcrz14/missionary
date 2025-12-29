import {
    faBook,
    faCompass,
    faFeatherPointed,
    faStar,
    faSun,
    faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Mapa de nombres de iconos a componentes FontAwesome
const iconMap = {
  'star': faStar,
  'book': faBook,
  'sun': faSun,
  'compass': faCompass,
  'wand-magic-sparkles': faWandMagicSparkles,
  'feather-pointed': faFeatherPointed
}

const SectionIcon = ({ iconName, className = "text-4xl" }) => {
  const icon = iconMap[iconName]

  if (!icon) {
    console.warn(`Icon "${iconName}" not found in iconMap`)
    return null
  }

  return <FontAwesomeIcon icon={icon} className={className} />
}

export default SectionIcon
