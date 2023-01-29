var express = require('express');
const UserModel = require('../model/UserModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/users/add', function(req, res, next) {
  console.log(req.body)
  // 增
  // 1. 創建模型（user，限制filed類型），一一對應數據庫的集合（users）
  const {username, password, age} = req.body
  UserModel.create({
    username, password, age
  }).then(data => {
    console.log(data)
  }).catch(err => {
    console.error(err)
  })
  
  res.send({ok:1})
});


router.post('/users/update/:id', function(req, res, next) {
  console.log(req.body, req.params.id)
  const {username, password, age} = req.body
  // 改
  UserModel.updateOne({_id:req.params.id}, {
    username, password, age
  }).then(data => {
    console.log(data)
  }).catch(err => {
    console.error(err)
  })
  res.send({ok:1})
});


router.get('/users/delete/:id', function(req, res, next) {
  // 刪
  UserModel.deleteOne({
    _id:req.params.id
  }).then(data => {
    console.log(data)
  }).catch(err => {
    console.error(err)
  })
  res.send({ok:1})
})


router.get('/users/list', function(req, res, next){
  console.log(req.query)
  let {page, limit} = req.query
  UserModel.find({}, ["username", "age"]).sort({age:-1}).skip((page-1)*limit).limit(limit).then(data => {
    res.send(data)
  })
})

module.exports = router;
