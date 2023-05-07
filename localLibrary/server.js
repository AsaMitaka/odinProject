const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const { mongodb, PORT } = require('./config/config.json');
const route = require('./route/router');
const errorController = require('./controllers/error');

mongoose.connect(mongodb);
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/', route);
app.use('*', errorController);

app.listen(PORT, () => {
  console.log(`Server start at ${PORT} port`);
});
