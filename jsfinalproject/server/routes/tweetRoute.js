const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const {
  createTweet,
  deleteTweet,
  likeOrDislikeTweet,
  getAllUserTweets,
  getExploreTweet,
} = require('../controllers/tweet');
const route = express.Router();

route.post('/', verifyToken, createTweet);
route.delete('/:id', verifyToken, deleteTweet);
route.put('/:id', likeOrDislikeTweet);
route.get('/timeline/:id', getAllTweets);
route.get('/user/all/:id', getAllUserTweets);
route.get('/explore', getExploreTweet);

module.exports = route;
