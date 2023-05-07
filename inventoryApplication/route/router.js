const express = require('express');

const { indexController, aboutController } = require('../controllers/mainContollers');

const route = express.Router();

route.get('/', indexController);
route.get('/about', aboutController);

module.exports = route;
