import express from 'express';
import HeroService from '../services/hero.service';

const router = express.Router();
// const heroService = new HeroService()

router.get('/', (req, res, next) => {


	req.app.locals.api.getHeroes()
	.then(data => {
	    data.result.heroes.map(hero => {
	        const url = req.app.locals.api.getHeroIconPath(hero.name, "full.png")
	        hero.icon_url = url;

	        hero.name = hero.name.replace(/npc_dota_hero_/gi, '')
	        hero.name = hero.name.replace(/_/gi, ' ')
	        hero.localized_name = HeroService.capitalizeLocalisedName(hero.name)        
	    })
		HeroService.sortHeroMap(data.result.heroes)
	    res.status(200).json(data)
	})  
	.catch(error => res.status(500).json({error: error}))
});

router.get('/:heroId', (req, res, next) => {
	req.app.locals.api.getHeroes()
	.then(data => res.status(200).json(data.result.heroes.filter(item => item.id == req.params.heroId)))
	.catch(error => res.status(500).json({error: error}))
});

module.exports = router;