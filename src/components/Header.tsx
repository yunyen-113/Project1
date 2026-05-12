import { siteInfo } from '../data/site-info'
import { useLanguage } from '../hooks/useLanguage'
import type { Lang } from '../types/menu'

export default function Header() {
  const { lang } = useLanguage()
  const l = lang as Lang

  return (
    <header className="bg-gradient-to-b from-orange-600 to-orange-500 text-white px-4 pt-8 pb-6">
      <div className="text-center mb-4">
        <div className="text-6xl mb-2 leading-none">{siteInfo.heroEmoji}</div>
        <h1 className="text-2xl font-bold tracking-wide">{siteInfo.name[l]}</h1>
      </div>

      <div className="space-y-1.5 text-sm text-orange-100">
        <div className="flex items-start gap-2">
          <span className="mt-0.5 shrink-0">📍</span>
          <span>{siteInfo.address[l]}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="shrink-0">📞</span>
          <a href={`tel:${siteInfo.phone}`} className="underline underline-offset-2">
            {siteInfo.phone}
          </a>
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-0.5 shrink-0">🕐</span>
          <span>{siteInfo.hours[l]}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-0.5 shrink-0">ℹ️</span>
          <span>{siteInfo.note[l]}</span>
        </div>
      </div>
    </header>
  )
}
