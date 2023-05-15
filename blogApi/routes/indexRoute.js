const express = require('express');
const route = express.Router();

const { mainPageController } = require('../controllers/mainController');
const { loginPageController, loginController } = require('../controllers/loginController');
const { signinPageController, signinController } = require('../controllers/signinController');
const { signoutPageController, signoutController } = require('../controllers/signoutController');
const { postPageController } = require('../controllers/postController');
const { profilePageController, postPageIdController } = require('../controllers/profileController');

const signinValidator = require('../validators/signin');
const loginValidator = require('../validators/login');

route.get('/', mainPageController);

route.get('/signin', signinPageController);
route.post('/signin', signinValidator, signinController);

route.get('/login', loginPageController);
route.post('/login', loginValidator, loginController);

route.get('/signout', signoutPageController);
route.post('/signout', signoutController);

route.get('/profile', profilePageController);

route.get('/post', postPageController);
// route.get('/post/:id', postPageIdController);

module.exports = route;
