const express = require('express');
const router = express.Router();

const heroController = require('../controllers/heroes');

router.get('/', (req, res, next) => heroController.getHeroes(req, res, next));

router.get('/:heroId', (req, res, next) => heroController.getHero(req, res, next));

module.exports = router;