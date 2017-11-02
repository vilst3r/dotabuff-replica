var express = require('express');
var router = express.Router();
var request = require('request');
var rp = require('request-promise');

var opendota_api_root = 'https://api.opendota.com/api';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// routing a json response
router.get('/heroes', function(req, res, next) {
    // request.get(opendota_api_root + '/heroStats').pipe(test);
    // request(opendota_api_root + '/heroStats', function(error, response, body) {
      
    // }).pipe(request(opendota_api_root));    
    var test;
    rp(opendota_api_root + '/heroStats').then(function(res) {
        test = res;
    });
    console.log(test);
});

module.exports = router;
