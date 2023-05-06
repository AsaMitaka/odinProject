const createAuthorRenderController = (req, res) => {
  res.render('layout', { title: 'Create Author', contentBlock: 'createAuthor' });
};

const createBookRenderController = (req, res) => {
  res.render('layout', { title: 'Create Book', contentBlock: 'createBook' });
};

const createGenreRenderController = (req, res) => {
  res.render('layout', { title: 'Create Genre', contentBlock: 'createGenre' });
};

module.exports = {
  createAuthorRenderController,
  createBookRenderController,
  createGenreRenderController,
};
