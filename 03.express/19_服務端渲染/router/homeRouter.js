const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({msg:'home'})
})

router.get('/list', (req, res) => {
    res.send(['111', '222', '333'])
})

module.exports = router