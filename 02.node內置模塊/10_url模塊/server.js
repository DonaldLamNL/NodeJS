var http = require('http')
var url = require('url')
const { fileURLToPath } = require('url')
var moduleRenderHTML = require('./modules/renderHTML')
var moduleRenderStatus = require('./modules/renderStatus')

const server = http.createServer()

server.on("request", (req, res)=>{
    if(req.url === '/favicon.ico') return
    
    const myURL = new URL(req.url, 'https://127.0.0.1:3000')
    console.log(myURL.searchParams)

    for(var [key,value] of myURL.searchParams){
        console.log(key, value)
    }

    console.log(myURL.searchParams.get('name'))

    const pathname = myURL.pathname

    res.writeHead(moduleRenderStatus.renderStatus(pathname), {"Content-Type":"text/html; charset=utf-8"})
    res.write(moduleRenderHTML.renderHTML(pathname))
    res.end()
})

server.listen(3000, ()=>{
    console.log('Server Started')
})

// 拼接路徑
const a = new URL('five', 'http://example.com/one/two/three/four')
console.log(a.href)

// format用法
console.log('-------------- format --------------')
const myURL = new URL('https://a:b@測試?abc#foo')
console.log(url.format(myURL,{
    auth:false,
    fragment:false,
    search:false,
    unicode:true,
}))

// 提取pathname
console.log('-------------- file pathname --------------')
console.log(new URL('file:///Users/donald/測試.txt').pathname)
console.log(fileURLToPath('file:///Users/donald/測試.txt'))
