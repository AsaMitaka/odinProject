const express = require('express');

const { PORT } = require('./config/config.json');
const indexRoute = require('./route/router');

const app = express();

app.use('/', indexRoute);
app.use('*', (req, res) => {
  res.send('Error Page');
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
