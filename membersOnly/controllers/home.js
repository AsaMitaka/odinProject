const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config.json');

const homeRenderController = (req, res) => {
  const user = req.session.user;
  console.log(user);

  res.render('layout', { title: 'Home', template: 'home', user });
};

const homeController = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    res.redirect('/signin');
    return;
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    const { user } = req.cookies;
    if (!user || user._id !== decoded.id) {
      throw new Error('Invalid user');
    }
    res.render('layout', { title: 'Home', template: 'home', user });
  } catch (error) {
    console.error(error);
    res.redirect('/signin');
  }
};

module.exports = { homeController, homeRenderController };
