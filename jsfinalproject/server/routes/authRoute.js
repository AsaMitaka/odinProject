const express = require('express');
const { login } = require('../controllers/login');
const { signup } = require('../controllers/signup');
const route = express.Router();

route.get('/login', login);
route.get('/signup', signup);

module.exports = route;
