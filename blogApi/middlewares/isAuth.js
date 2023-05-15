const isAuth = (req, res, next) => {
  const session = req.session || {};
  const { token } = session;
  try {
    if (token) {
      next();
    } else {
      if (req.path === '/login' || req.path === '/signin') {
        next();
      } else {
        res.redirect('/login');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = isAuth;
