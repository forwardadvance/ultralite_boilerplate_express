var config = require('./base');
var env = process.env.NODE_ENV || 'development';
var key;

var envConfig = {
  development: require('./development'),
  production: require('./production'),
}[env];

for( key in envConfig ) {
  config[key] = envConfig[key];
}

module.exports = config;
