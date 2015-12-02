var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/talk', function(req, res, next) {
	res.render('talk_with_a_guide/talk');
});

module.exports = router;
