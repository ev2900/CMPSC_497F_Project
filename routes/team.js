var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/meet', function(req, res, next) {
	res.render('team/meet');
});

module.exports = router;
