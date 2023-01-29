# NodeJS

## NodeJS簡介
1. NodeJS簡介：
   - NodeJS 是一個 JavaScript 運行環境，讓 JavaScript 可以開發後端程序，實現幾乎其他後端語言實現的所有功能，可以與 PHP、Java、Python 等後端語言平起平坐
   - NodeJS 是基於 V8 引擎，而 V8 是 Google 發布的開源 JavaScript 引擎


2. NodeJS特性：
   - NodeJS 語法完全是 JS 語法
   - NodeJS 超強的高並能力，實現高性能服務器
   - 開發週期短、開發成本低、學習成本低


3. NodeJS注意：
    - 瀏覽器是 JavaScript 的前端運行環境
    - Node.js 是 JavaScript 的後端運行環境
    - Node.js 中無法調用 DOM 和 BOM 等瀏覽器內置 API


4. NodeJS學習路徑：
    JavaScript 基礎語法 + Node.js 內置 API 模塊(`fs`, `path`, `http`) + 第三方 API 模塊(`express`, `mysql`)



## Npm
1. 基本指令：
    | 指令 | 說明 |
    | :---: | :---: |
    | `npm init` | 開始新項目，初始化紀錄文件 |
    | `npm i` | 安裝項目的全部依賴 |
    |  |  |
    | `npm install -g "packageName"` | 安裝（`-g`表示全局操作） |
    | `npm uninstall -g "packageName"` | 卸載 |
    | `npm update -g "packageName"` | 更新 |
    |  |  |
    | `npm list -g` | 列舉安裝包（不加`-g`列舉當前目錄下的安裝包） |
    | `npm info "packageName"` | 查看安裝包的詳細信息 |
    | `npm install "packageName"@"version"` | 安裝指定版本 |
    | `npm outdated` | 檢查安裝包是否過時 |



2. `package.json`文件紀錄：
    ```json
    "dependencies": {
        "md5": "^2.1.0"     // ^ 表示如果直接 npm install 將會安裝 md5 2.* 版本
    }

    "dependencies": {
        "md5": "~2.1.0"     // ~ 表示如果直接 npm install 將會安裝 md5 2.1.* 版本
    }

    "dependencies": {
        "md5": "*"          // * 表示如果直接 npm install 將會安裝 md5 最新版本
    }
    ```



## nodemon
1. 作用：
    - 每次修改服務器腳本文件都會重新啟動服務器


2. 安裝：
    ```bash
    sudo npm install -g nodemon
    ```


3. 使用：
    ```bash
    sudo nodemon 'file'
    ```



## Nrm
1. 簡介：
    - NRM (npm registry manager) 是`npm`的鏡像源管理工具，可以加速在`npm`源間切換


2. 基本指令：
    | 指令 | 說明 |
    | :---: | :---: |
    | `npm install -g nrm` | 安裝`nrm` |
    |  |  |
    | `nrm ls` | 查看可選源，其中帶有`*`的是當前使用的源 |
    | `npm config get registry` | 查看使用中的`nrm` |
    | `npm config set registry "url"` | 手動切換鏡像 |
    | `nrm use "xxx"` | 切換`nrm`：切換到xxx源 |
    | `nrm test` | 測試速度 |



## Yarn
1. 簡介：
    - 速度超快：Yarn 緩存了每個下載過的包，所以在此使用時無需重複下載。同時利用並行下載以最大化資源利用率，因此安裝速度更快
    - 超級安全：在執行代碼前，Yarn 會通過算法校驗每個安裝包的完整性


2. 基本指令：
    | 指令 | 說明 |
    | :---: | :---: |
    | `npm i -g yarn` | 安裝`yarn` |
    | `yarn init` | 開始新項目，初始化紀錄文件 |
    | `yarn install` | 安裝項目的全部依賴 |
    |  |  |
    | `yarn add "packageName"` | 添加依賴包 |
    | `yarn add "packageName"@'version'` |
    | `yarn add "packageName"--dev` |
    |  |  |
    | `yarn upgrade "packageName"@'version'` | 升級依賴包 |
    | `yarn remove "packageName"` | 移除依賴包 |



## CommonJS規範
1. 介紹：
    - 將公共的功能抽離成為一個單獨的`js`文件呢作為一個模塊化，默認情況下面這個模塊裡面的方法或屬性，外面是無法訪問的。
    - 如果要讓外部可以訪問模塊裡面的方法或屬性，就必須在模塊裡通過`exports`或者`module.exports`暴露


2. 接口暴露：
    1. 通過`exports`暴露：
        ```js
        module.exports = {
            sayName     // sayName:sayName
        }
        ```

    2. 通過`module.exports`暴露：
        ```js
            exports.say = sayName
        ```


3. 引入接口：
    - 使用`require`方法：
        ```js
        const moudleFile = require('./path')
        ```



## 模塊化編程
1. 傳統JS代碼問題：
    1. 命名空間：當引入多個擁有重名的函數，則後引入的 JS 文件會將其覆蓋
    2. 依賴關係：當一個 JS 要調用其他文件中的函數，則該文件需要在此文件前引入
    3. 暴露問題：JS 文件中的方法是全局方法，因此需要安裝其他插件去閉包保護


2. 模塊化編程：
    - 利用暴露接口和引入的方式解決傳統 JS 代碼問題



### ES模塊化開發
1. 切換`commitJS`模塊化規範為`ES`的模塊化規範：
    1. 創建日誌
        ```bash
        npm init
        ```

    2. 日誌中添加`type`屬性並修改為`module`：
        ```json
        "type": "module",
        ```


2. 暴露接口：
    1. 通過`export default`暴露：
        ```js
        export default moduleA
        ```

    2. 通過`export`對象暴露：
        ```js
        export {
            moduleA,
            moduleB,
        }
        ```


3. 引入接口：
    - 通過`import ... from`方法：
        ```js
        import moduleA from './path'
        import { moduleA,moduleB } from './path'
        ```


