# 👨‍💻 Portfolio Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Design-Responsive-green?style=for-the-badge)

> 適合工程師、設計師或自由接案者，用於展示技能與作品的個人檔案網站模板。

[👀 線上預覽 (Demo)](https://your-username.github.io/your-repo-name/)
*(請將上方連結替換為你的 Github Pages 網址)*


## ✨ 特色功能

這個專案旨在提供一個**輕量級**且**易於維護**的網站架構，不依賴龐大的前端框架 (如 React/Vue)。

* **📱 響應式設計 (RWD)**：完美支援桌機、平板與手機裝置，包含客製化的手機版漢堡選單。
* **🎨 易於客製化**：透過 CSS Variables (變數) 集中管理顏色系統，一秒切換網站主題色。
* **✨ 互動體驗**：內建 Loading 過場動畫、滾動視差 (Intersection Observer) 與手風琴收合效果。

## 🛠️ 使用技術

* **HTML5**: 語意化標籤 (Semantic HTML) 結構，SEO 友善。
* **CSS3**: Flexbox & Grid 排版，搭配 CSS Variables 進行設計系統管理。
* **JavaScript (ES6+)**: 模組化撰寫，使用 Intersection Observer API 處理滾動動畫。
* **Bootstrap Icons**: 輕量級的 SVG 圖示庫 (透過 CDN 引入)。

## 🚀 如何使用

由於這是靜態網站，你只需要直接用瀏覽器打開 `index.html` 即可預覽。
或是使用 VS Code 的 **Live Server** 套件開啟。

## ⚙️ 客製化網站

本專案經過結構優化，您可以輕鬆修改以下內容變成自己的網站：

### 1. 修改主題顏色

打開 `css/style.css`，找到最上方的 `:root` 區塊：

```css
:root {
  --color-primary: #25343f;  /* 修改這裡改變主色 (文字/Footer) */
  --color-accent: #ff9b51;   /* 修改這裡改變強調色 (按鈕/底線) */
  --color-bg: #eaefef;       /* 修改這裡改變背景色 */
}

```

### 2. 修改個人資料

打開 `index.html`，搜尋關鍵字 `[修改提示]`，即可找到需要替換的文字區塊：

* **大頭貼**：替換 `images/sticker.jpg`。
* **社群連結**：修改 `href` 屬性中的網址。
* **作品集**：複製 `<article class="portfolio-card">`區塊來新增更多作品。

### 3. 設定 Email

打開 `index.html` 與 `js/script.js`，搜尋 `h79jkl345@gmail.com` 並替換為您的 Email 地址，確保聯絡功能正常。

## 📁 檔案結構

```text
.
├── index.html          # 網站主頁 (內容結構)
├── styles/
│   └── style.css       # 樣式表 (設計系統)
├── js/
│   └── script.js       # 邏輯控制 (動畫、選單)
├── images/             # 圖片素材
│   ├── sticker.png     # 大頭貼
│   └── favicon.ico     # 網站圖示
└── README.md           # 專案說明文件

```