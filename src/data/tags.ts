import type { TagDef } from '../types/menu'

export const tagDefs: TagDef[] = [
  {
    code: 'spicy1',
    icon: '🌶',
    label: { zh: '微辣', en: 'Mild Spicy', ja: '辛さ控えめ', ko: '약간 매움' },
  },
  {
    code: 'spicy2',
    icon: '🌶🌶',
    label: { zh: '中辣', en: 'Medium Spicy', ja: '中辛', ko: '보통 매움' },
  },
  {
    code: 'spicy3',
    icon: '🌶🌶🌶',
    label: { zh: '大辣', en: 'Very Spicy', ja: '激辛', ko: '매우 매움' },
  },
  {
    code: 'veg',
    icon: '🥦',
    label: { zh: '蔬食', en: 'Vegetarian', ja: 'ベジタリアン', ko: '채식' },
  },
  {
    code: 'v5',
    icon: '🌿',
    label: { zh: '五辛素', en: 'Vegan (No Allium)', ja: '五葷なし素食', ko: '오신채 없음' },
  },
  {
    code: 'meat',
    icon: '🥩',
    label: { zh: '含肉', en: 'Contains Meat', ja: '肉含む', ko: '육류 포함' },
  },
  {
    code: 'gluten-free',
    icon: '🌾',
    label: { zh: '無麩質', en: 'Gluten Free', ja: 'グルテンフリー', ko: '글루텐 프리' },
  },
  {
    code: 'seafood',
    icon: '🦐',
    label: { zh: '海鮮', en: 'Seafood', ja: 'シーフード', ko: '해산물' },
  },
  {
    code: 'nut',
    icon: '🥜',
    label: { zh: '含堅果', en: 'Contains Nuts', ja: 'ナッツ含む', ko: '견과류 포함' },
  },
]

export const tagMap = Object.fromEntries(tagDefs.map((t) => [t.code, t]))
