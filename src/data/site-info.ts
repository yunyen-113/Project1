import type { SiteInfo } from '../types/menu'

export const siteInfo: SiteInfo = {
  name: {
    zh: '泰香廚房',
    en: 'Thai Aroma Kitchen',
    ja: 'タイアロマキッチン',
    ko: '타이 아로마 키친',
  },
  address: {
    zh: '台北市大安區忠孝東路四段 100 號',
    en: '100 Zhongxiao E. Rd., Sec. 4, Da\'an Dist., Taipei',
    ja: '台北市大安区忠孝東路四段 100 号',
    ko: '대만 타이베이시 다안구 중샤오둥루 4단 100호',
  },
  phone: '+886-2-2700-0000',
  hours: {
    zh: '週一至週日 11:30–21:30（週三公休）',
    en: 'Mon–Sun 11:30–21:30 (Closed Wed)',
    ja: '月〜日 11:30–21:30（水曜定休）',
    ko: '월–일 11:30–21:30 (수요일 휴무)',
  },
  note: {
    zh: '提供外帶・外送・包廂訂位',
    en: 'Takeout · Delivery · Private Dining Available',
    ja: 'テイクアウト・デリバリー・個室予約あり',
    ko: '포장 · 배달 · 룸 예약 가능',
  },
  heroEmoji: '🍜',
}

export const categoryLabels: Record<string, { zh: string; en: string; ja: string; ko: string }> = {
  appetizers: { zh: '前菜', en: 'Appetizers', ja: '前菜', ko: '전채' },
  soups:      { zh: '湯品', en: 'Soups',      ja: 'スープ', ko: '수프' },
  curries:    { zh: '咖哩', en: 'Curries',    ja: 'カレー', ko: '카레' },
  mains:      { zh: '主食', en: 'Mains',      ja: 'メイン', ko: '메인' },
  drinks:     { zh: '飲品', en: 'Drinks',     ja: 'ドリンク', ko: '음료' },
  desserts:   { zh: '甜點', en: 'Desserts',   ja: 'デザート', ko: '디저트' },
}
