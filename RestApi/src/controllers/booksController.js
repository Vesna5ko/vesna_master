const mongoose = require('mongoose');
const Book = mongoose.model('Books');
const requests = require('requests');
const parseString = require('xml2js').parseString

const create = (req, res) => {
  const book = new Book(req.body);
  book.save((err, book) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(book);
    }
  });
};

const readList = (req, res) => {
  Book.find()
    .limit(parseInt(req.params.limit))
    .skip(parseInt(req.params.offset))
    .exec((err, book) => {
      if (!book) {
        return res.status(404).json({
          message: 'Books not found',
        });
      } else if (err) {
        return res.status(404).json(err);
      }
      res.status(200).json(book);
    });
};

/*********************Find book by title**************************/

const readByTitle = (req, res) => {
  Book.find({ title: req.params.title }).exec((err, book) => {
    if (!book || book.length == 0) {
      return res.status(404).json({ message: 'Book not found' });
    } else if (err) {
      return res.status(404).json(err);
    }
    res.status(200).json(book);
  });
};
/*********************Find book by author**************************/
const readByAuthor = (req, res) => {
    
  Book.find({ authors: req.params.authors}  ).exec((err, book) => {
    if (!book || book.length == 0) {
      return res.status(404).json({ message: ' Author not found' });
    } else if (err) {
      return res.status(404).json(err);
    }
    res.status(200).json(book);
  });
};


/*********************Update books**************************/
const update = (req, res) => {
  Book.findOne()
    .or({ title: req.params.title }, { authors: req.params.authors })
    .exec((err, book) => {
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      } else if (err) {
        return res.status(404).json(err);
      }
      // set what to change
      let somethingToChange = false;
      if (req.body.title) {
        book.title = req.body.title;
        somethingToChange = true;
      }
      if (req.body.authors) {
        book.authors = req.body.authors;
        somethingToChange = true;
      }

      if (req.body.read) {
        book.read = req.body.read;
        somethingToChange = true;
      }
      if (req.body.series) {
        book.series = req.body.series;
        somethingToChange = true;
      }
      if (req.body.bookInSeries) {
        book.bookInSeries = req.body.bookInSeries;
        somethingToChange = true;
      }
      if (req.body.rating) {
        book.rating = req.body.rating;
        somethingToChange = true;
      }
      if (req.body.description) {
        book.description = req.body.description;
        somethingToChange = true;
      }
      if (req.body.format) {
        book.format = req.body.format;
        somethingToChange = true;
      }
      if (req.body.img) {
        book.img = req.body.img;
        somethingToChange = true;
      }

      if (!somethingToChange) {
        return res.status(400).json({ message: 'Nothing to update' });
      }
      book.save((err, nevData) => {
        if (err) {
          return res.status(404).json(err);
        } else {
          res.status(200).json(nevData);
        }
      });
    });
};

/*********************Delete by ID**************************/
const deleteIt = (req, res) => {
  Book.findOneAndDelete(
    {
      _id: req.params.id,
    },
    (err, book) => {
      if (!book) {
        return res.status(404).json({
          message: 'Book not found',
        });
      } else if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json({
          message: 'Successfully deleted',
        });
      }
    }
  );
};

/*********************Delete by Title**************************/
const deleteByTitle = (req, res) => {
  Book.findOneAndDelete(
    {
      title: req.params.title,
    },
    (err, book) => {
      if (!book) {
        return res.status(404).json({
          message: 'Book not found',
        });
      } else if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json({
          message: 'Successfully deleted',
        });
      }
    }
  );
};
const searchNewBook = (req, res)=>{
  request
  .get(
    `https://www.goodreads.com/search/index.xml?key=${process.env
      .GOODREADS_KEY}&q=${req.query.q}`
  )
  .then(result =>
    parseString(result, (err, goodreadsResult) =>
      res.json({
        books: goodreadsResult.GoodreadsResponse.search[0].results[0].work.map(
          work => ({
            goodreadsId: work.best_book[0].id[0]._,
            title: work.best_book[0].title[0],
            authors: work.best_book[0].author[0].name[0],
            covers: [work.best_book[0].image_url[0]]
          })
        )
      })
    )
  );
}
  

module.exports = {
  create,
  readList,
  readByTitle,
  readByAuthor,
  update,
  deleteIt,
  deleteByTitle,
  searchNewBook
 
};
