const express = require('express')

var app = express()
app.use('/', require('./services/product'))
module.exports = app