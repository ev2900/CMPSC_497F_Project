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

module.exports = router;
