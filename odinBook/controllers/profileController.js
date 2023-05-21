const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { jwtSecret } = require('../config/config.json');

const profilePageController = async (req, res) => {
  const { id } = req.params;
  const { token } = req.session;
  const { userId } = await jwt.verify(token, jwtSecret);
  try {
    const isUser = await User.findById(id);
    if (!isUser) {
      res.render('layout', {
        errorMsg: 'user is not find',
        contentPage: 'profile',
        titlePage: 'user profile',
        profileContent: null,
        isUser: false,
      });
      return;
    }

    if (id === userId) {
      res.render('layout', {
        errorMsg: null,
        contentPage: 'profile',
        titlePage: 'user profile',
        profileContent: isUser,
        isUser: true,
      });
      return;
    }

    res.render('layout', {
      errorMsg: null,
      contentPage: 'profile',
      titlePage: 'user profile',
      profileContent: isUser,
      isUser: false,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { profilePageController };
