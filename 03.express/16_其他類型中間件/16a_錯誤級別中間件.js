const express = require('express')

const app = express()

// 1. 創建路由
app.get('/', (req, res) => {
    // 拋出自定義錯誤
    throw new Error('Server error')
    res.send('Home Page')
})

// 2. 錯誤級別中間件，捕獲項目的異常錯誤，防止程序的崩潰
app.use((err, req, res, next) => {
    console.error('ERROR!!!', err.message)    // 在服務器打印錯誤消息
    res.send('ERROR!!! ' + err.message)         // 向客戶端響應錯誤內容\
})

app.listen(3000, (req, res) => {
    console.log('http://127.0.0.1:3000')
})