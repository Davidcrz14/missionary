import { useEffect } from 'react'

const BASE_TITLE = 'Notas de Estudio — Misioneros SUD'

/**
 * Updates document.title for SEO and tab clarity.
 * @param {string} title - Page-specific title segment
 * @param {boolean} [override=false] - If true, uses title as-is without base suffix
 */
export function useDocumentTitle(title, override = false) {
    useEffect(() => {
        document.title = override
            ? title
            : title
                ? `${title} | ${BASE_TITLE}`
                : BASE_TITLE
    }, [title, override])
}
