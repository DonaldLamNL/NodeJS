var http = require('http')

// 創建服務器
http.createServer((req,res)=>{
    // req 接收瀏覽器傳的參數

    // res 返回渲染的內容
    // res.writeHead(200, {
    //     "Content-Type":"text/html; charset=utf-8"
    // })
    res.writeHead(404, {"Content-Type":"text/html; charset=utf-8"})

    res.write(`
        <html>
            <b>Hello World</b>
            <div>你好</div>
        </html>
    `)
    // res.write('[1,2,3]')
    res.end()

}).listen(3000, ()=>{
    console.log('Server Started')
})