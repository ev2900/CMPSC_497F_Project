var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ring_email', function(req, res, next) {
	res.render('contact/ring_email');
});

module.exports = router;
