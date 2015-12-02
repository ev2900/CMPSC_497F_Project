var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/senti_sense', function(req, res, next) {
	res.render('about/senti_sense');
});

module.exports = router;
