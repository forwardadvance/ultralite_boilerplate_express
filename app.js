var express = require('express');
var router = require('./middleware/router');
var sass = require('./middleware/sass');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var bodyParser = require('body-parser');
var config = require('./config');

var app = express();

// Post data
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Sessions
app.use(cookieParser(config.cookieName));
app.use(session({ secret: config.sessionSecret, cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }))
app.use(flash());

// SASS
app.use(sass);

// Routes
app.use('/', router);

// Public
app.use(express.static('public'));

module.exports = app;
