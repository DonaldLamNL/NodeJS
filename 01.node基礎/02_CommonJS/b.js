var moduleA = require('./a')

function test(){
    console.log('test--b')
}

console.log(moduleA.firstLetterUpper('b-hello'))

module.exports = test