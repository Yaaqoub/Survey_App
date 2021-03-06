let createError = require('http-errors'),
    express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    env = require('dotenv').load(),
    passport   = require('passport'),
    session    = require('express-session'),
    bodyParser = require('body-parser');


//Exported models
let models = require("./app/models");

//Sync Database
if (process.env.NODE_ENV === 'production') {
    models.sequelize.sync().then(function() {}).catch(function(err) {
        throw new Error(err);
    });
}

if (process.env.NODE_ENV === 'development') {
    models.sequelize.sync(/*{force: true}*/).then(function() {
        //require('./app/config/initial_data/index')(models);
    }).catch(function(err) {
        throw new Error(err);
    });
}

let app = express();

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({
    secret: process.env.SESSION_SECRET || 'mySecretKey',
    resave: true,
    saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'static')));


/**
 * Routes
 */
require('./app/routes/index')(app);


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
