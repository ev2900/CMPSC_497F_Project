var express = require('express');
var path    = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var config = require('./config');

var routes = require('./routes/index');

mongoose.connect(config.mongoUri);

var app = express();

//View Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Static Directory
app.use(express.static(path.join(__dirname, 'public')));

//Home Page
app.use('/', routes);


module.exports = app;
