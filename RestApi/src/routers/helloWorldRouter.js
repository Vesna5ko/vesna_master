const express = require('express');
const router = express.Router();
const helloWorldController = require('../controllers/helloWorldController');

router
    .route('/hellowolrd')
    .get(helloWorldController.hello)
    

router
    .route('/hellovesna')
    .get(helloWorldController.helloVesna)

module.exports = router;