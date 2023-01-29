/*
    時鐘案例：
        實現步驟：
            1. 創建兩個正則表達式，分別同來匹配 <style> 和 <script> 標籤
            2. 使用 fs 模塊，讀取需要被處理的 HTML 文件
            3. 自定義 resolveCSS 方法，來寫入 index.css 樣式文件
            4. 自定義 resolveJS 方法，來寫入 index.js 腳本文件
            5. 自定義 resolveHTML 方法，來寫入 index.html 文件
*/

// 1.1 導入模塊
const fs = require('fs')
const path = require('path')

// 1.2 定義正則表達式，分別匹配 <style> 和 <script> 標籤
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 調用 fs.readFile() 方法讀取文件
fs.readFile(path.join(__dirname, './raw/index.html'), 'utf8', function(err, dataStr){
    // 2.2 讀取文件失敗
    if(err){
        return console.log('讀取失敗：',err.message)
    }
    // 2.3 讀取文件成功，調用對應的三個方法，分別拆解出 css, js, html 文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

// 3.1 定義處理 css 樣式的方法
function resolveCSS(htmlStr){
    // 3.2 使用正則提取需要的內容
    const r1 = regStyle.exec(htmlStr)

    // 3.3 將提取出的字符串，進行字符串的替換操作
    const newCss = r1[0].replace('<style>', '').replace('</style>', '')

    // 3.4 調用 fs.writeFile() 方法將提取的樣式寫入index.css
    fs.writeFile(path.join(__dirname, './new/index.css'), newCss, function(err){
        if(err){
            return console.log('CSS寫入失敗：',err.message)
        }
        console.log('CSS寫入成功！')
    })
}

// 4.1 定義處理 js 腳本的方法
function resolveJS(htmlStr){
    // 4.2 使用正則提取需要的內容
    const r2 = regScript.exec(htmlStr)

    // 4.3 將提取出的字符串，進行字符串的替換操作
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')

    // 4.4 調用 fs.writeFile() 方法將提取的樣式寫入index.js
    fs.writeFile(path.join(__dirname, './new/index.js'), newJS, function(err){
        if(err){
            return console.log('JS寫入失敗：',err.message)
        }
        console.log('JS寫入成功！')
    })
}

// 5.1 定義處理 html 文件方法
function resolveHTML(htmlStr){

    // 5.2 將字符串調用 replace() 方法，把內嵌的 style 和 script 標籤，替換為外聯的 link 和 script 標籤
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>').replace(regScript, '<script src="./index.js"></script>')

    // 5.3 寫入 index.html 文件
    fs.writeFile(path.join(__dirname, './new/index.html'), newHTML, function(err){
        if(err){
            return console.log('HTML寫入失敗：',err.message)
        }
        console.log('HTML寫入成功！')
    })
}

