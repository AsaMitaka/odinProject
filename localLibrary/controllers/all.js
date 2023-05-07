const Author = require('../models/author');
const Book = require('../models/book');
const Genre = require('../models/genre');

const allAuthorController = async (req, res) => {
  try {
    const authors = await Author.find();
    res.render('layout', { title: 'All Author', contentBlock: 'allAuthor', data: authors });
  } catch (error) {
    console.log(error);
  }
};

const authorController = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    res.render('layout', { title: author.name, contentBlock: 'author', data: author });
  } catch (error) {
    console.log(error);
  }
};

const allBookController = async (req, res) => {
  try {
    const books = await Book.find();
    res.render('layout', { title: 'All Book', contentBlock: 'allBook', data: books });
  } catch (error) {
    console.log(error);
  }
};

const bookController = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('author genre');
    res.render('layout', { title: book.title, contentBlock: 'book', data: book });
  } catch (error) {
    console.log(error);
  }
};

const allGenreController = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.render('layout', { title: 'All Genre', contentBlock: 'allGenre', data: genres });
  } catch (error) {
    console.log(error);
  }
};

const genreController = async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id);
    res.render('layout', { title: genre.name, contentBlock: 'genre', data: genre });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  allAuthorController,
  authorController,
  allBookController,
  bookController,
  allGenreController,
  genreController,
};
