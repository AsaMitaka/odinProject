const signoutPageController = (req, res) => {
  res.render('layout', {
    titlePage: 'sign out',
    contentPage: 'signout',
  });
};

const signoutController = (req, res) => {
  const { token } = req.session;
  try {
    if (token) {
      req.session.token = null;
      res.redirect('/login');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signoutController, signoutPageController };
