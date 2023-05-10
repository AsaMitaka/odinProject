const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config.json');
const User = require('../model/user');

const verifyToken = (req, res, next) => {
  const token = req.body.token || req.cookies.token || req.query.token;

  if (!token) {
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    const userId = decoded.id;
    User.findById(userId).then((user) => {
      if (!user) {
        return res.redirect('/login');
      }

      req.session.user = user;
      next();
    });
  } catch (err) {
    console.log(err);
    return res.redirect('/login');
  }
};

module.exports = verifyToken;
