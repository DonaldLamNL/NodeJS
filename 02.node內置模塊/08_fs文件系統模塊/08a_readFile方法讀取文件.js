// 導入 fs 模塊，來操作文件
const fs = require('fs')

// 調用 fs.readFile() 方法讀取文件
// 參數一、讀取文件的存放路徑
// 參數二、讀取文件時採用的編碼格式，默認指定utf8
// 參數三、回調函數，拿到讀取失敗與成功的結果 err dataStr
fs.readFile('./files/1.txt', 'utf8', function(err,dataStr){
    // 打印失敗結果
    // 如果讀取成功，則 err 的值為 null
    // 如果讀取失敗，則 err 的值為 錯誤對象，dataStr 的值為 undefined
    console.log(err)
    // 打印成功結果
    console.log(dataStr)
    
    console.log('-----------------------------------')
    if(err){
        return console.log('讀取文件失敗：',err.message)
    }
    console.log('讀取文件成功：', dataStr)
})