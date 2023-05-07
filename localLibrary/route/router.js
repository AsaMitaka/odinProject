const express = require('express');
const { mainControllers, aboutControllers } = require('../controllers/main');
const {
  createBookContoller,
  createBookRenderController,
  deleteBookContoller,
  updateBookController,
} = require('../controllers/create');
const {
  allAuthorController,
  authorController,
  allBookController,
  bookController,
  allGenreController,
  genreController,
} = require('../controllers/all');

const route = express.Router();

route.get('/', mainControllers);
route.get('/about', aboutControllers);

route.get('/allauthor', allAuthorController);
route.get('/author/:id', authorController);

route.get('/allbook', allBookController);
route.delete('/book/:id', deleteBookContoller);
route.put('/book/:id', updateBookController);
route.get('/book/:id', bookController);

route.get('/allgenre', allGenreController);
route.get('/genre/:id', genreController);

route.get('/createbook', createBookRenderController);
route.post('/createbook', createBookContoller);

module.exports = route;
