const express = require('express');
const route = express.Router();

const { indexPageController } = require('../controllers/mainController');
const { signinPageController, signinController } = require('../controllers/signinController');
const { loginPageController, loginController } = require('../controllers/loginController');
const { signoutPageController, signoutController } = require('../controllers/signoutController');
const {
  postPageController,
  createPostPageController,
  createPostController,
} = require('../controllers/postController');
const { profilePageController } = require('../controllers/profileController');

route.get('/', indexPageController);
route.get('/signin', signinPageController);
route.post('/signin', signinController);
route.get('/login', loginPageController);
route.post('/login', loginController);
route.get('/signout', signoutPageController);
route.post('/signout', signoutController);

route.get('/createpost', createPostPageController);
route.post('/createpost', createPostController);
route.get('/post/:id', postPageController);
route.get('/profile/:id', profilePageController);

module.exports = route;
