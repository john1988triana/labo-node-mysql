'use strict'

const router = require('express').Router()
const users = require('./routers/usersRouter')

router.use('/users', users)

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Conexión existosa con el API' })
})

module.exports = router;
