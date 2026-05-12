import { useLanguage } from '../hooks/useLanguage'
import TagBadge from './TagBadge'
import type { MenuItem, Lang } from '../types/menu'

interface MenuCardProps {
  item: MenuItem
  onOpen: (item: MenuItem) => void
}

function formatPrice(price: number): string {
  return `NT$${price}`
}

export default function MenuCard({ item, onOpen }: MenuCardProps) {
  const { lang } = useLanguage()
  const l = lang as Lang

  const priceDisplay = item.priceOptions
    ? item.priceOptions.map((o) => `${o.label[l]} ${formatPrice(o.price)}`).join(' / ')
    : item.price !== null
    ? formatPrice(item.price)
    : ''

  return (
    <button
      onClick={() => onOpen(item)}
      className="w-full text-left flex items-start gap-3 px-4 py-3 hover:bg-orange-50 active:bg-orange-100 transition-colors"
    >
      {/* Thumbnail */}
      <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-orange-50 flex items-center justify-center">
        {item.image ? (
          <img
            src={`${import.meta.env.BASE_URL}images/${item.image}`}
            alt={item.name[l]}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-4xl leading-none">{item.emoji}</span>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 text-sm leading-snug mb-0.5">{item.name[l]}</p>
        <p className="text-xs text-gray-500 leading-snug line-clamp-2 mb-1.5">
          {item.description[l]}
        </p>
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-1.5">
            {item.tags.map((tag) => (
              <TagBadge key={tag} code={tag} />
            ))}
          </div>
        )}
        <p className="text-sm font-semibold text-orange-600 leading-none">{priceDisplay}</p>
      </div>
    </button>
  )
}
