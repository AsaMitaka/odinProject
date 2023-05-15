const errorPageController = (req, res) => {
  res.render('layout', {
    titlePage: 'Error Page',
    content: 'error',
  });
};

module.exports = { errorPageController };
