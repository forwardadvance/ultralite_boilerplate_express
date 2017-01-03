var express = require('express');
var app = express();
var router = require('./middleware/router');
var sass = require('./middleware/sass');

app.use(sass);
app.use('/', router);
app.use(express.static('public'));

module.exports = app;
