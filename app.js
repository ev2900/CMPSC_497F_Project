var express = require("express");
var app     = express();
var path    = require("path");

//Static Directory
app.use(express.static(__dirname + '/public'));

//Home Page
app.get('/',function(req,res){

  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.listen(3000);

console.log("Running at Port 3000");
