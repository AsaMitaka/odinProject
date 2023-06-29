const express = require('express');
const { main, profile } = require('../controllers/main');
const route = express.Router();

route.get('/', main);
route.get('/profile', profile);

module.exports = route;
