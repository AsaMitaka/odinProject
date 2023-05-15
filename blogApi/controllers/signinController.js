const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../models/user');
const { validationResult } = require('express-validator');

const { jwtExpiredIn, jwtSecret, salt } = require('../config/config.json');

const signinPageController = (req, res) => {
  res.render('layout', {
    content: 'signin',
    titlePage: 'Sign In',
    error: null,
  });
};

const signinController = async (req, res) => {
  const { email, password, repassword } = req.body;
  const errors = validationResult(req);

  try {
    if (!email || !password || !repassword) {
      res.render('layout', {
        content: 'signin',
        titlePage: 'Sign In',
        error: 'Some row is empty',
      });
      return;
    }

    if (!errors.isEmpty() && errors.errors[0].path === 'email') {
      res.render('layout', {
        content: 'signin',
        titlePage: 'Sign In',
        error: 'Email is not valid',
      });
      return;
    }

    const isUser = await user.findOne({ email: email });
    if (isUser) {
      res.render('layout', {
        content: 'signin',
        titlePage: 'Sign In',
        error: 'Email already is registered',
      });
      return;
    }

    if (!errors.isEmpty() && errors.errors[0].path === 'password') {
      res.render('layout', {
        content: 'signin',
        titlePage: 'Sign In',
        error: 'Password length must be min 5 and max 12',
      });
      return;
    }

    if (password !== repassword) {
      res.render('layout', {
        content: 'signin',
        titlePage: 'Sign In',
        error: 'Password !== Repassword',
      });
      return;
    }

    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = user.create({
      email: email,
      password: hashPassword,
    });

    const token = jwt.sign({ userId: newUser._id, role: regUser.role }, jwtSecret, {
      expiresIn: jwtExpiredIn,
    });
    req.session.token = token;
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signinPageController, signinController };
