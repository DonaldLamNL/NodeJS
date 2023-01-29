const path = require('path')

// ../ 用於抵銷路徑
const pathStr1 = path.join('/a', '/b/c', '../../', '/d', '/e')
console.log(pathStr1)

const pathStr2 = path.join(__dirname, './files/1.txt')
console.log(pathStr2)