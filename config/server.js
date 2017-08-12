const express = require('express');
const consign = require('consign');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');

const application = express();

application.set('view engine', 'ejs');
application.set('views', './app/views');

application.use(express.static('./public'));
application.use(bodyParser.urlencoded({ extended: true }));
application.use(expressValidator());

consign()
    .include('./app/routes')
    .then('./app/models')
    .then('./app/controllers')
    .into(application);

module.exports = application;