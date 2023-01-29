const express = require('express')

// 1. 導入自定義中間件模塊
const customBodyParser = require('./custom-body-parser')

const app = express()

// 2. 將自定義的中間件函數註冊為全局可用的中間件
app.use(customBodyParser)

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(3000, (req, res) => {
    console.log('Express server running at http://127.0.0.1:3000')
})