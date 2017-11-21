var express = require('express');
var router = express.Router();

// non-VHA env development
// var rp = require('request-promise')

// if developing on VHA device
var rp = require('request-promise').defaults({
    proxy: 'http://internet-proxy.dc.vodafone.com.au:8080'
});

var heroes = require('../controllers/heroes.js');

var opendota_api_root = 'https://api.opendota.com/api';

var heroMap = [];

rp(opendota_api_root + '/heroStats')
    .then(response => JSON.parse(response))
    .then(data => 
        data.map((item, key)=> 
            heroMap.push({id:item.id, name:item.localized_name}) 
        )
    )

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// routing a json response
router.get('/heroes', function(req, res, next) {
    rp(opendota_api_root + '/heroStats')
    .then(response => {
        var test = response;
        heroes.listHeroes(test, req, res);
        
    })
});

router.get('/heroes/:hero', function(req, res, next) {
    rp(opendota_api_root + '/heroes')
    .then(response => JSON.parse(response))
    .then(data => 
        data.map((item, key) =>
            item.localized_name === req.params.hero ?
                rp(opendota_api_root + '/heroes/' + item.id + '/matchups')
                .then(response => JSON.parse(response))
                .then(test => {
                    test.map((item,key) => {
                        heroMap.map(a => a.id === item.hero_id? item.hero_name = a.name: null)
                    })
                    res.send(test)
                }
                )
            :
                null
        )
    )
})

module.exports = router;
