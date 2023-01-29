const express = require('express')
const router = express.Router()


// 定義 GET 接口
router.get('/get', (req, res) => {
    // 通過 req.query 獲取客戶端通過查詢字符串，發送到服務器的數據
    const query = req.query
    // 調用 res.send 方法向客戶端響應處理的結果
    res.send({
        state: 0,                       // 0 - 處理成功 | 1 - 處理失敗
        msg: 'GET request succeeded',   // 說明處理結果
        data: query                     // 需要響應給客戶端的數據
    })
})

// 定義 POST 接口
router.post('/post' ,(req, res) => {
    // 通過 req.body 獲取請求體中包含 urlencoded 格式的數據
    const body = req.body
    // 調用 res.send 方法向客戶端響應結果
    res.send({
        state: 0,
        msg: 'POST request succeeded',
        data: body
    })
})

// 定義 DELETE 接口
router.delete('/delete', (req, res) => {
    res.send({
        state: 0,
        msg: 'DELETE request succeeded'
    })
})


module.exports = router