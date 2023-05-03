const express = require('express');
const path = require('path');
const {
  homeControllers,
  contactControllers,
  aboutControllers,
  errorControllers,
} = require('./controllers/controllers');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '/styles')));

app.get('/', homeControllers);
app.get('/about', aboutControllers);
app.get('/contact-me', contactControllers);

app.use(errorControllers);

app.listen(PORT, 'localhost', () => {
  try {
    console.log(`Server start at ${PORT}`);
  } catch (e) {
    console.log('Error: ', e);
  }
});
