var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://chris:everest2900@ds059644.mongolab.com:59644/cmpsc_497');

/*
var mySchema = mongoose.Schema({
	input_genome: String, 
	gff_file: String
});

var ChoiceModel = mongoose.model('choices', mySchema);
*/

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});

router.post('/ilike/:input_genome/:gff_file', function(req, res) {

	var choice = req.params.input_genome;
	var gff_file = req.params.gff_file;
	var newChoice = new ChoiceModel();

	newChoice.input_genome = choice;
	newChoice.gff_file = gff_file;

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
