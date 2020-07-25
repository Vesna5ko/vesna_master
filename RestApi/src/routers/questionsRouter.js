const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController');

router
.route('/questions')
.get(questionsController.question)



module.exports = router;