const express = require('express')
const app = express()

// 配置解析表單數據的中間件
app.use(express.urlencoded({ extended: false }))

// 必須在配置 cors 中間件前配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => {
    // 1. 得到函數的名稱
    const functName = req.query.callback

    // 2. 定義要發送到客戶端的數據對象
    const data = {name: 'Donald', age: 99}

    // 3. 拼接出一個函數的調用
    const scriptStr = `${functName}(${JSON.stringify(data)})`

    // 4. 把拼接的字符串響應給客戶端
    res.send(scriptStr)
})

// 路由之前配置 cors 中間件，以解決跨域問題
const cors = require('cors')
app.use(cors())

// 導入路由模塊
const router = require('./apiRouter')
// 註冊路由模塊
app.use('/api', router)

app.listen(3000, (req, res) => {
    console.log('Express server running at http://127.0.0.1:3000')
})