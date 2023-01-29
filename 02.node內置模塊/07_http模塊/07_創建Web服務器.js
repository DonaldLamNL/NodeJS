// 導入http模塊
const http = require('http')

// 創建web服務器實例
const server = http.createServer()

// 為服務器綁定request事件，監聽客戶端請求
server.on('request', (req,res) => {
    console.log('Someone visit web server')
})
// 啟動服務器
server.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000')
})