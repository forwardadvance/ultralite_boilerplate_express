var pug = require('pug');

var controller = function(req, res) {
  var html = pug.renderFile('./views/about.pug');
  res.send(html);
};

module.exports = controller;
