const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
    // return API format as object - todo
    res.render('index', { title: 'Express' });
})

module.exports = router;