const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    followers: {
      type: Array,
      defaultValue: [],
    },
    following: {
      type: Array,
      defaultValue: [],
    },
    description: {
      type: String,
    },
    tweets: {
      type: Array,
      defaultValue: [],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('User', UserSchema);
