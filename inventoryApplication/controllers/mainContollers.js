const User = require('../model/user');
const passport = require('passport');

const indexController = (req, res) => {
  console.log(req.user);
  res.render('layout', { title: 'Index', content: 'main', user: req.user });
};

const signupRenderController = (req, res) => {
  res.render('layout', { title: 'Items', content: 'signup' });
};

const signupController = async (req, res, next) => {
  if (!req.body.username.trim() || !req.body.password.trim()) {
    return;
  }

  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    const result = await user.save();
    res.redirect('/');
  } catch (error) {
    return next(error);
  }
};

const loginRenderController = (req, res) => {
  res.render('layout', { title: 'Types', content: 'login' });
};

const loginController = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/',
});

const logoutController = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};

module.exports = {
  indexController,
  loginController,
  loginRenderController,
  signupController,
  signupRenderController,
  logoutController,
};
