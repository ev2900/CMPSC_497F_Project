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

router.post('/like/:icecreamchoice/:name', function(req, res) {
	var choice = req.params.icecreamchoice;
	var name = req.params.name;
	if(name == 'chris') {
		database.push({choice: choice, name: name});
		
		var responseObject = {message: 'Hey ' + name +  '. I like ' + choice + ' too!'};
		res.send(responseObject);
	};
	else {
		res.send();
	}
});

router.get('/likes', function(req, res) {
	res.send(database);
});



module.exports = router;
