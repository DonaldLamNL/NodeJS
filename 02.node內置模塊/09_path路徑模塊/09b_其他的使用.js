const path = require('path')

const fpath = '/files/result.txt'

var fullName = path.basename(fpath)
console.log(fullName)

var nameWithoutExt = path.basename(fpath, '.txt')
console.log(nameWithoutExt)

var ext = path.extname(fpath)
console.log(ext)