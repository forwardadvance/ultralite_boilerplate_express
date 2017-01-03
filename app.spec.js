var app = require('./app');
var request = require('supertest');

console.log("getting root");
request(app)
  .get('/')
  .expect('Content-Type', 'text/html; charset=utf-8')
  .expect(200)
  .end(function(err, res){
    if (err) {
      throw err
    } else {
      console.log('passed')
    };
  });


console.log("getting sass");
request(app)
  .get('/app.css')
  .expect('Content-Type', 'text/html; charset=utf-8')
  .expect(200)
  .end(function(err, res){
    if (err) {
      throw err
    } else {
      console.log('passed')
    };
  });
