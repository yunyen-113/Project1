import type { MenuItem, MenuCategory } from '../types/menu'
import { menuRaw, categoryOrder } from './menu-raw'
import { categoryLabels } from './site-info'

// Translations for all raw (Chinese) fields
const translations: Record<
  string,
  {
    name: { en: string; ja: string; ko: string }
    description: { en: string; ja: string; ko: string }
    note?: { en: string; ja: string; ko: string }
    priceOptions?: Array<{ en: string; ja: string; ko: string }>
  }
> = {
  'spring-roll': {
    name: { en: 'Thai Spring Rolls', ja: 'タイ式春巻き', ko: '태국식 춘권' },
    description: {
      en: 'Crispy rolls stuffed with fresh vegetables, served with sweet chili sauce',
      ja: '新鮮な野菜を包んだ揚げ春巻き、スイートチリソース添え',
      ko: '신선한 채소를 넣은 바삭한 춘권, 스위트 칠리 소스 제공',
    },
  },
  satay: {
    name: { en: 'Chicken Satay', ja: 'チキンサテー', ko: '치킨 사테' },
    description: {
      en: 'Charcoal-grilled chicken skewers with peanut sauce and cucumber relish',
      ja: '炭火焼きチキン串、ピーナッツソースときゅうり添え',
      ko: '숯불 구이 닭꼬치, 땅콩 소스와 오이 피클 제공',
    },
  },
  'fish-cake': {
    name: { en: 'Thai Fish Cakes', ja: 'タイ風フィッシュケーキ', ko: '태국식 어묵' },
    description: {
      en: 'Pan-fried fish cakes served with cucumber vinegar dipping sauce',
      ja: '揚げ焼きフィッシュケーキ、きゅうり酢ソース添え',
      ko: '팬에 구운 어묵, 오이 식초 소스와 함께',
    },
  },
  'mango-salad': {
    name: { en: 'Green Papaya Salad', ja: 'グリーンパパイヤサラダ', ko: '그린 파파야 샐러드' },
    description: {
      en: 'Hand-pounded to order, tangy and refreshing',
      ja: '注文ごとに手作り、酸味と辛みが食欲をそそる',
      ko: '주문 즉시 손으로 만든, 상큼하고 매콤한 맛',
    },
  },
  'tom-yum': {
    name: { en: 'Tom Yum Soup', ja: 'トムヤムスープ', ko: '똠얌 수프' },
    description: {
      en: 'Authentic Thai hot-and-sour soup with lemongrass, galangal and kaffir lime leaves',
      ja: '本場のタイ風酸辣スープ、レモングラス・ガランガル・コブミカンの葉入り',
      ko: '정통 태국식 톰얌, 레몬그라스·갈랑갈·카피르 라임 잎으로 향 내림',
    },
    priceOptions: [
      { en: 'Chicken', ja: 'チキン', ko: '치킨' },
      { en: 'Seafood', ja: 'シーフード', ko: '해산물' },
      { en: 'Vegetarian', ja: 'ベジタリアン', ko: '채식' },
    ],
  },
  'tom-kha': {
    name: { en: 'Tom Kha Gai', ja: 'トムカーガイ', ko: '똠카가이' },
    description: {
      en: 'Creamy coconut milk soup with tender chicken and galangal',
      ja: 'ナチュラルな甘みのあるココナッツミルクスープ、柔らかいチキン入り',
      ko: '부드러운 코코넛 밀크 수프에 닭고기와 갈랑갈',
    },
  },
  'green-curry': {
    name: { en: 'Thai Green Curry', ja: 'グリーンカレー', ko: '그린 커리' },
    description: {
      en: 'Aromatic green chili curry with eggplant and coconut milk',
      ja: '青唐辛子ベースのカレーペースト、ナスとココナッツミルク入り',
      ko: '풋고추로 만든 커리 페이스트, 가지와 코코넛 밀크',
    },
    priceOptions: [
      { en: 'Chicken', ja: 'チキン', ko: '치킨' },
      { en: 'Beef', ja: 'ビーフ', ko: '소고기' },
      { en: 'Vegetarian', ja: 'ベジタリアン', ko: '채식' },
    ],
  },
  'red-curry': {
    name: { en: 'Thai Red Curry', ja: 'レッドカレー', ko: '레드 커리' },
    description: {
      en: 'Rich, mildly sweet red chili curry with bamboo shoots and Thai basil',
      ja: '赤唐辛子ベースの濃厚カレー、タケノコとバジル入り',
      ko: '홍고추 베이스의 진하고 달콤한 커리, 죽순과 바질',
    },
    priceOptions: [
      { en: 'Chicken', ja: 'チキン', ko: '치킨' },
      { en: 'Beef', ja: 'ビーフ', ko: '소고기' },
      { en: 'Vegetarian', ja: 'ベジタリアン', ko: '채식' },
    ],
  },
  'massaman-curry': {
    name: { en: 'Massaman Curry', ja: 'マッサマンカレー', ko: '마싸만 커리' },
    description: {
      en: 'Mild, rich curry with potato and peanuts',
      ja: '穏やかで濃厚なカレー、ジャガイモとピーナッツ入り',
      ko: '순하고 진한 커리, 감자와 땅콩이 들어간 풍성한 맛',
    },
  },
  'panang-curry': {
    name: { en: 'Panang Curry', ja: 'パナンカレー', ko: '파낭 커리' },
    description: {
      en: 'Thick, creamy curry with concentrated peanut flavor and fresh coconut milk',
      ja: '濃厚ピーナッツ風味のカレー、フレッシュココナッツミルク添え',
      ko: '진한 땅콩 풍미의 커리, 신선한 코코넛 밀크 사용',
    },
  },
  'pad-thai': {
    name: { en: 'Pad Thai', ja: 'パッタイ', ko: '팟타이' },
    description: {
      en: 'Classic Thai stir-fried rice noodles with bean sprouts, chives and crushed peanuts',
      ja: '定番タイ風炒め米麺、もやし・ニラ・砕きピーナッツ添え',
      ko: '고전 태국식 볶음 쌀국수, 숙주·부추·땅콩 가루 곁들임',
    },
    priceOptions: [
      { en: 'Chicken', ja: 'チキン', ko: '치킨' },
      { en: 'Shrimp', ja: 'エビ', ko: '새우' },
      { en: 'Vegetarian', ja: 'ベジタリアン', ko: '채식' },
    ],
  },
  'basil-stir-fry': {
    name: { en: 'Pad Krapow Moo', ja: 'ガパオライス(豚)', ko: '가파오 라이스 (돼지)' },
    description: {
      en: 'Spicy minced pork stir-fried with Thai holy basil, served with rice and fried egg',
      ja: 'スパイシーなミンチポークをガパオで炒め、ライスと目玉焼き添え',
      ko: '매콤한 다진 돼지고기를 바질로 볶아 밥과 계란 후라이와 함께',
    },
  },
  'pineapple-rice': {
    name: { en: 'Pineapple Fried Rice', ja: 'パイナップルチャーハン', ko: '파인애플 볶음밥' },
    description: {
      en: 'Served in half a pineapple, with cashews and raisins',
      ja: 'パイナップル半分に盛り付け、カシューナッツとレーズン入り',
      ko: '반 파인애플에 담아 낸 볶음밥, 캐슈넛과 건포도 곁들임',
    },
  },
  'pad-see-ew': {
    name: { en: 'Pad See Ew', ja: 'パッシーユー', ko: '팟씨유' },
    description: {
      en: 'Wide rice noodles stir-fried with egg and Chinese broccoli in dark soy sauce',
      ja: '幅広米麺を卵とカイランで炒め、濃口醤油で仕上げ',
      ko: '넓은 쌀국수에 달걀과 카이란을 넣어 진간장으로 볶은 면',
    },
    priceOptions: [
      { en: 'Chicken', ja: 'チキン', ko: '치킨' },
      { en: 'Beef', ja: 'ビーフ', ko: '소고기' },
    ],
  },
  'thai-tea': {
    name: { en: 'Thai Milk Tea', ja: 'タイミルクティー', ko: '타이 밀크티' },
    description: {
      en: 'Rich Thai tea with fresh milk, available hot or iced',
      ja: '香り豊かなタイ紅茶と生乳のブレンド、ホット・アイス選択可',
      ko: '진한 타이 홍차와 신선한 우유, 핫·아이스 선택 가능',
    },
    priceOptions: [
      { en: 'Hot', ja: 'ホット', ko: '따뜻하게' },
      { en: 'Iced', ja: 'アイス', ko: '차갑게' },
    ],
  },
  'lychee-juice': {
    name: { en: 'Lychee Sparkling Drink', ja: 'ライチスパークリング', ko: '리치 스파클링 음료' },
    description: {
      en: 'Refreshing lychee juice with sparkling water',
      ja: 'さわやかなライチジュースにスパークリングウォーターをプラス',
      ko: '상쾌한 리치 주스에 탄산수를 더한 음료',
    },
  },
  'coconut-water': {
    name: { en: 'Coconut Water', ja: 'ナチュラルコナッツウォーター', ko: '코코넛 워터' },
    description: {
      en: 'Pure natural coconut water, cool and refreshing',
      ja: '天然ピュアなコナッツウォーター、さっぱり涼しい',
      ko: '순수 천연 코코넛 워터, 시원하고 상쾌한',
    },
  },
  'mango-sticky-rice': {
    name: { en: 'Mango Sticky Rice', ja: 'マンゴーもち米', ko: '망고 찹쌀밥' },
    description: {
      en: 'Fresh mango with coconut-infused sticky rice, a Thai classic dessert',
      ja: '新鮮マンゴーとココナッツ風味のもち米、タイの定番スイーツ',
      ko: '신선한 망고와 코코넛 찹쌀, 태국의 대표 디저트',
    },
  },
  'coconut-ice-cream': {
    name: { en: 'Coconut Ice Cream', ja: 'ナチュラルコナッツアイスクリーム', ko: '코코넛 아이스크림' },
    description: {
      en: 'Handmade coconut milk ice cream with crushed peanuts and coconut jelly',
      ja: '手作りココナッツミルクアイスクリーム、砕きピーナッツとコナッツゼリー添え',
      ko: '수제 코코넛 밀크 아이스크림, 땅콩 가루와 코코넛 젤리 곁들임',
    },
  },
  'tub-tim-grob': {
    name: { en: 'Tub Tim Krob', ja: 'タプティムクロープ', ko: '탭팀크롭' },
    description: {
      en: 'Water chestnut coated in red tapioca, served with coconut milk shaved ice',
      ja: '赤いタピオカでコーティングしたクワイ、コナッツミルクかき氷添え',
      ko: '빨간 타피오카로 코팅한 마름열매, 코코넛 밀크 빙수와 함께',
    },
  },
}

