const signoutController = (req, res) => {
  res.render('layout', { title: 'Sign Out', template: 'signout' });
};

module.exports = signoutController;
