const express = require('express')

const app = express()

// 定義第一個全局中間件
const mw1 = (req, res, next) => {
    console.log('This is the first middleware')
    next()
}
// 定義第二個全局中間件
const mw2 = (req, res, next) => {
    console.log('This is the second middleware')
    next()
}

app.use(mw2)    // 註冊第二個中間件
app.use(mw1)    // 註冊第一個中間件

app.get('/', (req, res) => {
    res.send('Home page')
})
app.get('/user', (req, res) => {
    res.send('User page')
})

app.listen(3000, (req, res) => {
    console.log('http://127.0.0.1:3000')
})