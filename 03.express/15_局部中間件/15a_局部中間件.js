const express = require('express')

const app = express()

// 1. 定義中間件函數
const mw1 = (req, res, next) => {
    console.log('This is a local middleware')
    next()
}

// 2. 創建路由
app.get('/', mw1, (req, res) => {   // 註冊局部中間件
    res.send('Home page')
})
// 
app.get('/user', (req, res) => {
    res.send('User page')
})

app.listen(3000, (req, res) => {
    console.log('http://127.0.0.1:3000')
})