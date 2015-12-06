var express = require('express');
var router = express.Router();

router.get('/errorcount', function(req, res, next) {
	res.send({errorcount:0});

});


module.exports = router;
