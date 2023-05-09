const express = require('express');
const mongoose = require('mongoose');

const route = require('./route/routes');
const { PORT, mongodb } = require('./config/config.json');

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error'));

const app = express();

app.use('/', route);
app.use('*', (req, res) => {
  res.send('Error Page');
});

app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`);
});
