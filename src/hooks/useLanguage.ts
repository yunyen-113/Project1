import { createContext, useContext, useState, useCallback } from 'react'
import type { Lang } from '../types/menu'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'zh',
  setLang: () => undefined,
})

const STORAGE_KEY = 'menu-lang'

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
    if (stored && ['zh', 'en', 'ja', 'ko'].includes(stored)) return stored
  } catch {
    // localStorage unavailable
  }
  return 'zh'
}

export function useLanguageState(): LanguageContextValue {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }, [])

  return { lang, setLang }
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext)
}
