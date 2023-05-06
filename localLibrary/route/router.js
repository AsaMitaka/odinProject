const express = require('express');
const { mainControllers, aboutControllers } = require('../controllers/main');
const {
  createAuthorRenderController,
  createBookRenderController,
  createGenreRenderController,
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
route.get('/book/:id', bookController);

route.get('/allgenre', allGenreController);
route.get('/genre/:id', genreController);

route.get('/createauthor', createAuthorRenderController);
route.get('/createbook', createBookRenderController);
route.get('/creategenre', createGenreRenderController);

module.exports = route;
