var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');  // index.html
var usersRouter = require('./routes/users');  // user modules...

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // static assets
app.set('view engine', 'pug'); // setup views

// middleware => app.use
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// middleware => set static assets
app.use(express.static(path.join(__dirname, 'public')));

// middleware => express router => app.use
app.use('/', indexRouter);
app.use('/user', usersRouter);  //users/details

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use('/wallet', walletRouter)



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
