const axios = require('axios');
const dayjs = require('dayjs');

const newMessageController = (req, res) => {
  res.render('layout', { template: 'newmessage', error: null });
};

const newCreateMessageController = (req, res) => {
  const { name, msg } = req.body;
  if (!name.trim() || !msg.trim()) {
    res
      .status(400)
      .render('layout', { template: 'newmessage', error: 'Name and message are required' });
    return;
  }

  const formattedDate = dayjs().format('D MMMM YYYY');
  axios.post('http://localhost:3000/message', {
    name: name.trim(),
    msg: msg.trim(),
    date: formattedDate,
  });
  res.redirect('/');
};

module.exports = { newMessageController, newCreateMessageController };
