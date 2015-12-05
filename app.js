var express = require("express");
var app     = express();
var path    = require("path");
var mongoose = require("mongoose");

//Data Base
mongoose.connect('mongodb://chris:everest2900@ds059644.mongolab.com:59644/cmpsc_497');

//Static Directory
app.use(express.static(__dirname + '/public'));

//Home Page
app.get('/',function(req,res){

  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.listen(3000);

console.log("Running at Port 3000");