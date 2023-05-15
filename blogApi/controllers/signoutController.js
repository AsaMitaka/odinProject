const signoutPageController = (req, res) => {
  res.render('layout', {
    content: 'signout',
    titlePage: 'Sign Out',
  });
};

const signoutController = (req, res) => {
  const session = req.session || null;

  try {
    if (session) {
      req.session = null;
      res.redirect('/login');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signoutPageController, signoutController };
