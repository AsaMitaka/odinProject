const errorController = (req, res) => {
  res.render('layout', { template: 'error' });
};

module.exports = errorController;
