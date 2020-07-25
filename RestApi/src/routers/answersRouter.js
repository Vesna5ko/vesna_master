const express = require('express');
const router = express.Router();
const answersController = require('../controllers/answersController');

router
.route('/answers')
.get(answersController.answer)

module.exports = router;