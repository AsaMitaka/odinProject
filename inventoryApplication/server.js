const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('./utils/passport');

const { PORT, mongodb } = require('./config/config.json');
const indexRoute = require('./route/router');

mongoose.connect(mongodb);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error'));

const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoute);
app.use('*', (req, res) => {
  res.send('Error Page');
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
