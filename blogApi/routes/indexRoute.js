const express = require('express');
const route = express.Router();

const { mainPageController } = require('../controllers/mainController');
const { loginPageController, loginController } = require('../controllers/loginController');
const { signinPageController, signinController } = require('../controllers/signinController');
const { signoutPageController, signoutController } = require('../controllers/signoutController');
const {
  postPageController,
  postCreatePageController,
  postCreateController,
  postPageIdController,
  postPageIdDeleteController,
} = require('../controllers/postController');
const { profilePageController } = require('../controllers/profileController');

const signinValidator = require('../validators/signin');
const loginValidator = require('../validators/login');
const isPostValidator = require('../validators/post');

route.get('/signin', signinPageController);
route.post('/signin', signinValidator, signinController);

route.get('/login', loginPageController);
route.post('/login', loginValidator, loginController);

route.get('/signout', signoutPageController);
route.post('/signout', signoutController);

route.get('/profile', profilePageController);

route.get('/', postPageController);
route.get('/post/:id', postPageIdController);
route.delete('/post/:id', postPageIdDeleteController);

route.get('/createpost', postCreatePageController);
route.post('/createpost', isPostValidator, postCreateController);

module.exports = route;
