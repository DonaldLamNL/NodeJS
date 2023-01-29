var moduleA = require('./a')
var moduleB = require('./b')
var moduleC = require('./c')

console.log( '@@@ --- ',moduleA)

console.log(moduleA.firstLetterUpper('hello'))
moduleA.test()
moduleB()
moduleC()

