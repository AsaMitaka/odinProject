const redirectAuthenticated = (req, res, next) => {
  // Check if user is already authenticated
  if (req.session.user) {
    return res.redirect('/home');
  }
  // If not authenticated, proceed to the next middleware
  next();
};

module.exports = redirectAuthenticated;
