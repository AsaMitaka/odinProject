const mongoose = require('mongoose');
const Author = require('../models/author');
const Book = require('../models/book');
const Genre = require('../models/genre');

const createBookRenderController = (req, res) => {
  res.render('layout', { title: 'Create Book', contentBlock: 'createBook', error: null });
};

const createBookContoller = async (req, res) => {
  const { title, genre, author } = req.body;

  if (!title.trim() || !genre.trim() || !author.trim()) {
    return res.status(400).render('layout', {
      title: 'Create Book Error',
      contentBlock: 'createBook',
      error: 'All fields are required',
    });
  }

  try {
    const existingAuthor = await Author.findOne({ name: author });
    let authorId;
    if (existingAuthor) {
      authorId = existingAuthor._id;
    } else {
      const newAuthor = await Author.create({ name: author });
      authorId = newAuthor._id;
    }

    const existingGenre = await Genre.findOne({ name: genre });
    let genreId;
    if (existingGenre) {
      genreId = existingGenre._id;
    } else {
      const newGenre = await Genre.create({ name: genre });
      genreId = newGenre._id;
    }

    const newBook = await Book.create({ title, author: authorId, genre: genreId });
    console.log(newBook);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    return res.render('layout', { contentBlock: 'error' });
  }
};

const deleteBookContoller = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).send('Book not found');
    }
    console.log(`Deleted book: ${deletedBook.title}`);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const updateBookController = async (req, res) => {
  console.log('PUT', req.params.id);
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      // Check if id is a valid ObjectId
      res.status(404).send('Invalid book ID');
      return;
    }

    // Check if genre exists or create it
    const genre = req.body.genre;
    let genreId = null;
    if (genre) {
      const existingGenre = await Genre.findOneAndUpdate(
        { name: genre },
        { name: genre },
        { upsert: true, new: true },
      );
      genreId = existingGenre._id;
    }

    // Check if author exists or create it
    const author = req.body.author;
    let authorId = null;
    if (author) {
      const existingAuthor = await Author.findOneAndUpdate(
        { name: author },
        { name: author },
        { upsert: true, new: true },
      );
      authorId = existingAuthor._id;
    }

    const updateBook = await Book.findById(req.params.id);
    if (!updateBook) {
      res.status(404);
      return;
    }
    updateBook.title = req.body.title;
    updateBook.genre = genreId || updateBook.genre;
    updateBook.author = authorId || updateBook.author;
    await updateBook.save();
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createBookContoller,
  createBookRenderController,
  deleteBookContoller,
  updateBookController,
};
