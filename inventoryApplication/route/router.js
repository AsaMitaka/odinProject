const express = require('express');

const {
  indexController,
  loginController,
  loginRenderController,
  signupController,
  signupRenderController,
  logoutController,
} = require('../controllers/mainContollers');

const route = express.Router();

route.get('/', indexController);
route.get('/signup', signupRenderController);
route.post('/signup', signupController);
route.post('/login', loginController);
route.get('/login', loginRenderController);
route.get('/log-out', logoutController);

module.exports = route;
