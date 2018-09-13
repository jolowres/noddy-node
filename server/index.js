const express = require('express')
const cors = require('./handlers/cors')

var app = express()
app.use(cors)
app.use('/', require('./services/product'))
module.exports = app