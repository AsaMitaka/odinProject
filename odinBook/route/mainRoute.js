const express = require('express');
const route = express.Router();

const { indexPageController } = require('../controllers/mainController');
const { signinPageController, signinController } = require('../controllers/signinController');
const { loginPageController, loginController } = require('../controllers/loginController');
const { signoutPageController, signoutController } = require('../controllers/signoutController');

route.get('/', indexPageController);
route.get('/signin', signinPageController);
route.post('/signin', signinController);
route.get('/login', loginPageController);
route.post('/login', loginController);
route.get('/signout', signoutPageController);
route.post('/signout', signoutController);

module.exports = route;
