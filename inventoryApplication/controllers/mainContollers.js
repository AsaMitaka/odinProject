const User = require('../model/user');
const passport = require('passport');

const indexController = (req, res) => {
  res.render('layout', { title: 'Index' });
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

const loginController = function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      console.log(info.message);
      // req.flash('error', info.message);
      return res.redirect('/login');
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }

      return res.redirect('/');
    });
  })(req, res, next);
};

module.exports = {
  indexController,
  loginController,
  loginRenderController,
  signupController,
  signupRenderController,
};
