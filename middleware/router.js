var controllers = require('../controllers');
var router = require('express').Router();

router.get('/', controllers.index);
router.get('/about', controllers.about);

module.exports = router
