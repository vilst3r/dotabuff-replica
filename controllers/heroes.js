const rp = require('request-promise')

const heroServices = require('../services/heroes')

const getHeroes = (req, res, next) => {
	req.app.get('api').getHeroes()
	.then(data => res.status(200).json(data))
	.catch(error => res.status(500).json({error: error}))
	// .then(data => {
	//     data.result.heroes.map((item, key) => {
	//         let hero = heroServices.getValidHeroNames(item.name)
	//         const url = api.getHeroIconPath(hero, "full.png")
	//         item.icon_url = url;

	//         hero = hero.replace(/npc_dota_hero_/gi, '')
	//         hero = hero.replace(/_/gi, ' ')
	//         item.localized_name = heroServices.capitalizeLocalisedName(hero)        
	//     })
	//     heroServices.sortHeroMap(data.result.heroes)
	//     res.send(data)
	// })  
}

const getHero = (req, res, next) => {
	req.app.get('api').getHeroes()
	.then(data => res.status(200).json(data.result.heroes.filter(item => item.id == req.params.heroId)))
	.catch(error => res.status(500).json({error: error}))
}

module.exports = {
	getHeroes: getHeroes,
	getHero: getHero
}