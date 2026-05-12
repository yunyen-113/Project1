import { useEffect, useRef } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useScrollLock } from '../hooks/useScrollLock'
import TagBadge from './TagBadge'
import type { MenuItem, Lang } from '../types/menu'

interface ItemDetailModalProps {
  item: MenuItem | null
  onClose: () => void
}

function formatPrice(price: number): string {
  return `NT$${price}`
}

export default function ItemDetailModal({ item, onClose }: ItemDetailModalProps) {
  const { lang } = useLanguage()
  const l = lang as Lang
  const overlayRef = useRef<HTMLDivElement>(null)

  useScrollLock(item !== null)

  useEffect(() => {
    if (!item) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [item, onClose])

  if (!item) return null

  const priceDisplay = item.priceOptions
    ? item.priceOptions
        .map((o) => `${o.label[l]}  ${formatPrice(o.price)}`)
        .join('\n')
    : item.price !== null
    ? formatPrice(item.price)
    : ''

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={item.name[l]}
    >
      <div className="relative w-full max-w-md bg-white rounded-t-2xl max-h-[90dvh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 text-white text-lg leading-none"
          aria-label="Close"
        >
          ×
        </button>

        {/* Hero image or emoji */}
        <div className="w-full aspect-[4/3] bg-orange-50 flex items-center justify-center overflow-hidden rounded-t-2xl touch-pinch-zoom">
          {item.image ? (
            <img
              src={`${import.meta.env.BASE_URL}images/${item.image}`}
              alt={item.name[l]}
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ touchAction: 'pinch-zoom' }}
            />
          ) : (
            <span className="text-8xl leading-none">{item.emoji}</span>
          )}
        </div>

        {/* Content */}
        <div className="px-5 py-4 space-y-3">
          <h2 className="text-xl font-bold text-gray-900 leading-snug">{item.name[l]}</h2>

          {item.description[l] && (
            <p className="text-sm text-gray-600 leading-relaxed">{item.description[l]}</p>
          )}

          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <TagBadge key={tag} code={tag} />
              ))}
            </div>
          )}

          {/* Price */}
          <div className="pt-1">
            {item.priceOptions ? (
              <table className="w-full text-sm">
                <tbody>
                  {item.priceOptions.map((opt, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="py-1.5 text-gray-700">{opt.label[l]}</td>
                      <td className="py-1.5 text-right font-semibold text-orange-600">
                        {formatPrice(opt.price)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-lg font-bold text-orange-600">{priceDisplay}</p>
            )}
          </div>

          {item.note?.[l] && (
            <p className="text-xs text-gray-400 italic border-t border-gray-100 pt-3">
              {item.note[l]}
            </p>
          )}
        </div>

        {/* Safe-area spacer for iOS */}
        <div className="h-safe-area-bottom" style={{ height: 'env(safe-area-inset-bottom, 0)' }} />
      </div>
    </div>
  )
}
