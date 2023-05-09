const express = require('express');

const mainController = require('../controllers/main');
const signinController = require('../controllers/sign');
const signoutController = require('../controllers/signout');
const loginController = require('../controllers/login');

const route = express.Router();

route.get('/', mainController);
route.get('/signin', signinController);
route.get('/signout', signoutController);
route.get('/login', loginController);

module.exports = route;