4. 注意：<font color="#f54747">一旦修改為使用`ES`模塊規範，則不能使用`commitJS`的模塊規範語句</font>



# 內置模塊

## http模塊
1. 簡介：
    - `http`模塊是`Node.js`官方提供用於創建`Web`服務器的模塊


2. 作用：
    - 基於`Node.js`提供的`http`模塊，就可以簡單的手寫一個服務器軟件，從而對外提供`Web`服務


3. 創建Web服務器：
    1. 導入http模塊：
        ```js
        const http = require('http')
        ```

    2. 創建服務器實例：
        ```js
        const server = http.createServer()
        ```

    3. 服務器實例綁定`request`事件，用於監聽客戶端請求：
        ```js
        server.on('request', (req,res) => {...})    // (事件, 回調函數)
        ```

    4. 啟動服務器：
        ```js
        server.listen(8080, () => {...})  // (通訊埠, 回調函數)
        ```


4. 具體編碼：
    ```js
    // 導入http模塊
    const http = require('http')

    // 創建web服務器實例
    const server = http.createServer()

    // 為服務器綁定request事件，監聽客戶端請求
    server.on('request', (req,res) => {
        console.log('Someone sent a request')
    })

    // 啟動服務器在8080端口
    server.listen(8080, () => {
        console.log('Server running at http://127.0.0.1:8080')
    })
    ```



### res響應對象
1. 作用：
    - 用於返回渲染的內容，訪問與服務器相關的數據或屬性


2. 對象屬性：
    1. 往瀏覽器寫入內容：
        ```js
        res.write(str)  // 往瀏覽器寫入 str 內容
        ```

    2. 寫入並表示傳輸的結束：
        ```js
        res.end(str)    // 向客戶端響應內容(str)
        ```

    3. 設置響應頭：
        ```js
        // 設置響應頭(響應頭類型、編譯方式、編碼方式)
        res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})
        res.writeHead(404, {"Content-Type":"text/plain; charset=utf-8"})
        ```


3. 具體編碼：
    ```js
    server.on((req,res)=>{
        // 設置響應頭，修改編譯格式
        res.writeHead(404, {"Content-Type":"text/html; charset=utf-8"})

        // 往瀏覽器寫入內容
        res.write(`
            <html>
                <b>Hello World</b>
                <div>你好</div>
            </html>
        `)

        // 傳輸結束
        res.end()
    })
    ```



### req請求對象
1. 作用：
    - 用於接收瀏覽器傳的參數，訪問與客戶端相關的數據或屬性


2. 對象屬性：
    1. 獲取瀏覽器路徑：
        ```js
        const url = req.url     // 值為客戶端請求的URL地址（域名及通訊埠後的字符串）
        ```

    2. 獲取請求類型：
        ```js
        const method = req.method   // 值為客戶端的 method 請求類型
        ```


3. 具體編碼：
    ```js
    // 引入方法
    var moduleRenderHTML = require('./modules/renderHTML')
    var moduleRenderStatus = require('./modules/RenderStatus')

    server.on("request", (req, res)=>{
        // req 接收瀏覽器傳的參數
        if(req.url === '/favicon.ico') return

        // res 返回渲染的內容
        res.writeHead(moduleRenderStatus.renderStatus(req.url), {
            "Content-Type":"text/html; charset=utf-8"
        })
        res.write(moduleRenderHTML.renderHTML(req.url))
        res.end()
    })
    ```



## fs文件系統模塊
1. 簡介：
    - `fs`模塊是`Node.js`官方提供用於操作文件的模塊


2. 導入`fs`模塊：
    ```js
    const fs = require('fs')
    ```

### fs模塊內置方法
1. `fs.readFile`方法：
    - 用於讀取指定文件中的內容

    - 語法：
        1. `path`：必選參數，字符串，表示文檔路徑
        2. `options`：可選參數，表示編碼格式，默認值`utf8`
        3. `callback`：必選參數，文件讀取完後的回調函數
        ```js
        fs.readFile(path, options, callback)
        ```

    - 具體編碼：
        ```js
        // 以utf-8形式編譯讀取1.txt文檔
        fs.readFile('./files/1.txt', 'utf8', (err, dataStr) => {
            if(err){
                return console.error('讀取文件失敗：', err.message)   // 錯誤信息
            }
            console.log('讀取文件成功：', dataStr)  // 讀取內容
        })
        ```



2. `fs.writeFile`方法：
    - 用於向指定文件中寫入內容

    - 語法：
        1. `path`參數：必選參數，字符串，表示文檔路徑
        2. `data`參數：必選參數，表示要寫入的內容
        3. `options`：可選參數，表示編碼格式，默認值utf8
        4. `callback`：必選參數，文件讀取完後的回調函數
        ```js
        fs.writeFile(path, data, options, callback)
        ```

    - 具體編碼：
        ```js
        // 以utf-8形式編譯寫入1.txt文檔
        fs.writeFile('f:/files/2.txt', 'Hello node.js', function(err){
            if(err){
                return console.error('文件寫入失敗：', err.message)   // 錯誤信息
            }
            console.log('文件寫入成功')
        })
        ```



## path路徑模塊
1. 簡介：
    - `path`模塊是`Node.js`官方提供用於處理路徑的模塊


2. 導入`path`模塊：
    ```js
    const path = require('path')
    ```

### path模塊內置方法
1. `path.join`方法：
    - 用來將多個路徑片段拼接成一個完整的路徑字符串

    - 語法：
        ```js
        path.join([...paths])
        ```

    - 具體編碼：
        ```js
        const pathStr = path.join('/a', '/b/c', '../', '/d', '/e')      // '/a/b/d/e'
        const pathStr = path.join(__dirname, './files/1.txt')
        ```
        - 注意：<font color="#f54747">凡涉及路徑拼接的操作，都要使用`path.join`方法進行處理，不要直接使用`+`進行字符串拼接</font>



