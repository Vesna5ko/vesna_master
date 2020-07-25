const express = require('express');
const router = express.Router();
const helloworldController = require('../controllers/helloWorldController');

router
    .route('/hellowolrd')
    .get(helloworldController.hello)
    

router
    .route('/hellovesna')
    .get(helloworldController.helloVesna)

module.exports = router;