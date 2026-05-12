import { useRef } from 'react'
import { menuCategories } from '../data/menu-i18n'
import { useLanguage } from '../hooks/useLanguage'
import type { Lang } from '../types/menu'

export default function CategoryNav() {
  const { lang } = useLanguage()
  const navRef = useRef<HTMLDivElement>(null)

  function scrollToSection(id: string) {
    const el = document.getElementById(`cat-${id}`)
    if (!el) return
    const offset = 88 // sticky header height approx
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-[41px] z-30 bg-white border-b border-gray-100 shadow-sm">
      <div
        ref={navRef}
        className="flex gap-1 px-3 py-2 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollToSection(cat.id)}
            className="shrink-0 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors"
          >
            {cat.label[lang as Lang]}
          </button>
        ))}
      </div>
    </nav>
  )
}
