const mainController = (req, res) => {
  res.render('layout', { title: 'Main', template: 'main' });
};

module.exports = mainController;