2. `path.basename`方法：
    - 用來從路徑字符串中，將文件名解析出來

    - 語法：
        1. `path`參數：必選參數，表示一個路徑字符串
        2. `ext`參數：可選參數，表示文件擴展名
        3. 返回：表示路徑中最後的一個部分（文件名）
        ```js
        path.basename(path, ext)
        ```

    - 具體編碼：
        ```js
        const fpath = '/files/result.txt'
        
        var fullName = path.basename(fpath)
        console.log(fullName)  // result.txt
        
        var nameWithoutExt = path.basename(fpath, '.txt')
        console.log(nameWithoutExt)  //result
        ```



3. `path.extname`方法：
    - 用於獲取路徑中的擴展名

    - 語法：
        ```js
        path.extname(path)
        ```

    - 具體編碼：
        ```js
        const fpath = '/files/result.txt'
        
        var ext = path.extname(fpath)
        console.log(ext)  // txt
        ```



### __dirname屬性
1. 路徑動態拼接問題：
    - 在使用`fs`模塊操作文件時，如果提供的操作路徑時以`./`或者`../`開頭的相對路徑時，很容易出現路徑動態拼接錯誤問題
        ```bash
        ./files/1.txt
        ```


2. 原因：
    - 代碼運行時，會以<font color="#f54747">執行`node`命令所在的目錄</font>，動態拼接出被操作文件的完整路徑


3. 解決方案：
    1. 直接提供一個完整的文件存放路徑
        ```bash
        /Users/donald/Weekly\Tasks/NodeJS/01.Node基礎/files/1.txt
        ```
        - 問題：<font color="#f54747">移植性非常差，不利於維護</font>  

    2. `__dirname`屬性：表示當前文件所處的目錄
        ```bash
        __dirname + '/files/1.txt'
        ```



## url模塊
1. 解析路徑：
    ```js
    const myURL = new URL(req.url, 'https://127.0.0.1:8080')
    ```


2. 提取路徑名：
    ```js
    myURL.pathname
    ```


3. 路徑參數：
    ```js
    myURL.searchParams  // { 'a' => '1', 'name' => 'Donald' }
    // 提取參數名與值
    for(var [key,value] of myURL.searchParams){
        console.log(key, value)
    }
    ```


4. 拼接路徑：
    ```js
    const a = new URL('five', 'http://example.com/one/two/three/four')
    ```


5. `format`方法：
    - 改變路徑的顯示樣式

    - 配置項：
        1. `auth`：`true`為序列化網址字符串應包含用戶名和密碼 (`a:bcd`) ，默認值`true`（代表顯示）
        2. `fragment`：`true`為序列化網址字符串應包含片段 (`#foo`)，默認值`true`（代表顯示）
        3. `search`：`true`為序列化網址字符串應包含搜索查詢 (`?abc`)，默認值`true`（代表顯示）
        4. `unicode`：`true`為`Unicode`字符串會直接編碼，而不是`Punycode`編碼，默認值`false`（`Unicode`編譯）

    - 具體編碼：
        ```js
        const myURL = new URL('https://a:b@測試?abc#foo')        
        url.format(myURL, {
            auth: false,
            fragment: false,
            search: false,
            unicode: true
        })
        // myURL = https://測試/
        ```



# express

## express簡介
1. `express`簡介：
    - 基於 Node.js 平台，快速、開放、極簡的<font color="#f54747"> Web 開發框架</font>
    - 作用和 Node.js 內置的`http`模塊類似，專門用於創建 Web 服務器的


2. `express`本質：
    - `npm`上的第三方包，提供了快速創建 Web 服務器的便捷方法
    - 官方網址：https://expressjs.com/zh-tw/


3. `express`運用場景：  
    - <font color="#f54747">Web 網站服務器</font>：專門對外提供 Web 網頁資源的服務器
    - <font color="#f54747">API 接口服務器</font>：專門對外提供 API 接口的服務器
    - 使用`express`可以方便、快捷的創造 Web 網站服務器或 API 接口服務器



## express基本使用
1. 安裝：
    ```bash
    npm i express
    ```


2. 創建Web服務器：
    - 使用`express`創建服務器
    - 具體編碼：
        ```js
        // 1. 導入express
        const express = require('express')

        // 2. 創建Web服務器
        const app = express()

        // 3. 啟動Web服務器
        app.listen(3000, () => {
            console.log('express server running at http://127.0.0.1:3000')
        })
        ```



### 客戶端與服務器交互
1. 監聽`GET`請求：
    - 使用`app.get`方法，監聽客戶端的`GET`請求
    - 具體編碼：
        ```js
        app.get('url', (req, res) => { /*處理函數*/ })
        ```


2. 監聽`POST`請求：
    - 使用`app.post`方法，監聽客戶端的`POST`請求
    - 具體編碼：
        ```js
        app.post('url', (req, res) => { /*處理函數*/ })
        ```


3. 把內容響應給客戶端：
    - 使用`res.send`方法，把處理好的內容發送給客戶端
        ```js
        res.send()
        ```


4. 具體編碼：
    ```js
    const express = require('express')
    const app = express()

    // 監聽客戶端的 GET 和 POST 請求，並向客戶端響應內容
    app.get('/user', (req, res) => {
        // 調用 express 提供的 res.send 方法向客戶端響應 JSON 對象
        res.send({name:'Donald', age:20, gender:'Male'})
    })
    app.post('/user', (req, res) => {
        // 調用 express 提供的 res.send 方法向客戶端響應文本字符串
        res.send('Request succeeded')
    })

    app.listen(3000, () => {
        console.log('express server running at http://127.0.0.1:3000')
    })
    ```



### 獲取路徑中攜帶的參數
1. `query`類型的參數：
    - 通過`req.query`對象，訪問到客戶端通過查詢字符串的形式發送給服務器的參數
        ```js
        app.get('/' (req, res) => {
            console.log(req.query)
        })
        ```


2. `params`類型的參數：
    - 通過`req.params`對象，訪問到客戶端通過查詢字符串的形式發送給服務器的參數
    - 使用`params`類型參數必須添加佔位符`/:xxx`
        ```js
        app.get('/:name/:age', (req, res) => {
            console.log(req.params)
        })
        ```



