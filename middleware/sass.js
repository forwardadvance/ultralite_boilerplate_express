
var sassMiddleware = require('node-sass-middleware');
var path = require('path');

console.log(path.join(__dirname, '../public'));

module.exports = sassMiddleware(
  {
    src: path.join(__dirname, '../public'),
    dest: path.join(__dirname, '../public'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  'public'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
  }
);
