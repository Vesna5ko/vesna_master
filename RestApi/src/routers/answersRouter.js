const express = require('express');
const router = express.Router();
const answersController = require('../controllers/answersController');

router
.route('/answers')
.get(answersController.answer)

router
.route('/answersjob')
.get(answersController.answerjob)

module.exports = router;