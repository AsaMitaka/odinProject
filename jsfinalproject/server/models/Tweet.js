const { Schema, model } = require('mongoose');

const TweetSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    descriotion: {
      type: String,
      required: true,
      max: 260,
    },
    likes: {
      type: Array,
      defaultValue: [],
    },
  },
  { timestamps: true },
);

module.exports = model('Tweet', TweetSchema);
