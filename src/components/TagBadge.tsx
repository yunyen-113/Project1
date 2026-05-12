import { tagMap } from '../data/tags'
import { useLanguage } from '../hooks/useLanguage'
import type { Lang } from '../types/menu'

interface TagBadgeProps {
  code: string
}

export default function TagBadge({ code }: TagBadgeProps) {
  const { lang } = useLanguage()
  const def = tagMap[code]
  if (!def) return null

  const label = def.label[lang as Lang]

  return (
    <span className="inline-flex items-center gap-0.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-[10px] font-medium px-1.5 py-0.5 leading-none whitespace-nowrap">
      <span>{def.icon}</span>
      <span>{label}</span>
    </span>
  )
}
