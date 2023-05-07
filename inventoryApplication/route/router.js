const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.send('Index');
});

route.get('/about', (req, res) => {
  res.send('About');
});

module.exports = route;
