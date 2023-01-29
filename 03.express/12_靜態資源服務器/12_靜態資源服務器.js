const path = require('path')
const express = require('express')
const app = express()

// 調用 express.static 對外提供靜態資源
app.use(express.static(path.join(__dirname, '/files')))
app.use(express.static(path.join(__dirname, '/public')))


app.listen(8000, (req, res) => {
    console.log('express server running at http://127.0.0.1:8000')
})