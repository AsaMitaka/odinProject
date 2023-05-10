const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const route = require('./route/routes');
const { PORT, mongodb, secretCookie } = require('./config/config.json');

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error'));

const app = express();

app.use(cookieParser(secretCookie));
app.use(
  expressSession({
    secret: secretCookie,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'pug');

app.use('/', route);
app.use('*', (req, res) => {
  res.send('Error Page');
});

app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`);
});
