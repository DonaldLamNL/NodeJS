const express = require('express')

const app = express()

// 1. 導入路由模塊
const userRouter = require('./router')

// 2. 註冊路由模塊
app.use('/api', userRouter)     // 添加訪問前綴

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})
