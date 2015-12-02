var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/types_of_acounts', function(req, res, next) {
	res.render('plans/types_of_acounts');
});

module.exports = router;
