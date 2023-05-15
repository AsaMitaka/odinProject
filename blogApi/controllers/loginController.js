const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const user = require('../models/user');
const { jwtSecret, jwtExpiredIn } = require('../config/config.json');

const loginPageController = (req, res) => {
  res.render('layout', {
    content: 'login',
    titlePage: 'Login',
  });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  try {
    if (!email || !password) {
      res.render('layout', {
        content: 'login',
        titlePage: 'Login',
        error: 'Some row is empty',
      });
      return;
    }

    if (!errors.isEmpty() && errors.errors[0].path === 'email') {
      res.render('layout', {
        content: 'login',
        titlePage: 'Login',
        error: 'Email is not valid',
      });
      return;
    }

    const regUser = await user.findOne({ email: email });
    if (!regUser) {
      res.render('layout', {
        content: 'login',
        titlePage: 'Login',
        error: 'Email already is not registered',
      });
      return;
    }

    if (!errors.isEmpty() && errors.errors[0].path === 'password') {
      res.render('layout', {
        content: 'login',
        titlePage: 'Login',
        error: 'Password length must be min 5 and max 12',
      });
      return;
    }

    const passwordIsValid = bcrypt.compare(password, regUser.password);
    if (!passwordIsValid) {
      res.render('layout', {
        content: 'login',
        titlePage: 'Login',
        error: 'Invalid Password',
      });
      return;
    }

    const token = jwt.sign({ userId: regUser._id, role: regUser.role }, jwtSecret, {
      expiresIn: jwtExpiredIn,
    });
    req.session.token = token;
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loginPageController, loginController };
