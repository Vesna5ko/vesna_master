const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    img: mongoose.Schema.Types.String,
    title: mongoose.Schema.Types.String,
    series: mongoose.Schema.Types.String,
    bookInSeries: mongoose.Schema.Types.Number,
    authors: mongoose.Schema.Types.String,
    rating: mongoose.Schema.Types.Number,
    isbn: mongoose.Schema.Types.String,
    generes: mongoose.Schema.Types.Array,
    description: mongoose.Schema.Types.String,
    read: {
        type: mongoose.Schema.Types.String,
        enum: ['read', 'not-read', 'to-read'],
        default: 'not-read'
    },
    store: mongoose.Schema.Types.String,
    format: {
        type: mongoose.Schema.Types.String,
        enum: ['hardcover', 'audiobook', 'e-book'],
        default: 'hardcover'
    },
});

module.exports = mongoose.model('Books', BookSchema);