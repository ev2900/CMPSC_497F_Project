var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://chris:everest2900@ds059644.mongolab.com:59644/cmpsc_497');

var mySchema = mongoose.Schema({
	genome: String, 
	gff: String
});

var ChoiceModel = mongoose.model('choices', mySchema);

// Home Page
router.get('/', function(req, res, next) {
	res.render('index');
});

// Input Page
router.get('/', function(req, res, next) {
	res.render('input');
});

//Post
router.post('/ilike/:genome/:gff', function(req, res) {
	
	var choice = req.params.genome;
	var gff = req.params.gff;
	var newChoice = new ChoiceModel();
	newChoice.genome = choice;
	newChoice.gff = gff;
	newChoice.save(function(err, savedObject) {
		if(err) {
			console.log(err);
			res.status(500).send();
		} else {
			res.send(savedObject);
		}
	});
});

module.exports = router;
