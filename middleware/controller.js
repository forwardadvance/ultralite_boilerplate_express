var pug = require('pug');

module.exports = {
  index: function(req, res) {
    var html = pug.renderFile('./views/index.pug');
    res.send(html);
  },
  create: function(req, res) {
    res.send('Creating');
  },
  success: function(req, res) {
    var html = pug.renderFile('./views/thanks.pug');
    res.send(html);
  },
  error: function(req, res) {
    var html = pug.renderFile('./views/index.pug');
    res.send(html);
  }
}
