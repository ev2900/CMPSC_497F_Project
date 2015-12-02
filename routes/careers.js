var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/work', function(req, res, next) {
	res.render('careers/work');
});

module.exports = router;
