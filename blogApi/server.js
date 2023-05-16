const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

const { PORT, mongoDB, sessionSecret } = require('./config/config.json');
const { errorPageController } = require('./controllers/errorController');
const route = require('./routes/indexRoute');
const isAuth = require('./middlewares/isAuth');

mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database.');
});

const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use('/', isAuth, route);
app.use('*', errorPageController);

app.listen(PORT, () => {
  console.log(`server start at ${PORT}`);
});
