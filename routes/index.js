var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var heroes = require('../controllers/heroes.js');

var opendota_api_root = 'https://api.opendota.com/api';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// routing a json response
router.get('/heroes', function(req, res, next) {
    rp(opendota_api_root + '/heroStats').then(function(response) {
        var test = response;
        heroes.listHeroes(test, req, res);
    });
});

router.get('/heroes/:hero', function(req, res, next) {
    var id = req.params.hero
    console.log(id);
    console.log(req.url);
})

module.exports = router;
