const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bookSchema = Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
  },
  genre: {
    type: Schema.Types.ObjectId,
    ref: 'Genre',
  },
});

module.exports = model('Book', bookSchema);
