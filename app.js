var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var expressSession = require('express-session');
var flash = require('connect-flash');
var connectMongo = require('connect-mongo');

var config = require('./config');

var routes = require('./routes/index');
var about = require('./routes/about');
var careers = require('./routes/careers');
var contact = require('./routes/contact');
var how_it_works = require('./routes/how_it_works');
var user_testimonies = require('./routes/user_testimonies');
var log_in = require('./routes/log_in');
var plans = require('./routes/plans');
var talk_with_a_guide = require('./routes/talk_with_a_guide');
var team = require('./routes/team');
var users = require('./routes/users');
var thank_you = require('./routes/thank_you');

var MongoStore = connectMongo(expressSession);

var passportConfig = require('./auth/passport-config');
var restrict = require('./auth/restrict');
passportConfig();

mongoose.connect(config.mongoUri);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession(
  {
    secret: 'could you would you with a fox',
    saveUninitialized: false,
    resave: false,
    stroe: new MongoStore({
    	mongooseConnection: mongoose.connection	
    })
  }
));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/about', about);
app.use('/careers', careers);
app.use('/contact', contact);
app.use('/how_it_works', how_it_works);
app.use('/user_testimonies', user_testimonies);
app.use('/routes', routes);
app.use('/log_in', log_in);
app.use('/plans', plans);
app.use('/talk_with_a_guide', talk_with_a_guide);
app.use('/team', team);
app.use('/users', users);
app.use('/thank_you', thank_you);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
