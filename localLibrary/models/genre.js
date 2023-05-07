const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const genreSchema = Schema({
  name: String,
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
});

module.exports = model('Genre', genreSchema);
