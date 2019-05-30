const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const routes = require('../app/routes/routes')
routes(app)

const systems = require('../app/routes/system-routes')
systems(app)

module.exports = app
