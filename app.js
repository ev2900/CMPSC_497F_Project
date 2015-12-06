var express = require('express');
var path    = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var config = require('./config');

var routes = require('./routes/index');

mongoose.connect(config.mongoUri);

var app = express();

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//View Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Static Directory
app.use(express.static(path.join(__dirname, 'public')));

//Home Page
app.use('/', routes);

app.listen(3000);

console.log("Running at Port 3000");