const express = require('express')

const app = express()

// 1. 導入解析表單數據的中間件 body-parser
const parser = require('body-parser')

// 2. 註冊並使用 body-parser
app.use(parser.urlencoded({extended: false}))
// app.use(express.urlencoded({extended: false}))


app.post('/user', (req, res) => {
    res.send('ok')
    console.log(req.body)
    
})


app.listen(3000, (req, res) => {
    console.log('http://127.0.0.1:3000')
})