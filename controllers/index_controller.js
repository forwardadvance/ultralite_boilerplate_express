var pug = require('pug');
var User = require('../models/user');

var controller = function(req, res) {
  var user = req.session.user || new User({name:'anonymous'})
  var html = pug.renderFile('./views/index.pug', {user: user});
  res.send(html);
};

module.exports = controller;
