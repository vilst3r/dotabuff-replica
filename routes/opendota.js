var express = require('express');
var router = express.Router();
var request = require('request');

var root = 'https://api.opendota.com/api/';

/* GET api root */
router.get('/', function(req, res, next) {
  request(root, function(error, response, body) {
      console.log(response);
  }).pipe(res);
    
});

module.exports = router;