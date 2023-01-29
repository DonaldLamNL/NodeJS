function test(){
    console.log('test--a')
}

function firstLetterUpper(str){
    return str.substring(0,1).toUpperCase() + str.substring(1)
}

function _init(){
    console.log('_init')
}

// module.exports = {
//     test,
//     firstLetterUpper
// }

exports.test = test
exports.firstLetterUpper = firstLetterUpper