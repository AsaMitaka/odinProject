const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { jwtSecret } = require('../config/config.json');
const User = require('../models/user');

const loginPageController = (req, res) => {
  res.render('layout', {
    titlePage: 'login',
    contentPage: 'login',
    errorMsg: null,
  });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!(email && password)) {
      res.render('layout', {
        titlePage: 'login',
        contentPage: 'login',
        errorMsg: 'Email or password is empty',
      });
      return;
    }

    const newUser = await User.findOne({ email });
    if (!newUser) {
      res.render('layout', {
        titlePage: 'login',
        contentPage: 'login',
        errorMsg: 'Email is not registered',
      });
      return;
    }

    const isSamePass = bcrypt.compare(password, newUser.password);

    if (!isSamePass) {
      res.render('layout', {
        titlePage: 'login',
        contentPage: 'login',
        errorMsg: 'Email or password is not valid',
      });
    }

    const token = jwt.sign({ userId: newUser._id, role: newUser.role }, jwtSecret, {
      expiresIn: '24h',
    });
    req.session.token = token;
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loginPageController, loginController };
