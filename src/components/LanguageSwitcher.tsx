import { useLanguage } from '../hooks/useLanguage'
import type { Lang } from '../types/menu'

const langs: { code: Lang; label: string }[] = [
  { code: 'zh', label: '繁中' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
]

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="sticky top-0 z-40 flex justify-end gap-1 px-3 py-2 bg-white/90 backdrop-blur border-b border-gray-100">
      {langs.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
            lang === code
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
