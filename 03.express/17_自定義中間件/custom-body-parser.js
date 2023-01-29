const qs = require('querystringify')

// 自定義解析表單數據的中間件
const bodyParser = (req, res, next) => {
    // 1. 定義 str 字符串，用於儲存客戶端傳送過來的請求體數據
    let str = ''

    // 2. 監聽 req 的 data 事件
    req.on('data', (chunk) => {
        str += chunk
    })

    // 3. 監聽 req 的 end 事件
    req.on('end', () => {
        // 在 str 中存放的是完整的請求體數據
        // console.log(str)
        
        // TODO: 把字符串格式的請求體數據，解析成對象格式
        const body = qs.parse(str)
        req.body = body
        next()
    })
}

// 導出函數
module.exports = bodyParser