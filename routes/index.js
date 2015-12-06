var express = require('express');
var router = express.Router();

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
	
	var choice = req.params.icecreamchoice;
	var name = req.params.name;
	if(name == 'chris') {
		database.push({choice: choice, name: name});
		
		var responseObject = { message: 'Hey ' + name +  '! I like ' + choice + ' too!' };
		res.send(responseObject);
	} else {
		res.status(401).send();
	}
});

router.get('/likes', function(req, res) {
	if(database.length == 0) {
		res.status(404).send();
	} else {
		res.send(database);
	}
});

module.exports = router;
