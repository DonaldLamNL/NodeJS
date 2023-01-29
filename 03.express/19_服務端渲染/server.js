// 引入中間件
const express = require('express')
const cors = require('cors')

// 引入路由
const loginRouter = require('./router/loginRouter')
const homeRouter = require('./router/homeRouter')

// 創建 express 實例
const app = express()

// 靜態資源
app.use(express.static(__dirname + '/public'))
app.use('/js',express.static(__dirname + '/js'))

// 使用中間件
app.use(express.json())
app.use(cors())

// 註冊路由
app.use('/login', loginRouter)
app.use('/home', homeRouter)

app.listen(3000, (req, res) => {
    console.log('Express server running at http://127.0.0.1:3000')
})