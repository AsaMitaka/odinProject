const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { PORT, sessionSecret, mongoDBLink } = require('./config/config.json');
const isAuth = require('./middleware/isAuth');
const route = require('./route/mainRoute');

mongoose.connect(mongoDBLink);
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
  }),
);

app.use('/', isAuth, route);
app.use((req, res, next) => {
  res.render('layout', {
    contentPage: 'error',
    titlePage: 'Error Page',
  });
});

app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`);
});

//post, comments, user profile change password/username
