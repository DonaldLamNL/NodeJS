const express = require('express')

const app = express()

// 1. 定義中間件
const mw = (req, res, next) => {
    // 獲取請求到達服務器時間
    req.startTime = Date.now()
    next()
}

// 2. 將 mw 註冊為全局生效的中間件
app.use(mw)

app.get('/', (req, res) => {
    // const time = Date.now()
    res.send('Home page ' + req.startTime)
})
app.get('/user', (req, res) => {
    // const time = Date.now()
    res.send('User page ' + req.startTime)
})

app.listen(3000, (req, res) => {
    console.log('http://127.0.0.1:3000')
})