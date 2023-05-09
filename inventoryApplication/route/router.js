const express = require('express');

const {
  indexController,
  loginController,
  loginRenderController,
  signupController,
  signupRenderController,
} = require('../controllers/mainContollers');

const route = express.Router();

route.get('/', indexController);
route.get('/signup', signupRenderController);
route.post('/signup', signupController);
route.post('/login', loginController);
route.get('/login', loginRenderController);

module.exports = route;
