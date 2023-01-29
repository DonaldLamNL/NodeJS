// user模型
const mongoose = require('mongoose')

const Schema = mongoose.Schema

// 限制字段與類型
const UserType = {
    username: String,
    password: String,
    age: Number
}

// 創建模型
const UserModel = mongoose.model('user', new Schema(UserType))

// 模型 user 將會對應 users 集合
module.exports = UserModel