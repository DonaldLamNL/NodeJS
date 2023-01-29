const express = require('express')

const app = express()

// 通過 express.json() 這個中間件，解析表單中的 JSON 格式的數據
app.use(express.json())
// 通過 express.urlencoded() 這個中間件，解析表單中的 urlencoded 格式的數據
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res) => {
    res.send('ok')
    // 服務器中使用 req.body 屬性接收客戶端發送過來的請求體數據
    // 默認情況下，如果不配置解析表單數據的中間件，則 req.body 默認值為 undefined
    console.log(req.body)
})

app.post('/book', (req, res) => {
    res.send('ok')
    // 默認情況下，如果不配置解析表單數據的中間件，則 req.body 默認值為空對象
    console.log(req.body)
})

app.listen(3000, (req, res) => {
    console.log('http://127.0.0.1:3000')
})