### 托管靜態資源
1. 創建靜態資源服務器：
    - 使用`express.static`函數創建一個靜態資源服務器
        ```js
        app.use(express.static(path.join(__dirname, '/public')))    // 防止路徑動態拼接問題
        ```

    - 將`public`目錄下的圖片、CSS文件、JavaScript文件對外開放訪問
        ```
        http://127.0.0.1:3000/images/bg.jpg
        http://127.0.0.1:3000/css/style.css
        http://127.0.0.1:3000/js/login.js
        ```

    - 注意：Express在<font color="#f54747">指定的</font>靜態目錄中查找文件，並對外提供資源的訪問路徑。因此<font color="#f54747">存放靜態文件的目錄名不會出現在URL中</font>


2. 托管多個靜態資源目錄：
    - 多次調用`express.static`函數即可
        ```js
        app.use(express.static(path.join(__dirname, '/files')))
        app.use(express.static(path.join(__dirname, '/public')))
        ```
        - 注意：如果托管的目錄中有重名的文件，會查找優先添加的文件（<font color="#f54747">文件會根據目錄的添加順序查找</font>）



## express路由
1. 簡介：
    - `Express`中的路由指<font color="#f54747">客戶端的請求</font>與<font color="#f54747">服務器處理函數</font>之間的映射關係

    - 可以直接將路由掛載到`app`上，就是`app`直接掛載監聽

    - 但<font color="#f54747">推薦將路由抽離為單獨的模塊</font>，更方便對路由進行模塊化的管理


2. 創建路由模塊：
    - 使用`express.Router`創建路由實例再導出
    - 具體編碼：
        ```js
        // 1. 導入 express
        const express = require('express')
        
        // 2. 創建路由對象
        const router = express.Router()
        
        // 3. 掛載具體路由
        router.get('/user/list', (req, res) => {
            res.send('Get user list')
        })
        router.post('/user/add', (req, res) => {
            res.send('Added new user')
        })
        
        // 4. 向外導出路由對象
        module.exports = router
        ```


3. 註冊路由模塊：
    - 使用`app.use`函數註冊路由中間件
    - 具體編碼：
        ```js
        // 1. 導入路由模塊
        const userRouter = require('./router')
        
        // 2. 註冊路由模塊
        app.use(userRouter)
        ```


4. 為路由模塊添加前綴：
    - 類似於托管靜態資源時，為靜態資源統一掛載訪問前綴一樣
    - 語法：
        ```js
        app.use('/api', userRouter)     // 添加訪問前綴
        ```



## express中間件
1. 簡介：
    - 中間件 (Middleware) ，指業務流程的<font color="#f54747">中間處理環節</font>
    - 中間件必須有輸入與輸出，前一級的輸出作為下一級的輸入


2. `Express`中間件調用流程：
    - 當一個請求到達`Express`服務器之後，可以連續調用多個中間件，對此次請求進行<font color="#f54747">預處理</font>
    - 圖示：
        <img src="https://p.ipic.vip/4z8u5w.png" width="600px">


3. 中間件語法：
    - `Express`中間件本質上就是一個`function`處理函數
    - 只是中間件函數的參數列表中<font color="#f54747">必須包含`next`參數</font>
    - `next`函數是實現<font color="#f54747">多個中間件連續調用</font>的關鍵，它表示把流轉關係<font color="#f54747">轉交</font>給下一個中間件或路由
    - 語法：
        ```js
        app.get('/', (req, res, next) => {
            next()
        })
        ```


4. 定義中間件函數：
    - 具體編碼：
        ```js
        const mw = (req, res, next) => {
            console.log('This is a middleware')
            next()  // 把流轉關係轉交給下一個中間件或路由
        }
        ```


5. 中間件的注意事項：
    1. 必須在路由之前註冊中間件

    2. 客戶端發送過來的請求，可以連續調用多個中間件進行處理

    3. 執行完中間件的代碼之後，必須調用`next`函數

    4. 為了防止代碼邏輯的混亂，調用`next`函數之後不要再寫額外的代碼

    5. 連續調用多個中間件的時候，多個中間件之間共享`req`和`res`對象



### 全局中間件
1. 簡介：
    - 全局生效的中間件就是客戶端發起的<font color="#f54747">任何請求</font>到達服務器之後都會觸發


2. 定義全局中間件：
    - 使用`app.use`函數註冊全局中間件
    - 具體編碼：
        ```js
        app.use(mw)
        ```


3. 定義多個全局中間件：
    - 使用`app.use`函數連續註冊多個全局中間件
    - 客戶端請求到達服務器之後，會按照中間件的註冊順序依次調用


4. 全局中間件作用：
    - 由於多個中間件之間是<font color="#f54747">共享同一個`res`和`req`</font>，可以在前面的中間件統一為`res`或`req`對象添加自訂義屬性和方法，給後續中間件或路由使用
    - 例子：為所有路由添加發送請求時間
        ```js
        // 中間件
        const mw = (req, res, next) => {
            req.startTime = Date.now()  // 獲取請求到達服務器時間
            next()
        }
        
        // 路由
        app.get('/', (req, res) => {
            res.send(req.startTime)     // 直接訪問中間件中添加的屬性與方法
        })
        ```



### 局部中間件
1. 簡介：
    - 不使用`app.use`函數註冊的中間件，請求到達服務器不會立即觸發


2. 註冊局部中間件：
    - 在路由函數中添加中間件參數
    - 具體編碼：
        ```js
        app.get('/', mw, (req, res) => {
            res.send('Home Page')
        })
        ```


3. 定義多個局部中間件：
    - 路由函數中：
        1. 參數形式傳入
        2. 包裝成一個數組傳入
    - 具體編碼：
        ```js
        app.get('/', mw1, mw2, (req, res) => { res.send('Home Page') })
        app.get('/', [mw1, mw2], (req, res) => { res.send('Home Page') })
        ```



