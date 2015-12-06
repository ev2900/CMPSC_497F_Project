var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://chris:everest2900@ds059644.mongolab.com:59644/cmpsc_497');

var mySchema = mongoose.Schema({
	input_genome: String, 
	gff_file: String
});

var ChoiceModel = mongoose.model('choices', mySchema);

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('/healthcheck', function(req, res) {
	var responseObject = { message: 'OK' };
	res.send(responseObject);
});

var database = []; 

router.post('/ilike/:icecreamchoice/:gff_file', function(req, res) {
	if(req.body.formfactor) {
		console.log(req.body.formfactor);
	} else {
		console.log('No form formfactor!');
	}

	if(gff_file == 'chris') {
		console.log('Name is ' + gff_file);
	}

	var choice = req.params.icecreamchoice;
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

router.get('/likes', function(req, res) {
	var logvalue = req.headers['log'];
	if(logvalue && logvalue == 'info') {
		console.log("Request recived for /likes");
	}

	var select = req.query.select;

	ChoiceModel.find({}, function(err, foundData) {
		if(err) {
			console.log(err);
			res.status(500).send();
		} else {
			if(foundData.length == 0) {
				var responseObject = undefined;
				if(select && select == 'count') {
					responseObject = {count: 0};
				}

				res.status(404).send(responseObject);
			} else {
				var responseObject = foundData;
				if(select && select == 'count') {
					responseObject = {count: database.length};
				}
				res.send(responseObject);
			}
		}
	});

});

module.exports = router;
