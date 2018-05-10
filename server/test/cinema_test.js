// @flow
var should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
express = require('express'),
winston = require('winston'),
expressWinston = require('express-winston');

const config = require('../config');
const app = express();

const logger = new winston.Logger({
  level: "debug",
  transports: [
    // Log to console
    new winston.transports.Console()
  ]});

describe('Cinema API CRUD', function(){
  var api = {};
  const baseAPI = '/api'
  before(function setupHostApi() {
    if (process.env.NODE_ENV === "coverage") {
      const app = express();
      logger.debug('URL: ' + config.tests.coverage_base_url);
      app.use('', require(config.tests.coverage_base_url));
      api = supertest(app);
    } else {
      api = supertest();
      api = supertest(config.tests.base_url);
    }
  });

  it('has not been implemented yet', function(done) {
    logger.debug('In test URL: '+ baseAPI + '/cinema');
    api.get(baseAPI + '/cinema')
    .set('Accept', 'application/x-www-form-urlencoded')
    .expect(501)
    .end(function(err, res){
      if (err) return done(err);
      expect(res.error.text).to.equal("Not yet implemented - popular cinema items.");
      done();
    });
  });
  it('has not been implemented yet', function(done) {
    api.get(baseAPI +'/cinema/popular')
    .set('Accept', 'application/x-www-form-urlencoded')
    .expect(501)
    .end(function(err, res){
      if (err) return done(err);
      expect(res.error.text).to.equal("Not yet implemented - popular cinema items.");
      done();
    });
  });
  it('has not been implemented yet', function(done) {
    api.get(baseAPI +'/cinema/8052')
    .set('Accept', 'application/x-www-form-urlencoded')
    .expect(501)
    .end(function(err, res){
      if (err) return done(err);
      expect(res.error.text).to.equal("Not yet implemented - CinemaItem:8052");
      done();
    });
  });
  it('has not been implemented yet', function(done) {
    api.get(baseAPI +'/search')
    .set('Accept', 'application/x-www-form-urlencoded')
    .expect(501)
    .end(function(err, res){
      if (err) return done(err);
      expect(res.error.text).to.equal("Not yet implemented.");
      done();
    });
  });
});
