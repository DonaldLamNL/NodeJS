// 連接數據庫
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/donald_project')

// 插入集合和數據，數據庫 donald_project 會自動創建

