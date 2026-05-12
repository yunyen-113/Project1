import { useState } from 'react'
import { LanguageContext, useLanguageState } from './hooks/useLanguage'
import { menuCategories } from './data/menu-i18n'
import Header from './components/Header'
import LanguageSwitcher from './components/LanguageSwitcher'
import CategoryNav from './components/CategoryNav'
import MenuSection from './components/MenuSection'
import ItemDetailModal from './components/ItemDetailModal'
import type { MenuItem } from './types/menu'

export default function App() {
  const languageState = useLanguageState()
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null)

  return (
    <LanguageContext.Provider value={languageState}>
      <div className="min-h-screen bg-white max-w-md mx-auto font-sans">
        <Header />
        <LanguageSwitcher />
        <CategoryNav />
        <main>
          {menuCategories.map((cat) => (
            <MenuSection key={cat.id} category={cat} onOpen={setActiveItem} />
          ))}
        </main>
        <footer className="py-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} 泰香廚房
        </footer>
      </div>
      <ItemDetailModal item={activeItem} onClose={() => setActiveItem(null)} />
    </LanguageContext.Provider>
  )
}