### 中間件分類

#### 應用級別中間件
- 通過`app.use()`、`app.get()`或`app.post()`綁定到`app`實例上的中間件

- 具體編碼：
    ```js
    // 應用級別中間件（全局中間件）
    app.use((req, res, next) => { next() })
    
    // 應用級別中間件（局部中間件）
    app.get('/', mw, (req, res) => { res.send('Home Page') })
    ```



#### 路由級別中間件
- 綁定到`express.Router()`實例上的中間件，與應用級別中間件沒有區別

- 只是應用級別中間件是綁定到`app`實例上，而路由級別中間件事綁定到`router`實例上

- 具體編碼：
    ```js
    var app = express()
    var router = express.Router()
    
    // 路由級別中間件
    router.use((req, res, next) => { next() })
    
    app.use('/', router)
    ```



#### 錯誤級別中間件
- 專門用來捕獲整個項目中發生的異常錯誤，防止項目異常崩潰問題

- 錯誤級別中間件的處理函數中第一個形參是`err`

- 語法：
    ```js
    (err, req, res, next) => {  }
    ```

- 具體編碼：
    ```js
    app.get('/', (req, res) => {
        throw new Error('Server error')     // 拋出自定義錯誤
        res.send('Home Page')       // 後續程序不會執行
    })
    
    // 錯誤級別中間件
    app.use((err, req, res, next) => {
        console.error('ERROR!!!', err.message)    // 在服務器打印錯誤消息
        res.send('ERROR!!! ' + err.message)         // 向客戶端響應錯誤內容
    })
    ```

- 注意：<font color="#f54747">錯誤級別中間件必須註冊在所有路由之後！！！</font>



#### Express內置中間件
- Express 4.16.0 版本之後，`Express`內置了三個常用的中間件，提高`Express`項目開發效率和體驗

1. `express.static`
    - 用於快速托管靜態資源的內置中間件（`HTML`文件、圖片、`CSS`樣式等）



2. `express.json`
    - 用於解析`JSON`格式的請求體數據

    - 解析：`application/json`格式的數據
        ```json
        {
            "name": "Donald",
            "age": 20
        }
        ```

    - 註冊中間件：
        ```js
        app.use(express.json())
        ```

    - 具體編碼：
        ```js
        app.use(express.json())
        
        // 服務器中使用 req.body 屬性接收請求體數據
        app.post('/', (req, res) => { console.log(req.body) })
        ```



3. `express.urlencoded`
    - 用於解析`URL-encoded`格式的請求體數據

    - 解析：`application/x-www-form-urlencoded`格式的數據
        ```js
        'name=Donald&age=18'
        ```

    - 註冊中間件：
        ```js
        app.use(express.urlencoded({extended: false}))
        ```

    - 具體編碼：
        ```js
        app.use(express.urlencoded({extended: false}))
        
        // 服務器中使用 req.body 屬性接收請求體數據
        app.post('/', (req, res) => { console.log(req.body) })
        ```



#### 第三方中間件
- 由第三方開發出來的中間件，在項目中按需下載第三方中間件以提高效率


- 使用步驟：
    1. `npm`安裝中間件
    
    2. 使用`require`導入中間件
    
    3. 使用`app.use`註冊並使用中間件


- 例子：`body-parser`解析請求體
    1. 安裝`body-parser`中間件
        ```bash
        npm i body-parser
        ```
    
    2. 導入、註冊並使用`body-parser`
        ```js
        // 導入解析表單數據的中間件 body-parser
        const parser = require('body-parser')
        
        // 註冊並使用 body-parser
        app.use(parser.urlencoded({extended: false}))
        ```
    
    - 注意：`Express`內置的`express.urlencoded`中間件，就是基於`body-parser`第三方中間件進一步封裝出來的



### 自定義中間件
1. 定義中間件
    - 通過`app.use`函數註冊並使用中間件
    - 具體編碼：
        ```js
        app.use((req, res, next) => { })
        ```


2. 監聽`req`的`data`事件
    - 中間件中需要監聽`req`的`data`事件來獲取客戶端發送到服務器的數據
    - 如果數據量比較大，無法一次性發送完畢，<font color="#f54747">客戶端會把數據切割後，分批發送到服務器</font>，所以`data`事件可能會觸發多次，每一次觸發`data`事件時，<font color="#f54747">獲取到的數據只是完整數據的一部分</font>，需要手動對接收到的數據進行拼接
    - 具體編碼：
        ```js
        // 儲存客戶端傳送過來的請求體數據
        let str = ''
        
        // 監聽 req 的 data 事件
        req.on('data', (chunk) => {
            str += chunk
        })
        ```


3. 監聽`req`的`end`事件
    - 當請求體數據接收完畢後，會自動觸發`req`的`end`事件
    - 可以在`req`的`end`事件中，<font color="#f54747">拿到並處理完整的請求體數據</font>
    - 具體編碼：


4. 使用`querystringify`第三方插件解析請求體數據
    - 安裝：
        ```bash
        npm i querystringify
        ```
    
    - 導入並使用：
        ```js
        // 導入 querystringify
        const qs = require('querystringify')
        
        // 解析請求體數據
        qs.parse(str)
        ```


5. 將解析出來的數據掛載為`req.body`
    - 具體編碼：
        ```js
        req.body = qs.parse(str)
        next()
        ```


6. 封裝為獨立模塊
    - 為了優化代碼結構，可以把自定義中間件函數<font color="#f54747">封裝為獨立的模塊</font>
    - 自定義中間件模塊`custom-body-parser.js`：
        ```js
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
                
                // TODO: 把字符串格式的請求體數據，解析成對象格式並且掛載為 req.body
                const body = qs.parse(str)
                req.body = body
                next()
            })
        }
        
        // 導出函數
        module.exports = bodyParser
        ```
    - 導入、註冊並使用自定義模塊`server.js`：
        ```js
        // 1. 導入自定義中間件模塊
        const customBodyParser = require('./custom-body-parser')
        
        // 2. 將自定義的中間件函數註冊為全局可用的中間件
        app.use(customBodyParser)
        ```