function buildMenuItem(raw: (typeof import('./menu-raw').menuRaw)[number]): MenuItem {
  const t = translations[raw.id]
  const priceOpts = raw.priceOptions?.map((opt, i) => ({
    label: {
      zh: opt.label,
      en: t?.priceOptions?.[i]?.en ?? opt.label,
      ja: t?.priceOptions?.[i]?.ja ?? opt.label,
      ko: t?.priceOptions?.[i]?.ko ?? opt.label,
    },
    price: opt.price,
  })) ?? null

  return {
    id: raw.id,
    category: raw.category,
    name: {
      zh: raw.name,
      en: t?.name.en ?? raw.name,
      ja: t?.name.ja ?? raw.name,
      ko: t?.name.ko ?? raw.name,
    },
    description: {
      zh: raw.description ?? '',
      en: t?.description.en ?? raw.description ?? '',
      ja: t?.description.ja ?? raw.description ?? '',
      ko: t?.description.ko ?? raw.description ?? '',
    },
    price: raw.price ?? null,
    priceOptions: priceOpts,
    tags: raw.tags ?? [],
    emoji: raw.emoji,
    image: raw.image ?? null,
    note: raw.note
      ? {
          zh: raw.note,
          en: t?.note?.en ?? raw.note,
          ja: t?.note?.ja ?? raw.note,
          ko: t?.note?.ko ?? raw.note,
        }
      : null,
  }
}

const allItems: MenuItem[] = menuRaw.map(buildMenuItem)

export const menuCategories: MenuCategory[] = categoryOrder.map((catId) => ({
  id: catId,
  label: categoryLabels[catId] ?? { zh: catId, en: catId, ja: catId, ko: catId },
  items: allItems.filter((item) => item.category === catId),
}))
