const userSignInValidation = require('../validators/validators');
const express = require('express');

const mainController = require('../controllers/main');
const verifyToken = require('../middleware/auth');
const redirectAuthenticated = require('../middleware/redirect');
const { signinController, signinRenderController } = require('../controllers/sign');
const signoutController = require('../controllers/signout');
const { loginController, loginRenderController } = require('../controllers/login');
const { homeRenderController, homeController } = require('../controllers/home');

const route = express.Router();

route.get('/', mainController);
route.get('/signin', redirectAuthenticated, signinRenderController);
route.post('/signin', signinController);
route.get('/signout', signoutController);
route.get('/login', redirectAuthenticated, loginRenderController);
route.post('/login', loginController);
route.get('/home', verifyToken, homeRenderController);

module.exports = route;
