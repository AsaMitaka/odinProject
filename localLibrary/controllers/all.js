const allAuthorController = (req, res) => {
  res.render('layout', { title: 'All Author', contentBlock: 'allAuthor' });
};

const authorController = (req, res) => {
  const { id } = req.body;
  res.render('layout', { title: 'Author', contentBlock: 'author' });
};

const allBookController = (req, res) => {
  res.render('layout', { title: 'All Book', contentBlock: 'allBook' });
};

const bookController = (req, res) => {
  const { id } = req.body;
  res.render('layout', { title: 'Book', contentBlock: 'book' });
};

const allGenreController = (req, res) => {
  res.render('layout', { title: 'All Genre', contentBlock: 'allGenre' });
};

const genreController = (req, res) => {
  const { id } = req.body;
  res.render('layout', { title: 'Genre', contentBlock: 'genre' });
};

module.exports = {
  allAuthorController,
  authorController,
  allBookController,
  bookController,
  allGenreController,
  genreController,
};
