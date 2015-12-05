var express = require("express");
var path    = require("path");
var mongoose = require("mongoose");

var routes = require('./routes/index');

var app = express();

//Data Base
mongoose.connect('mongodb://chris:everest2900@ds059644.mongolab.com:59644/cmpsc_497');

//View Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs')

//Static Directory
app.use(express.static(path.join(__dirname, 'public')));

//Home Page
app.use('/', routes);

app.listen(3000);

console.log("Running at Port 3000");