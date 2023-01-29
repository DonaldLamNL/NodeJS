const express = require('express')
const qs = require('querystringify')

const app = express()

// 自定義解析表單數據的中間件
app.use((req, res, next) => {
    // 1. 定義 str 字符串，用於儲存客戶端傳送過來的請求體數據
    let str = ''

    // 2. 監聽 req 的 data 事件
    req.on('data', (chunk) => {
        str += chunk
    })

    // 3. 監聽 req 的 end 事件
    req.on('end', () => {
        // 在 str 中存放的是完整的請求體數據
        // console.log(str)
        
        // TODO: 把字符串格式的請求體數據，解析成對象格式
        const body = qs.parse(str)
        req.body = body
        next()
    })
})

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(3000, (req, res) => {
    console.log('Express server running at http://127.0.0.1:3000')
})