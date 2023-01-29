const express = require('express')

const app = express()

// 1. 定義中間件
const mw = (req, res, next) => {
    console.log('This is a middleware')
    // 把流轉關係轉交給下一個中間件或路由
    next()
}

// 2. 將 mw 註冊為全局生效的中間件
app.use(mw)

app.get('/', (req, res) => {
    console.log('This is a router')     // 全局中間件會優先被調用
    res.send('Home page')
})
app.get('/user', (req, res) => {
    res.send('User page')
})

app.listen(3000, (req, res) => {
    console.log('http://127.0.0.1:3000')
})