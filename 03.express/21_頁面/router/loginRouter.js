const express = require('express')
const router = express.Router()

const userList = []

router.get('/', (req, res) => {
    // console.log(req.query)
    let result = {
        ok: 0,
        msg: 'login Fail'
    }
    let {username, passward} = req.query
    userList.forEach(item => {
        if(item.username === username && item.passward === passward){
            result = {
                ok: 1,
                msg: 'login success'
            }
        }
    })
    res.send(JSON.stringify(result))
})

router.post('/', (req, res) => {
    // console.log(req.body)
    let {username} = req.body
    let result = {
        ok: 1,
        msg: 'register success'
    }
    let flag = userList.some((item) => {
        return item.username === username
    })
    if(flag){
        result = {
            ok: 0,
            msg: 'username repeated'
        }
    }else{
        userList.push(req.body)
    }
    console.log(userList);
    res.send(JSON.stringify(result))
})

module.exports = router
