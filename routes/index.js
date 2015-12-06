var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://chris:everest2900@ds059644.mongolab.com:59644/cmpsc_497');

var mySchema = mongoose.Schema({
	icecreamname: String, 
	name: String
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

router.post('/ilike/:icecreamchoice/:name', function(req, res) {
	if(req.body.formfactor) {
		console.log(req.body.formfactor);
	} else {
		console.log('No form formfactor!');
	}

	if(name == 'chris') {
		console.log('Name is ' + name);
	}

	var choice = req.params.icecreamchoice;
	var name = req.params.name;
	var newChoice = new ChoiceModel();
	newChoice.icecreamname = choice;
	newChoice.name = name;
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
	if(database.length == 0) {
		var responseObject = undefined;
		if(select && select == 'count') {
			responseObject = {count: 0};
		}


		res.status(404).send(responseObject);
	} else {
		var responseObject = database;
		if(select && select == 'count') {
			responseObject = {count: database.length};
		}

		res.send(responseObject);
	}
});

module.exports = router;
