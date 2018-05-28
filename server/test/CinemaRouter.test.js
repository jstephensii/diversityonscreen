var should = require('chai').should(),
expect = require('chai').expect,
request = require('supertest'),
express = require('express'),
winston = require('winston'),
expressWinston = require('express-winston');

const config = require('../config');
const logger = require('../src/utils/logger');
const app = express();

describe('Cinema API CRUD', function(){
  var api = {};
  const baseAPI = '/api'
  before(function setupHostApi() {
    if (process.env.NODE_ENV === "coverage") {
      const app = express();
      logger.debug('URL: ' + config.tests.coverage_base_url);
      app.use('', require(config.tests.coverage_base_url));
      api = request(app);
    } else {
      //api = request();
      api = request(config.tests.base_url);
    }
  });

  describe.only('Get /api/cinema - get popular cinema items', function(){
    let expectedProps = ['id', 'type', 'cinema', 'modifiedOn'];
    it('should return a JSON array', function(done){
      api.get(baseAPI + '/cinema')
      .end(function(err, res){
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        done();
      });
    });
    it('should return objects with correct props', function(done) {
      api.get(baseAPI + '/cinema')
      .end(function(err, res){
        expect(res.status).to.equal(200);
        let sampleKeys = Object.keys(res.body);
        expectedProps.forEach(function(key){
          expect(sampleKeys.includes(key)).to.equal(true);
        });
        done();
      });
    });
    it('shouldn\'t return objects with extra props', function(done) {
      api.get(baseAPI + '/cinema')
      .end(function(err, res){
        expect(res.status).to.equal(200);
        let extraProps = Object.keys(res.body).filter(function(key){
          return !expectedProps.includes(key);
        });
        expect(extraProps.length).to.equal(0);
        done();
      });
    });
    it('should have 20 movies and 20 tv shows', function(done) {
      api.get(baseAPI + '/cinema')
      .end(function(err, res){
        expect(res.status).to.equal(200);
        expect(res.body.cinema.movies).to.have.lengthOf(20);
        expect(res.body.cinema.tv).to.have.lengthOf(20);
        done();
      });
    });
    it('should return objects with correct props from /cinema/popular', function(done) {
      api.get(baseAPI + '/cinema/popular')
      .end(function(err, res){
        expect(res.status).to.equal(200);
        let sampleKeys = Object.keys(res.body);
        expectedProps.forEach(function(key){
          expect(sampleKeys.includes(key)).to.equal(true);
        });
        done();
      });
    });
  }); // End API internal calls
  it('Get /api/cinema?id=8052 - has not been implemented yet', function(done) {
    return api.get(baseAPI +'/cinema/8052')
    .set('Accept', 'application/x-www-form-urlencoded')
    .end(function(err, res){
      expect(res.status).to.equal(501);
      if (err) return done(err);
      expect(res.error.text).to.equal("Not yet implemented - CinemaItem:8052");
      done();
    });
  });
  it('Get api/search - has not been implemented yet', function(done) {
    return api.get(baseAPI +'/search')
    .set('Accept', 'application/x-www-form-urlencoded')
    .end(function(err, res){
      expect(res.status).to.equal(501);
      if (err) return done(err);
      expect(res.error.text).to.equal("Not yet implemented.");
      done();
    });
  });
});