## express接口

### 編寫接口
1. 創建基本服務器：
    ```js
    // 導入 express 模塊
    const express = require('express')
    // 創建 express 服務器實例
    const app = express()
    
    // 配置解析表單數據的中間件
    app.use(express.urlencoded({ extended: false }))
    
    // 導入路由模塊
    const router = require('./apiRouter')
    // 註冊路由模塊
    app.use('/api', router)
    
    // 啟動 Web 服務器
    app.listen(3000, (req, res) => {
        console.log('Express server running at http://127.0.0.1:3000')
    })
    ```



2. 創建 API 路由模塊：
    ```js
    // 導入 express 模塊
    const express = require('express')
    // 創建 express 路由對象
    const router = express.Router()
    
    // bind your router here...
    
    // 暴露路由模塊
    module.exports = router
    ```



3. 編寫`GET`接口：
    ```js
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
    ```



4. 編寫`POST`接口：
    ```js
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
    ```



### 測試接口
1. 測試`GET`接口
    ```js
    $('#btnGET').on('click', function(){
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:3000/api/get',
            data: {
                name: 'Donald',
                age: 20
            },
            success: function(res){
                console.log(res)
            }
        })
    })
    ```


2. 測試`POST`接口
    ```js
    $('#btnPOST').on('click', function(){
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:3000/api/post',
            data: {
                bookname: 'The old man and the sea',
                price: 20
            },
            success: function(res){
                console.log(res)
            }
        })
    })
    ```



### 跨域問題
1. 接口的跨域問題：
    - 剛才編寫的`GET`與`POST`接口，存在一個嚴重問題：<font color="#f54747">不支持跨域請求</font>
    - 解決跨域問題只要方案由兩種：
        1. CORS （主流方案，推薦使用）
        2. JSONP （有缺陷的方案，只支持`GET`請求）



#### CORS 跨域資源共享
1. 簡介：
    - `cors`是`Express`的一個第三方中間件
    - 通過安裝和配置`cors`中間件，可以方便地解決跨域問題


2. 基本使用：
    1. 安裝：
        ```bash
        npm i cors
        ```
    
    2. 導入中間件：
        ```js
        const cors = require('cors')
        ```
    
    3. 在路由之前註冊為全局中間件：
        ```js
        app.use(cors())
        ```


3. CORS 原理：
    - CORS (Cross-Origin Resource Sharing 跨域資源共享) 
    - 由一系列<font color="#f54747">`HTTP`響應頭</font>組成，這些響應頭決定瀏覽器是否阻止前端`JS`代碼跨域獲取資源
    - 瀏覽器的<font color="skyblue">同源安全策略</font>默認會阻止網頁「跨域」獲取資源
    - 圖示：
        <img src="https://p.ipic.vip/1uw2tu.png" width="380px">   <img src="https://p.ipic.vip/rer3uw.png" width="380px">
    - 注意事項：
        1. CORS 主要在<font color="#f54747">服務器端</font>進行配置，客戶端瀏覽器<font color="#f54747">無須做任何額外的配置</font>，即可請求開啟 CORS 的接口
        2. CORS 在瀏覽器中有兼容性，只支 XMLHttpRequest Level2 的瀏覽器才可以正常訪問開啟了 CORS 的服務端接口


#### CORS 響應頭
1. Access-Control-Allow-Origin
    - 響應頭中可以攜帶一個 Access-Control-Allow-Origin 字段
    - 語法：
        ```js
        // 參數、origin: 指定允許訪問該資源的外域 URL
        Access-Control-Allow-Origin: <origin> | *
        ```
    - 具體編碼：
        ```js
        res.setHeader('Access-Control-Allow-Origin', '*')   // 允許所有網頁
        res.setHeader('Access-Control-Allow-Origin', 'https://www.google.com')  // 只允許 Google
        ```


2. Access-Control-Allow-Header
    - 默認情況下，CORS 僅支持客戶端向服務端發送如下九個請求頭：
        Accept, Accept-Language, Content-Language, DPR, Downlink,
        Save-Data, Viewport-Width, Width, Content-Type
    - 如果客戶端向服務端<font color="#f54747">發送了額外的請求頭信息</font>，則需要在<font color="#f54747">服務器端</font>，通過 Access-Control-Allow-Header <font color="#f54747">對額外的請求頭進行聲明</font>，否則請求會失敗
    - 具體編碼：
        ```js
        res.setHeader('Access-Control-Allow-Header', 'Content-Type, X-Custom-Header')
        ```


3. Access-Control-Allow-Methods
    - 默認情況下，CORS 只支持客戶端發起`GET`、`POST`和`HEAD`請求
    - 如果客戶端希望通過`PUT`、`DELETE`等方式請求服務器資源，則需要在服務器端，通過 Access-Control-Allow-Methods 來<font color="#f54747">指明實際請求所允許使用的 HTTP 方法</font>
    - 具體編碼：
        ```js
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, HEAD')    // 僅支持這些方式
        res.setHeader('Access-Control-Allow-Methods', '*')  // 支持任何請求方式
        ```



#### CORS 請求分類
1. 簡介：
    - 客戶端在請求 CORS 接口時，根據請求方式和請求頭的不同，可以將 CORS 分成兩大類：
        1. 簡單請求
        2. 預檢請求


2. 簡單請求：
    - 當請求滿足以下條件：
        1. 請求方式：`GET`、`POST`、`HEAD`三者之一
        2. 請求頭中無自定義頭部字段


3. 預檢請求：
    - 當請求符合以下任何一個條件：
        1. 請求方式：`GET`、`POST`、`HEAD`之外的請求類型
        2. 請求頭中包含自定義的頭部字段
        3. 想服務器發送了`application/json`格式的數據

    - 在瀏覽器與服務器正式通信前，瀏覽器會先發送 OPTION 請求進行預檢，以獲知服務器是否允許該實際請求（OPTION 請求就是預檢請求）
    - 服務器成功響應檢測請求後，才會發送真正的請求，並攜帶真實數據


