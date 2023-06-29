const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.json({ message: 'you are not authenticated' });
    next(err);
    return;
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      res.json({ message: 'Token is invalid' });
      next(err);
      return;
    }

    req.user = user;
    next();
  });
};

module.exports = verifyToken;
