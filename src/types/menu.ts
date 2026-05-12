export type Lang = 'zh' | 'en' | 'ja' | 'ko'

export interface I18nText {
  zh: string
  en: string
  ja: string
  ko: string
}

export interface PriceOption {
  label: I18nText
  price: number
}

export interface MenuItem {
  id: string
  category: string
  name: I18nText
  description: I18nText
  price: number | null         // null when priceOptions is used
  priceOptions: PriceOption[] | null
  tags: string[]
  emoji: string
  image: string | null         // filename in public/images/, or null
  note: I18nText | null
}

export interface MenuCategory {
  id: string
  label: I18nText
  items: MenuItem[]
}

export interface TagDef {
  code: string
  icon: string
  label: I18nText
}

export interface SiteInfo {
  name: I18nText
  address: I18nText
  phone: string
  hours: I18nText
  note: I18nText
  heroEmoji: string
}

// Simplified raw format (what the store owner edits)
export interface RawPriceOption {
  label: string
  price: number
}

export interface RawMenuItem {
  id: string
  category: string
  name: string
  description?: string
  price?: number
  priceOptions?: RawPriceOption[]
  tags?: string[]
  emoji: string
  image?: string | null
  note?: string
}
