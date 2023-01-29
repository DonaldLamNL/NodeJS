var http = require('http')

var moduleRenderHTML = require('./modules/renderHTML')
var moduleRenderStatus = require('./modules/renderStatus')

const server = http.createServer()

server.on("request", (req, res)=>{
    // req 接收瀏覽器傳的參數
    if(req.url === '/favicon.ico'){
        // 讀取本地圖表
        return
    }

    // res 返回渲染的內容
    res.writeHead(moduleRenderStatus.renderStatus(req.url), {
        "Content-Type":"text/html; charset=utf-8"
    })

    res.write(moduleRenderHTML.renderHTML(req.url))

    res.end()
})

server.listen(3000, ()=>{
    console.log('Server Started')
})