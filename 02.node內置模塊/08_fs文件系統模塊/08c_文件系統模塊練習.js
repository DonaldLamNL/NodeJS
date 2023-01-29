/*
    練習 - 文件系統模塊
    
        使用 fs 文件系統模塊，將成績文件中的考試數據，整理到新文件中
        - 整理前：
            Donald=99 John=100 Dawson=70 May=66 Tom=88
        - 整理後：
            Donald: 99
            John: 100
            Dawson: 70
            May: 66
            Tom: 88
*/
// 導入 fs 模塊
const fs = require('fs')

// 讀取文件內容
fs.readFile('./files/result.txt', 'utf8', function(err,dataStr){
    // 判斷是否讀取成功
    if(err){
        return console.log('讀取文件失敗：',err.message)
    }
    // 把成績按照空格進行分割
    const arr = dataStr.split(' ')
    const arrNew = []
    // 循環分割數組後，對每一項數據進行字符串的替換
    arr.forEach(e => {
        arrNew.push(e.replace('=', ': '))
    });
    // 把新數組的每一項進行合併
    const str = arrNew.join('\n')
    // 將處理完的內容寫入到新文件中
    fs.writeFile('./files/result_new.txt', str, 'utf8', function(err){
        if(err){
            return console.log('寫入文件失敗：',err.message)
        }
        console.log('寫入文件成功！')
    })
})