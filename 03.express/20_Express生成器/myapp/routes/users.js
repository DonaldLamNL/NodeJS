var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // 讀取前端 cookie 值
  console.log(req.cookies)

  // 設置前端 cookie 值
  res.cookie('gender', 'male')
  res.send({name:'Donald'});
});

module.exports = router;
