# Zuoyanblogs

Zuoyanblogs博客專案是基於 <a href="https://github.com/matsuzaka-yuki/mizuki" target="_blank">Mizuki</a> 主題框架開源專案二次魔改，它是一個現代化、功能豐富的靜態博客模板，基於 <a href="https://astro.build/" target="_blank">Astro</a> 構建，具有先進的功能和精美的設計。

[![Node.js >= 20](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen)](https://nodejs.org/)
[![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue)](https://pnpm.io/)
[![Astro](https://img.shields.io/badge/Astro-5.15.3-orange)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)](https://www.typescriptlang.org/)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?logo=apache)](https://opensource.org/licenses/Apache-2.0)

💻 歡迎進入我的網站參觀：[點擊進入](https://www.zuoyanblogs.xyz/)

🌐 README 語言：[简体中文](./README.md) &nbsp; [English](./README.en.md) &nbsp; [日本語](./README.jp.md)

---

## 🔄 本專案的更新頻率

不定期同步更新 Mizuki 主題框架主線內容。未來計劃在框架功能基礎上進行客製化修改，版本號將統一以 Zuoyanblogs Custom Edition (CE) 作為後綴，代表其為 Zuoyanblogs 的輕度客製化版本（目前正在努力學習市面流行的網站框架，但還得等有空才行，嗚嗚嗚~~~）。

---

## 🛠 本專案魔改的內容

- 添加六個國家的站點語言文本，未來站點更新並同步更新站點語言文本。
- 添加多語言國際翻譯組件：
  - 魔改mobile-navbar樣式表適配translate面板樣式。
- 修改日歷樣式，並魔改最舒服的外觀：
  - 更改左右切換的icon。
  - 調整文章發布的底部小圓點的位置。
  - 調整右上角同天發布多文章的數字大小。
- 新增回饋頁面，並整合聯繫站長方式。
- 新增贊助頁面，並整合支付二維碼放置路徑。
- 新增站點即時時間。
- 新增外部連結確認彈跳窗，並魔改部分樣式。
- Toc側邊欄目錄從右側調整至左側的小組件側邊欄。
- 重構隱藏相冊邏輯，修復無法通過鏈接訪問的問題。
- 優化部分小組件動畫。

---

## ✨ 功能特性

想了解更多 Mizuki 的功能特性：<a href="https://docs.mizuki.mysqil.com/" target="_blank">進入 Mizuki Docs 官方網站</a>

### 🔧 組件配置系統重構
- **統一配置架構：** 全新的模塊化組件配置體系，支持動態組件管理和順序配置。
- **配置驅動的組件加載：** 重構 SideBar 組件，實現完全基於配置的組件加載機制。
- **統一控制開關：** 移除音樂播放器和公告組件的獨立 enable 開關，統一由 sidebarLayoutConfig 控制。
- **響應式布局適配：** 組件支持響應式布局，可根據設備類型自動調整顯示。

### 📐 布局系統優化
- **側邊欄位置動態調整：** 支持左右側邊欄切換，布局自動適配。
- **文章目錄智能定位：** 當側邊欄在右側時，文章導航自動移至左側，提供更好的閱讀體驗。
- **網格布局改進：** 優化 CSS Grid 布局，解決容器寬度異常問題。

### 🎛️ 配置文件格式標準化
- **標準化配置格式：** 創建統一的組件配置文件格式規範。
- **類型安全：** 完善的 TypeScript 類型定義，確保配置的類型安全。
- **可擴展性：** 支持自定義組件類型和配置選項。

### 🧹 代碼優化
- **測試文件清理：** 移除未使用的測試配置和依賴，減少專案體積。
- **代碼結構優化：** 改進組件架構，提升代碼可維護性。
- **性能提升：** 優化組件加載邏輯，提升頁面渲染性能。

### 🎨 設計與界面
- 基於 [Astro](https://astro.build) 和 [Tailwind CSS](https://tailwindcss.com) 構建。
- 使用 [Swup](https://swup.js.org/) 實現流暢的動畫和頁面過渡。
- 明暗主題切換，支持系統偏好檢測。
- 可自定義主題色彩和動態橫幅輪播。
- 全屏背景圖片，支持輪播、透明度和模糊效果。
- 全設備響應式設計。
- 使用 JetBrains Mono 字體的優美排版。

### 🔍 內容與搜索
- 基於 [Pagefind](https://pagefind.app/) 的高級搜索功能。
- [增強的 Markdown 功能](https://docs.mizuki.mysqil.com/press/Markdown/Markdown/)，支持語法高亮。
- 交互式目錄，支持自動滾動。
- RSS 和 Atom 訂閱生成。
- 閱讀時間估算。
- 文章分類和標籤系統。

### 📱 特色頁面
- **動漫追蹤頁面** - 追蹤您的動漫觀看進度和評分。
- **好友連結頁面** - 用精美卡片展示您好友的網站。
- **相簿頁面** - 記錄您生活中的美好時刻。
- **我的設備頁面** - 顯示您的設備資訊。
- **日記頁面** - 分享生活點滴，類似社群媒體。
- **文章存檔頁面** - 以時間軸形式有序地展示您的文章。
- **關於頁面** - 可自訂的個人介紹。
- **贊助頁面** - 贊助網站所有者，支持優質內容的創作。
- **回饋頁面** - 提交網站意見建議，與站長直接溝通。
- **專案頁面** - 開發專案組合。
- **技能頁面** - 技術技能和專長。
- **時間軸頁面** - 成長歷程與重要里程碑。

### 🛠 技術特性
- **增強代碼塊** - 基於 [Expressive Code](https://expressive-code.com/)。
- **數學公式支持** - KaTeX 渲染。
- **圖片優化** - PhotoSwipe 畫廊集成。
- **SEO 優化** - 包含站點地圖和元標籤。
- **性能優化** - 懶加載和緩存機制。
- **評論系統** - 支持 Twikoo 集成。

---

## ⚡ 如何運行該專案？

1. **克隆倉庫：**
```bash
git clone https://github.com/Zuoyan233/Zuoyanblogs.git
cd Zuoyanblogs
```

2. **安裝依賴：**
```bash
# 如果沒有安裝 pnpm，先安裝
npm install -g pnpm

# 安裝專案依賴
pnpm install
```

3. **配置博客：**
- 編輯 `src/config.ts` 自定義博客設置。
- 更新站點信息、主題色彩、橫幅圖片和社交鏈接。
- 配置特色頁面功能。
- (可選) 配置內容倉庫分離 - 了解詳細請閱讀 Mizuki Docs 的 [內容倉庫配置](https://docs.mizuki.mysqil.com/Other/separation/)。

4. **特色頁面配置**
- **追番頁面：** 在 `src/pages/anime.astro` 編輯動畫清單。
- **友鏈頁面：** 在 `src/content/spec/friends.md` 中編輯朋友資料。
- **相簿頁面：** 在 `public/images/albums/` 中編輯相簿訊息，如何使用請前往 [相簿功能使用說明](./public/images/albums/README.md)。
- **我的設備頁面：** 在 `src/data/devices.ts` 中編輯設備資訊。
- **日記頁面：** 在 `src/data/diary.ts` 編輯動態。
- **關於頁面：** 在 `src/content/spec/about.md` 中編輯內容。
- **贊助頁面：** 在 `src/content/spec/sponsors.md` 中編輯內容。
  - 編輯 `src/pages/posts/sponsors.astro` 中支付二維碼，支付二維碼存放路徑在 `public/images/sponsors` 中。
- **回饋頁面：** 在 `src/content/spec/feedback.md` 中編輯內容。
  - 編輯 `src/pages/posts/feedback.astro` 中站長的電子郵件信箱聯絡資訊。 
  - 編輯 `public/images/albums/contact` 中站長的社群軟體聯絡方式。
- **專案展示頁面：** 編輯 `src/data/projects.ts` 檔案中的展示內容。
- **技能展示頁面：** 編輯 `src/data/skills.ts` 檔案中的展示內容。
- **時間軸頁面：** 編輯 `src/data/timeline.ts` 檔案中的展示內容。

5. **文章內容管理**
- **建立新文章：** `pnpm new-post <檔案名稱>`。
- **編輯文章：** 修改 `src/content/posts/` 中的檔案。
- **自訂頁面：** 編輯 `src/content/spec/` 中的特殊頁面。
- **新增圖片：** 將圖片放在 `src/assets/` 或 `public/` 中。
- **Markdown 擴充語法:** 了解詳細請閱讀 Mizuki Docs 的 [Markdown 擴充語法](https://docs.mizuki.mysqil.com/press/Markdown/customize/)。

Frontmatter 欄位說明：
- **title**: 文章標題（必填）
- **published**: 發布日期（必需）
- **description**: 文章描述，用於 SEO 和預覽
- **image**: 封面圖片路徑（相對於文章檔）
- **tags**: 標籤數組，用於分類
- **category**: 文章分類
- **draft**: 設定為 `true` 在生產環境中隱藏文章
- **pinned**: 設定為 `true` 將文章置頂
- **lang**: 文章語言（僅當與網站預設語言不同時設定）

6. **啓動開發服務器：**
```bash
pnpm dev
```
博客將在 `http://localhost:4321` 可用。


7. **所有命令都在專案根目錄運行：**

| 命令 | 操作 |
|:---------------------------|:---------------------------------------|
| `pnpm install` | 安裝依賴 |
| `pnpm dev` | 在 `localhost:4321` 啓動本地開發服務器 |
| `pnpm build` | 構建生產站點到 `./dist/` |
| `pnpm preview` | 在部署前本地預覽構建 |
| `pnpm check` | 運行 Astro 錯誤檢查 |
| `pnpm format` | 使用 Biome 格式化代碼 |
| `pnpm lint` | 檢查並修復代碼問題 |
| `pnpm new-post <文件名>` | 創建新博客文章 |
| `pnpm astro ...` | 運行 Astro CLI 命令 |

爲了給開發者提供更流暢、熟悉的體驗，我們依然選擇 Biome 來處理代碼格式化和修復代碼。

盡管 Mizuki 7.6 版本後改爲使用 Prettier + ESLint，但我們認爲 Biome 的 “開箱即用” 特性與我們的工作流程匹配得更好，避免了額外的配置成本。


---

## 🙏 致謝

- [Mizuki](https://github.com/matsuzaka-yuki/Mizuki) – 基於 Fuwari 的增強版本。感謝您提供現代化且功能豐富的靜態部落格模板。
- [Fuwari](https://github.com/saicaca/fuwari) by saicaca – 本專案所基於的原始模板。感謝您創建了如此優美且功能強大的模板。
- [Yukina](https://github.com/WhitePaper233/yukina) – 感謝您提供的設計靈感與創意，協助塑造了此專案。Yukina 是一個展現卓越設計原則與使用者體驗的優雅部落格模板。
- [Firefly](https://github.com/CuteLeaf/Firefly) – 感謝您提供優秀的版面設計思路，如雙側邊欄佈局、文章雙欄網格等，以及部分小元件的設計與實現。
- [Twilight](https://github.com/spr-aachen/Twilight) – 感謝您提供的靈感與技術支援。Twilight 的動態桌布模式切換系統、響應式設計與過渡效果，顯著提升了此專案。

---

⭐ 如有問題或建議，請提交 [Issue](https://github.com/Zuoyan233/Zuoyanblogs/issues) 或 [Pull Request](https://github.com/Zuoyan233/Zuoyanblogs/pulls)。另外，您也可以透過 [我的網站反饋頁面](https://www.zuoyanblogs.xyz/feedback/) 與我們聯繫。您覺得這個專案有幫助，請考慮給它一個星標！