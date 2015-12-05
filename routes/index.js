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

router.get('/like/:icecreamchoice/:name', function(req, res) {
	var choice = req.params.icecreamchoice;
	var name = req.params.name;
	var responseObject = {message: 'Hey ' + name +  ' I like ' + choice + ' too!'};
	res.send(responseObject);
});



module.exports = router;
