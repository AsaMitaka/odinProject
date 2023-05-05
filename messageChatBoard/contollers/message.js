const axios = require('axios');

const messageController = (req, res) => {
  axios
    .get('http://localhost:3000/message')
    .then((response) => response.data)
    .then((data) => res.render('layout', { data, template: 'main' }));
};

module.exports = { messageController };
