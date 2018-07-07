const request = require('supertest');
const chai = require('chai');
const app = require('../server.js');

/* Chai API */
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/')
      .expect(200, done());
  });
});