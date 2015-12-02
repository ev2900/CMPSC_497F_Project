var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/thats_right_you', function(req, res, next) {
	res.render('thank_you/thats_right_you');
});

module.exports = router;
