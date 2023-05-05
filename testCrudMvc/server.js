const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const index = require('./router/index');
const PORT = 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

app.use('/', index);
app.get('*', (req, res) => {
  res.render('error', { pageTitle: 'Error' });
});

app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`);
});

//ADD UPDATE
