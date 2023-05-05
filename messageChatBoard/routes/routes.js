const express = require('express');
const { newMessageController, newCreateMessageController } = require('../contollers/newmessage');
const { messageController } = require('../contollers/message');

const route = express.Router();

route.get('/', messageController);
route.get('/new', newMessageController);
route.post('/new', newCreateMessageController);

module.exports = route;
