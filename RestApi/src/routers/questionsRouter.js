const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController');

router
.route('/questions')
.get(questionsController.question)

router
.route('/questionjob')
.get(questionsController.questionjob)

module.exports = router;