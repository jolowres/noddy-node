const express = require('express')
const cors = require('./handlers/cors')
const bodyParser = require('body-parser')

var app = express()
app.use(cors)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', require('./services/product'))
module.exports = app