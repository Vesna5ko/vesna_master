const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');
const { get } = require('mongoose');


router
    .route('/books')
    .get(booksController.readList)
    .post(booksController.create)

router
    .route('/books/offset/:offset/limit/:limit')
    .get(booksController.readList);

router
    .route('/books/:title')
    .get(booksController.readByTitle)
    .put(booksController.update)
    .delete(booksController.deleteByTitle);


router
    .route('/books/author/:authors')
    .get(booksController.readByAuthor)
    .put(booksController.update);


router
    .route('/books/:id')
    .delete(booksController.deleteIt);
router
.route('/books/:search')
.get(booksController.searchNewBook)
   

module.exports = router;