const fs = require('fs')

// 出現路徑拼接錯誤的問題，是因為提供了相對路徑
fs.readFile('./files/1.txt', 'utf8', function(err,dataStr){
    console.log('@ - 相對路徑')
    if(err){
        return console.log('讀取文件失敗：',err.message)
    }
    console.log('讀取文件成功：', dataStr)
})

// 如果要解決這個問題，可以直接提供一個完整的文件存放路徑
// 但是移植性非常差，不利於維護
fs.readFile('/Users/donald/Weekly\ Tasks/NodeJS/01.Node基礎/files/1.txt', 'utf8', function(err,dataStr){
    console.log('@ - 完整路徑')
    if(err){
        return console.log('讀取文件失敗：',err.message)
    }
    console.log('讀取文件成功：', dataStr)
})

// __dirname：表示當前文件所處的目錄
fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err,dataStr){
    console.log('@ - __dirname')
    if(err){
        return console.log('讀取文件失敗：',err.message)
    }
    console.log('讀取文件成功：', dataStr)
})