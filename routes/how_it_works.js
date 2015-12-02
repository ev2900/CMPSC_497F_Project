var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/what_am_i', function(req, res, next) {
	res.render('how_it_works/what_am_i');
});

module.exports = router;
