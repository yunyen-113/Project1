# 泰香廚房 線上菜單

靜態餐廳菜單網站，使用 React 18 + TypeScript + Vite + Tailwind CSS 建置，部署於 GitHub Pages。

## 本地開發

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 建置至 dist/
npm run preview  # 本地預覽 build 結果
```

## 更新菜單資料

編輯 `src/data/menu-raw.ts`，只需維護中文欄位；多語言翻譯集中在 `src/data/menu-i18n.ts`。

### 新增品項照片

1. 將照片放入 `public/images/`（例如 `red-curry.jpg`）
2. 在 `menu-raw.ts` 對應品項的 `image` 欄位填入檔名：
   ```ts
   { id: 'red-curry', ..., image: 'red-curry.jpg' }
   ```

## 部署到 GitHub Pages

1. Push 至 `main` 分支，GitHub Actions 自動執行 build + deploy
2. 首次部署前：Repository → **Settings** → **Pages** → **Source** 選 **GitHub Actions**
3. 部署後網址：`https://<username>.github.io/<repo-name>/`

## 新增標記

在 `src/data/tags.ts` 的 `tagDefs` 陣列新增一筆，格式：

```ts
{
  code: 'new-tag',
  icon: '🆕',
  label: { zh: '新標記', en: 'New Tag', ja: '新タグ', ko: '새 태그' },
}
```
