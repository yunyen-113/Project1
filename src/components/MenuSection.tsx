import { useLanguage } from '../hooks/useLanguage'
import MenuCard from './MenuCard'
import type { MenuCategory, MenuItem, Lang } from '../types/menu'

interface MenuSectionProps {
  category: MenuCategory
  onOpen: (item: MenuItem) => void
}

export default function MenuSection({ category, onOpen }: MenuSectionProps) {
  const { lang } = useLanguage()

  return (
    <section id={`cat-${category.id}`} className="scroll-mt-24">
      <div className="px-4 py-2 bg-gray-50 border-y border-gray-100">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
          {category.label[lang as Lang]}
        </h2>
      </div>
      <div className="divide-y divide-gray-100">
        {category.items.map((item) => (
          <MenuCard key={item.id} item={item} onOpen={onOpen} />
        ))}
      </div>
    </section>
  )
}
