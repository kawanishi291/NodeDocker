var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 追記
var hello = require('./routes/hello');
var demo1 = require('./routes/demo1');
var demo1p = require('./routes/demo1p');
var demo2 = require('./routes/demo2');
var demo3 = require('./routes/demo3');
var demo4 = require('./routes/demo4');
// 追記

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// 追記
app.use('/hello', hello);
app.use('/demo1', demo1);
app.use('/demo1p', demo1p);
app.use('/demo2', demo2);
app.use('/demo3', demo3);
app.use('/demo4', demo4);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 追記

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
