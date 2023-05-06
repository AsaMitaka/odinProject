const errorController = (req, res) => {
  res.render('layout', { title: '404', contentBlock: 'error' });
};

module.exports = errorController;
