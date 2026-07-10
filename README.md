# TAIWAN Weather｜台灣各縣市天氣預報

台灣各縣市天氣預報網站，串接中央氣象署（CWA）開放資料，提供未來一週天氣預報、今明 36 小時天氣預報，並支援 GPS 自動定位鎖定所在縣市。

> 本專案原為 Bootcamp 多人協作專案，隨著 Bootcamp 結束，團隊協作也隨著告一段落。此 repo 為個人 fork 後的後續維護版本，僅視情況修正氣象資料來源異動等問題。

https://github.com/user-attachments/assets/084f3b4f-bb14-4738-be6e-c7c10ed893e2

## 動機

這是 2022 年參加前端 Bootcamp 時，與團隊合作開發的專案。當時想解決的問題是：查詢天氣得在 App 裡一個個縣市切換才看得到，因此想做一個能一頁瀏覽全台各縣市天氣、並自動用 GPS 定位鎖定所在地區的網站，以中央氣象局（現為中央氣象署）公開資料實作。

## 我的角色

專案於 Bootcamp 期間（2022/04）由 4 人合作開發，各自負責不同功能模組。我主要負責：

- **天氣資料渲染核心模組**（`src/modules/renderWeatherData.js`）：未來一週天氣預報、今明 36 小時天氣預報的資料解析與畫面渲染邏輯
- **API 串接與資料處理**（`src/modules/tool.js`）：中央氣象局資料的 fetch 與格式化
- **載入動畫效果**（`src/modules/weatherLoadingEffect.js`）
- 修正跨瀏覽器相容性問題（iOS Safari 對日期字串解析的差異）、GPS 定位資料與天氣渲染模組的整合等 bug

團隊解散後，我持續獨立維護這個專案：

- 因應氣象局 API 端點調整，將串接邏輯從舊版 CWB 遷移到新版 CWA API
- 發現並修復先前版本中 API 金鑰直接寫死在原始碼裡的問題，改為透過 `.env` 管理，並完成金鑰替換

## 功能

- 選擇縣市查看未來一週天氣預報（天氣現象圖示）
- 今明 36 小時天氣預報（最高溫、最低溫、天氣現象文字與圖示）
- GPS 定位，自動比對並鎖定最近的氣象站/縣市
- 「全臺縣市」一次顯示所有縣市天氣
- 首頁雲朵視差動畫、Header 滾動變色、載入動畫等視覺效果

## 技術

- 原生 JavaScript（ES Module）
- Webpack 5 + `dotenv-webpack`（打包與環境變數帶入）
- 中央氣象署開放資料平台 API（[CWA OpenData](https://opendata.cwa.gov.tw/)）

## 專案結構

```
.
├── index.html                      # 主頁面
├── src/
│   ├── index.js                    # 入口，載入各功能模組與樣式
│   └── modules/
│       ├── tool.js                 # 共用工具、氣象資料 fetch 與解析
│       ├── renderWeatherData.js    # 天氣資料渲染（核心模組）
│       ├── dropDownMenu.js         # 縣市下拉選單
│       ├── gps2.js                 # GPS 定位、比對最近氣象站
│       ├── weather-svg.js          # 天氣圖示 SVG
│       ├── weatherLoadingEffect.js # 載入動畫
│       ├── headerColorChange.js    # Header 滾動變色
│       └── transformCloud.js       # 首頁雲朵視差動畫
├── dist/
│   ├── css/                        # 靜態樣式，由 index.html / linkCss() 直接引用
│   ├── font/                       # 靜態資源，Fontello 圖示字型
│   └── js/bundle.js                # 唯一由 webpack 打包產出的檔案（src/ 的打包結果）
└── webpack.config.js
```

## 環境設定與啟動

1. 安裝

   ```bash
   npm install
   ```

2. 於專案根目錄建立 `.env`，填寫中央氣象署 API 資訊：

   ```
   API_URL=https://opendata.cwa.gov.tw/api/v1/rest/datastore/
   API_KEY=你的 CWA API 授權碼（金鑰）
   ```

   API 授權碼（金鑰）可至 [中央氣象署開放資料平台](https://opendata.cwa.gov.tw/) 註冊會員後取得。`.env` 已加入 `.gitignore`，請勿將金鑰提交進版本控制。

3. 開發模式打包（輸出至 `dist/`）

   ```bash
   npm run dev
   ```

4. 正式環境打包

   ```bash
   npm run deploy
   ```

5. 打包完成後，直接以瀏覽器開啟 `index.html`，或用任一靜態伺服器（如 VSCode Live Server）預覽。

## 資料來源異動說明

- 原氣象局（CWB）API 已停用，改為中央氣象署（CWA）新版 API：網域與端點 URL、回傳 JSON 資料的欄位名稱皆有調整；授權方式不變，仍是以 `Authorization` query 帶入金鑰。
- `src/modules/tool.js` 中的 `fetchWeatherData` 改用 `process.env.API_URL` / `process.env.API_KEY`（透過 `.env` 注入），避免金鑰硬編碼於原始碼中。
