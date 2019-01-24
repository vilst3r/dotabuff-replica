import express from 'express';
import HeroService from '../services/hero.service';

const router = express.Router();
const heroService = new HeroService()

router.get('/', (req, res, next) => {
	heroService.getHeroes(req.app.locals.api)
	.then(data => {res.status(200).json(data)})
	.catch(error => {res.status(500).json({error: error})})
});

router.get('/:heroId', (req, res, next) => {
	heroService.getHero(req.app.locals.api, req.params.heroId)
	.then(data => {res.status(200).json(data)})
	.catch(error => res.status(500).json({error: error}))
});

module.exports = router;