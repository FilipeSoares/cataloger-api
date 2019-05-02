const express = require('express');
const body_parser = require('body-parser');

const app = express();
app.use(body_parser.json());


const routes = require('../app/routes/routes');
routes(app);

const systems = require('../app/routes/system-route');
systems(app);

module.exports = app;