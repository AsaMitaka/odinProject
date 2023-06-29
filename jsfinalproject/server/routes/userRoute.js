const express = require('express');
const {
  getUser,
  updateUser,
  deleteUser,
  followUser,
  unFollowUser,
} = require('../controllers/users');
const verifyToken = require('../middleware/verifyToken');
const route = express.Router();

route.put('/:id', verifyToken, updateUser);
route.get('/find/:id', getUser);
route.delete('/:id', verifyToken, deleteUser);

route.put('/follow/:id', verifyToken, followUser);
route.put('/unfollow/:id', verifyToken, unFollowUser);

module.exports = route;
