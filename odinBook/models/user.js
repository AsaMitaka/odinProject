const { model, Schema } = require('mongoose');

const UserSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'post',
    },
  ],
});

module.exports = model('User', UserSchema);
