// 1. 導入express
const express = require('express')

// 2. 創建Web服務器
const app = express()

// 4. 監聽客戶端的 GET 和 POST 請求，並向客戶端響應內容
app.get('/user', (req, res) => {
    // 調用 express 提供的 res.send 方法向客戶端響應 JSON 對象
    res.send({name:'Donald', age:20, gender:'Male'})
})
app.post('/user', (req, res) => {
    // 調用 express 提供的 res.send 方法向客戶端響應文本字符串
    res.send('Request succeeded')
})
app.get('/', (req, res) => {
    console.log(req.query)
})



// 3. 啟動Web服務器
app.listen(8020, () => {
    console.log('express server running at http://127.0.0.1:8020')
})