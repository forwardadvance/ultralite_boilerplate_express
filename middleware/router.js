var controller = require('./controller');
var router = require('express').Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.get('/thanks', controller.success);
router.get('/error', controller.error);

module.exports = router
