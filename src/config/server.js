const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const routes = require('../app/routes')
routes(app)

module.exports = app
