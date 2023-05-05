const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/routes');
const errorController = require('./contollers/error');

const PORT = 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.use(express.static('public'));

app.use('/', route);
app.use('*', errorController);

app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`);
});