4. 簡單請求與預檢請求的區別：
    - 簡單請求：客戶端與服務器之間<font color="#f54747">只會發生一次請求</font>
    - 預檢請求：客戶端與服務器之間<font color="#f54747">會發生兩次請求</font>，OPTION 檢測請求成功之後，才發起真正的請求



#### JSONP接口
1. 簡介：
    - 概念：瀏覽器通過`<scipt>`標籤的`src`屬性，請求服務器上的數據，同時服務器返回一個函數的調
    - 特點：
        1. JSONP 不屬於真正的 AJAX 請求，因為沒有使用`XMLHttpRequest`對象
        2. JSONP 僅支持`GET`請求


2. 創建 JSONP 接口的注意事項：
    - 如果項目中已經配置了 CORS 跨域資源共享，<font color="#f54747">為了防止衝突，必須在配置 CORS 中間件前聲明 JSONP 的接口</font>，否則 JSONP 接口會被處理成開啟了 CORS 的接口
    - 具體編碼：
        ```js
        // 必須在配置 cors 中間件前配置 JSONP 的接口
        app.get('/api/jsonp', (req, res) => {
        		
        })
        ```


3. 實現 JSONP 接口步驟：
    1. 獲取客戶端發送過來的<font color="#f54747">回調函數名字</font>
    2. 得到要通過 JSONP 形式<font color="#f54747">發送給客戶端的數據</font>
    3. 根據前兩步得到的數據，<font color="#f54747">拼接出一個函數調用的字符串</font>
    4. 把上一步拼接得到的字符串，響應給客戶端的`<script>`標籤進行解析執行
    - 具體編碼：
        ```js
        app.get('/api/jsonp', (req, res) => {
            // 1. 得到函數的名稱
            const functName = req.query.callback
        
            // 2. 定義要發送到客戶端的數據對象
            const data = {name: 'Donald', age: 20}
        
            // 3. 拼接出一個函數的調用
            const scriptStr = `${functName}(${JSON.stringify(data)})`
        
            // 4. 把拼接的字符串響應給客戶端
            res.send(scriptStr)
        })
        ```


4. 發起 JSONP 請求：
    - 調用`$ajax()`函數，提供 JSONP 得配置項，從而發起 JSONP 請求
    - 具體編碼：
        ```js
        $('#btnJSONP').on('click', function(){
            $.ajax({
                type: 'GET',
                url: 'http://127.0.0.1:3000/api/jsonp',
                dataType: 'jsonp',
                success: function(res){
                    console.log(res)
                }
            })
        })
        ```



## 服務端渲染
1. 常見前後端交互：
    - 前端做好靜態頁面、動態效果、JSON模擬、Ajax、動態創建頁面、真實接口數據
    - 把前端提供給後端靜態資源文件夾


2. 服務器渲染、後端嵌套模板、後端渲染模板
    - 前端做好靜態頁面、動態效果
    - 把前端代碼提供給後端，後端把靜態頁面和裡面的假數據刪除，通過模板進行動態生成頁面內容


## express生成器
1. 簡介：
    - 通過應用生成器工具`express-generator`快速創建一個應用腳手架

2. 基本使用：
    1. 安裝：
        ```bash
        npx express-generator
        ```
    
    2. 啟動腳手架：
        ```bash
        express 'projectName' --view=ejs
        ```

    3. 安裝中間件：
        ```bash
        npm i
        ```

    4. 更改文件渲染：
        ```js
        app.set('view engine', 'ejs');
        --------------------------------
        app.set('view engine', 'html');
        app.engine('html', require('ejs').renderFile)   // 支持直接渲染 html 文件
        ```



# MongoDB

## 數據庫
1. 關係型數據庫 (SQL)
    - `sql`語句增刪改查操作
    - 保持事務的一致性


2. 非關係型數據庫 (No-SQL)
    - 不用`sql`語句
    - 輕量、高效、自由


3. 數據庫概念：
    | SQL術語 | MongoDB術語 | 說明 |
    | :---: | :---: | :---: |
    | database | database | 數據庫 |
    | table | collection | 數據庫表 |
    | row | document | 數據紀錄文檔 |
    | column | field | 數據字段 |
    | index | index | 索引 |
    | table.joins |  | 表連結，MongoDB不支持 |
    | primary key | primary key | 主鍵，id |



## MongoDB基本使用

### 數據庫基本使用
1. 啟動數據庫：
    ```bash
    ./mongod --dbpath 'storage path'
    ./mongo
    ```



2. 操作數據庫：
    ```sql
    -- 1. 查詢當前數據庫
    show dbs
    
    -- 2. 查看當前數據庫
    db
    
    -- 3. 切換數據庫，沒有就創建
    use 'collName'
    
    -- 4. 插入集合
    db.createCollection('users')
    
    -- 5. 刪除數據庫
    db.dropDatabase()
    ```



3. 操作集合：
    ```sql
    -- 1. 設置集合（最大儲存5M內容，最多存儲5000個文檔集合）
    db.createCollection('users', {size:5242880, capped:true, max:5000})
    
    -- 2. 獲取指定名稱 (users) 的集合
    db.getCollection('users')
    
    -- 3. 獲取數據庫中的所有集合
    db.getCollectionNames()
    
    -- 4. 刪除 (users) 集合
    db.'users'.drop()
    ```



### 文檔的增刪改
1. 添加：
    ```sql
    -- 字段、字域都可以不一樣（自由）
    -- 1. (users) 添加文檔
    db.'users'.save({username:'Donald', age:18})
    db.'users'.save({myName:'Donald', myAge:18, gender:'M'})
    
    -- 2. (users) 同時添加多個文檔
    db.'users'.save([{username:'May', age:19}, {username:'John', age:20}])
    ```



2. 刪除：
    ```sql
    -- 1. 刪除所有 myAge 屬性且值為 18 的文檔
    db.'users'.remove({myAge:18})
    
    -- 2. 刪除所有文檔
    db.'users'.remove({})
    ```



