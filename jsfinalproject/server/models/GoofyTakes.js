const { Schema, model } = require('mongoose');

const GoofyTakes = new Schema({
  text: { type: String, require: true },
  //   author: { type: ObjectId, required: true, ref: 'User' },
  //   likes: [{ type: ObjectId, ref: 'User' }],
});

module.exports = model('GoofyTakes', GoofyTakes);
