import express from 'express';

import heroServices from '../services/heroes';

const router = express.Router();

router.get('/', (req, res, next) => {
	req.app.get('api').getHeroes()
	// .then(data => res.status(200).json(data))
	.then(data => {
	    data.result.heroes.map((hero, key) => {
	        const url = req.app.get('api').getHeroIconPath(hero.name, "full.png")
	        hero.icon_url = url;

	        hero.name = hero.name.replace(/npc_dota_hero_/gi, '')
	        hero.name = hero.name.replace(/_/gi, ' ')
	        hero.localized_name = heroServices.capitalizeLocalisedName(hero.name)        
	    })
	    heroServices.sortHeroMap(data.result.heroes)
	    res.status(200).json(data)
	})  
	.catch(error => res.status(500).json({error: error}))
});

router.get('/:heroId', (req, res, next) => {
	req.app.get('api').getHeroes()
	.then(data => res.status(200).json(data.result.heroes.filter(item => item.id == req.params.heroId)))
	.catch(error => res.status(500).json({error: error}))
});

module.exports = router;