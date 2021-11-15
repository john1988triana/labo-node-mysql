'use strict'

const express = require('express');
const cors = require('cors');
const { App } = require('./src/utils/config');
const router = require('./src/routers');

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', router)

app.listen(App.PORT, () => console.log(`Listening on port ${App.PORT}`))
