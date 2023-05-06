const express = require('express');
const bodyParser = require('body-parser');

const route = require('./route/router');
const errorController = require('./controllers/error');

const PORT = 3000;

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', route);
app.use('*', errorController);

app.listen(PORT, () => {
  console.log(`Server start at {PORT} port`);
});
