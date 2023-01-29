// 導入 fs 模塊，來操作文件
const fs = require('fs')

// 調用 fs.writeFile() 方法寫入文件內容
// 參數一、寫入文件的存放路徑
// 參數二、表示要寫入的內容
// 參數三、讀取文件時採用的編碼格式，默認指定utf8
// 參數四、回調函數，拿到讀取失敗的結果 err 
fs.writeFile('f:/files/2.txt', 'Hello node.js', function(err){
    // 如果文件寫入成功，則 err 的值為 null
    // 如果文件寫入失敗，則 err 的值為 錯誤對象
    console.log(err)

    console.log('-----------------------------------')
    if(err){
        return console.log('文件寫入失敗：',err.message)
    }
    console.log('文件寫入成功')
})
