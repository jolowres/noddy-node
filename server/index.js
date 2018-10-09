const express = require('express')
const cors = require('./handlers/cors')
const bodyParser = require('body-parser')
const dataService = require('./services/data-service')

var app = express()
app.use(cors)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', require('./services/product'))
dataService.getData()
module.exports = app