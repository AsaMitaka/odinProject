const { Schema, model } = require('mongoose');

const User = new Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  name: { type: String, require: true },
  // goofyTakes: [{ type: ObjectId, ref: 'GoofyTakes' }],
  // goofyLikes: [
  //   {
  //     userId: { type: ObjectId, required: true, ref: 'User' },
  //     goofyTakesId: { type: ObjectId, required: true, ref: 'GoofyTakes' },
  //   },
  // ],
  avatar: { type: String },
});

module.exports = model('User', User);
