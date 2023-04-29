const controller = require('./dbcontroller.js');
const router = require('express').Router();

router.post('', controller.create);


module.exports = router;