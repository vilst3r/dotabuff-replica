var express = require('express');
var router = express.Router();

var rp = require('request-promise')
var dotaWebAPI = require('dota2_web_api');

var api = new dotaWebAPI("272B58CE89E7A8FD84FE7D4B138966B4");

var opendota_api_root = 'https://api.opendota.com/api';

var heroMap = [];

function capitalizeFirstLetter(string) {
    return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function sortHeroMap(map) {
    map.sort( (a, b) =>
    (a.localized_name < b.localized_name) ?
      -1
    :
      (a.localized_name > b.localized_name) ? 1 : 0
    )    
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/heroes', function(req, res, next) {
    api.getHeroes()
    .then(data => {
        data.result.heroes.map((item, key) => {
            var hero = item.name;
            var url = api.getHeroIconPath(hero, "full.png")
            item.icon_url = url;

            // converting outdated hero names
            hero === "npc_dota_hero_antimage" ? hero = "npc_dota_hero_anti-mage" : null
            hero === "npc_dota_hero_zuus" ? hero = "npc_dota_hero_zeus" : null
            hero === "npc_dota_hero_furion" ? hero = "npc_dota_hero_prophet" : null
            hero === "npc_dota_hero_centaur" ? hero = "npc_dota_hero_centaur_warrunner" : null
            hero === "npc_dota_hero_doom_bringer" ? hero = "npc_dota_hero_doom" : null
            hero === "npc_dota_hero_magnataur" ? hero = "npc_dota_hero_magnus" : null
            hero === "npc_dota_hero_necrolyte" ? hero = "npc_dota_hero_necrophos" : null
            hero === "npc_dota_hero_nevermore" ? hero = "npc_dota_hero_shadow_fiend" : null
            hero === "npc_dota_hero_queenofpain" ? hero = "npc_dota_hero_queen_of_pain" : null
            hero === "npc_dota_hero_rattletrap" ? hero = "npc_dota_hero_clockwerk" : null
            hero === "npc_dota_hero_shredder" ? hero = "npc_dota_hero_timbersaw" : null
            hero === "npc_dota_hero_treant" ? hero = "npc_dota_hero_treant_protector" : null
            hero === "npc_dota_hero_vengefulspirit" ? hero = "npc_dota_hero_vengeful_spirit" : null
            hero === "npc_dota_hero_windrunner" ? hero = "npc_dota_hero_windranger" : null

            hero = hero.replace(/npc_dota_hero_/gi, '')
            hero = hero.replace(/_/gi, ' ')
            item.localized_name = capitalizeFirstLetter(hero)
        })
        sortHeroMap(data.result.heroes)
        heroMap = data.result.heroes;
        res.send(data)
    })    
});

router.get('/heroes/:hero', function(req, res, next) {
    
    
    // rp(opendota_api_root + '/heroes')
    // .then(response => JSON.parse(response))
    // .then(data => 
    //     data.map((item, key) =>
    //         item.localized_name === req.params.hero ?
    //             rp(opendota_api_root + '/heroes/' + item.id + '/matchups')
    //             .then(response => JSON.parse(response))
    //             .then(test => {
    //                 test.map((item,key) => {
    //                     heroMap.map(a => a.id === item.hero_id? item.hero_name = a.name: null)
    //                 })
    //                 res.send(test)
    //             }
    //             )
    //         :
    //             null
    //     )
    // )
})

module.exports = router;
