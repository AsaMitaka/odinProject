const indexPageController = (req, res) => {
  res.render('layout', {
    titlePage: 'main page',
    contentPage: 'main',
  });
};

module.exports = { indexPageController };
