# User authentication
此專案利用 Express 和 MongoDB 打造簡單的帳號密碼檢查網站。

---

# 專案畫面
![](https://i.imgur.com/0yZ1coa.png)

---

# 環境建置
* Visual Studio Code
* Express 4.17.1
* Node.js
* express-handlebars 5.3.2
* cookie-parser 1.4.5
* mongoose 5.13.2

---

# 安裝流程
1. 開啟終端機，並cd 要放專案的位置並執行:
```
git clone https://github.com/ioriayaka/userlogin.git
```
2. 進入專案資料夾
```
cd userlogin
```
3. 安裝 npm 套件
```
npm install
```
4. 安裝 nodemon 套件 (若未安裝)
```npm install -g nodemon```
5. 新增種子資料
```
npm run seed
```
6. 啟動伺服器，執行 app.js 檔案
```
npm run dev
```
7. 當終端機出現以下字樣，表示啟動完成
```The Express server is running on http://localhost:3000```