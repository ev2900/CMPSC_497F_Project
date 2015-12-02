var express = require('express');
var router = express.Router();
var passport = require('passport');
var config = require('../config');
var userService = require('../services/user-service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
	var vm = {
		title: 'Create an account'
	};
	res.render('users/create', vm);
});

router.post('/create', function(req, res, next) {
	userService.addUser(req.body, function(err) {
		if(err) {
			console.log(err);
			var vm = {
				title: 'Create an account',
				input: req.body,
				error: err
			};
			delete vm.input.password;
			return res.render('users/create', vm);
		}
		req.login(req.body, function(err) {
			res.redirect('/thank_you/thats_right_you');
		});
	});
});

router.post('/login', 
  function(req, res, next) {
    req.session.orderId = 12345;
    if (req.body.rememberMe) {
      req.session.cookie.maxAge = config.cookieMaxAge;
    }
    next();
  },
  passport.authenticate('local', {
    failureRedirect: '/', 
    successRedirect: '/thank_you/thats_right_you',
    failureFlash: 'Invalid credentials'
  }));


router.get('/logout', function(req, res, next) {
	req.logout();
	res.redirect('/');
});

module.exports = router;
