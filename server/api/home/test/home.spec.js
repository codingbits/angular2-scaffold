/* jshint -W024, -W101, -W079, -W098 */
/* jshint expr:true */
'use strict';

var should = require('should');
var request = require('supertest');
var app = require(__dirname + '/../../..');

describe('GET /api/v1/home', function() {

  it('should respond with JSON data', function(done) {
    request(app)
      .get('/api/v1/home')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.generator.should.be.equal("yo-generator");
        done();
      });
  });
});