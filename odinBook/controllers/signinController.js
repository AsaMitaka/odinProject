const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { jwtSecret, saltSecret } = require('../config/config.json');
const User = require('../models/user');

const signinPageController = (req, res) => {
  res.render('layout', {
    titlePage: 'sign in',
    contentPage: 'signin',
    errorMsg: null,
  });
};

const signinController = async (req, res) => {
  const { email, username, password, repassword } = req.body;
  try {
    if (!(email && username && password && repassword)) {
      res.render('layout', {
        titlePage: 'sign in',
        contentPage: 'signin',
        errorMsg: 'Some row is empty',
      });
      return;
    }

    const isUser = await User.findOne({ email });
    if (isUser) {
      res.render('layout', {
        titlePage: 'sign in',
        contentPage: 'signin',
        errorMsg: 'Email is already registered',
      });
      return;
    }

    if (repassword !== password) {
      res.render('layout', {
        titlePage: 'sign in',
        contentPage: 'signin',
        errorMsg: 'Passwords is not a same',
      });
      return;
    }

    const hashPassword = await bcrypt.hash(password, saltSecret);

    const newUser = User.create({
      email: email.toLowerCase(),
      username: username,
      password: hashPassword,
    });

    const token = jwt.sign({ userId: newUser._id, role: newUser.role }, jwtSecret, {
      expiresIn: '24h',
    });
    req.session.token = token;

    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signinController, signinPageController };