3. 修改：
    ```sql
    -- 1. 將第一個有 username:'Donald' 的文檔替換為 {age:200} 這個文檔
    db.'users'.update({username:'Donald'}, {age:200})
    
    -- 2. 只是修改屬性中對應的值
    db.'users'.update({username:'Donald'}, {$set:{age:200}})
    
    -- 3. 將屬性中的值增加 10
    db.'users'.update({username:'Donald'}, {$inc:{age:10}})
    ```



### 文檔的查詢
1. 查詢：
    ```sql
    -- 1. 查詢所有文檔
    db.'users'.find()
    
    -- 2. 查詢含有該屬性的文檔
    db.'users'.find({username:'Donald'})
    ```



2. 查詢值：
    ```sql
    -- 1. 值等於 22
    db.'users'.find({age:22})
    
    -- 2. 值大於 22
    db.'users'.find({age:{$gt:22}})
    
    -- 3. 值小於 22
    db.'users'.find({age:{$lt:22}})
    
    -- 4. 值大於等於 22
    db.'users'.find({age:{$gte:22}})
    
    -- 5. 值小於等於 22
    db.'users'.find({age:{$lte:22}})
    
    -- 6. 值大於等於 23 並 小於等於 26
    db.'users'.find({age:{$gte:23, $lte:26}})
    ```



3. 正則表達式查詢：
    ```sql
    db.'users'.find({username:/a/})
    db.'users'.find({username:/^D/})
    db.'users'.find({username:/d$/})
    ```



4. 查詢指定字段：
    ```sql
    -- 只要 username 這個字段
    db.'users'.find({}, {username:1})
    
    -- 只要 username 和 age 這個字段
    db.'users'.find({}, {username:1, age:1})
    
    -- 只要 username 而且不要顯示 __id
    db.'users'.find({}, {username:1, _id:0})
    ```



5. 排序顯示：
    ```sql
    -- 1. 正序顯示
    db.'users'.find({}).sort({age:1})
    
    -- 2. 倒序顯示
    db.'users'.find({}).sort({age:-1})
    ```



6. 查詢數據列位：
    ```sql
    -- 一頁有 n 條數據，每一頁的查詢
    db.'users'.find().skip((pageNum - 1) * n).limit(n)
    -- 查詢第 2 頁的數據，每一頁有5條數據
    db.'users'.find().skip((2-1)*5).limit(5)
    ```



7. `or`與查詢：
    ```sql
    -- 查詢 age:20 或 age:25 的文檔
    db.'users'.find({$or:[{age:20}, {age:25}]})
    ```



8. 查詢集結裡文檔的總數：
    ```sql
    db.'users'.find().count()
    ```



## NodeJS操作

### 連接數據庫
1. 安裝`mongoose`模塊：
    - 用戶操作數據庫
        ```bash
        npm i mongoose
        ```



2. 連接數據庫：
    - 創建`config`文件添加`db.config.js`文件
        ```js
        // 引入 mongoose 模塊
        const mongoose = require('mongoose')
        // 連接並自動創建 donald_project 數據庫
        mongoose.connect('mongodb://127.0.0.1:27017/donald_project')
        ```
    
    - 在`app.js`或`www`入口文件引入
        ```js
        require('../config/db.config')
        ```



3. 創建集合：
    - 創建`model`文件專門放置模型
    - 新建`UserModel.js`文件創建`users`集合
        ```js
        // user模型
        const mongoose = require('mongoose')
        const Schema = mongoose.Schema

        // 限制集合中的字段與類型
        const UserType = {
            username: String,
            password: String,
            age: Number
        }

        // 創建模型
        const UserModel = mongoose.model('user', new Schema(UserType))

        // 模型 user 將會對應 users 集合（集合名字 = 模型名字 + s）
        module.exports = UserModel
        ```



4. 路由中操作數據庫：
    - 引入模型即可進行操作
        ```js
        const UserModel = require('../model/UserModel');
        ```



### 數據庫操作
1. 添加：
    - 使用`Model.create()`方法添加文檔
    - 具體編碼：
        ```js
        // 結構賦值 AJAX 傳來的數據
        const {username, password, age} = req.body

        UserModel.create(       // 往模型添加文檔：{ 內容 }
            {username, password, age}
        ).then(data => {        // 成功的回調函數
            console.log(data)
        }).catch(err => {       // 出錯的回調函數
            console.error(err)
        })
        ```



2. 刪除：
    - 使用`Model.deleteOne()`方法刪除第一個符合條件的文檔
    - 使用`Model.deleteMany()`方法刪除所有符合條件的文檔
    - 具體編碼：
        ```js
        UserModel.deleteOne(    // 刪除指定文檔：{ 條件 }
            {_id:req.params.id}
        ).then(data => {        // 成功的回調函數
            console.log(data)
        }).catch(err => {       // 出錯的回調函數
            console.error(err)
        })
        ```



3. 更改：
    - 使用`Model.updateOne()`方法更改第一個符合條件的文檔
    - 使用`Model.updateMany()`方法更改所有符合條件的文檔
    - 具體編碼：
        ```js
        UserModel.updateOne(    // 更改指定文檔：{ 條件 }, { 內容 }
            {_id:req.params.id}, {username, password, age}
        ).then(data => {        // 成功的回調函數
            console.log(data)
        }).catch(err => {       // 出錯的回調函數
            console.error(err)
        })
        ```



4. 查詢：
    - 使用`Model.find()`方法查詢符合條件的文檔
    - 可以追加`sort()`、`skip()`、`limit()`方法
    - 具體編碼：
        ```js
        UserModel.find(
            {},                     // 查詢條件
            ['username', 'age']     // 獲取指定字段
        )
        .sort({age:-1})             // 按照 age 倒序排序
        .skip((page - 1) * limit).limit(limit)  // 指定頁面返回對應的文檔數
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.error(err)
        })
        ```
