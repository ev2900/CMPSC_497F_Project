var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/reviews', function(req, res, next) {
	res.render('user_testimonies/reviews');
});

module.exports = router;
