const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const authorSchema = Schema({
  name: String,
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
});

module.exports = model('Author', authorSchema);
