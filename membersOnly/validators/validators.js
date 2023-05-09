const { body } = require('express-validator');

const userSignInValidation = [
  body('email').isEmail(),
  body('username').isLength({ min: 4, max: 10 }),
  body('password').isLength({ min: 6, max: 12 }),
  body('repassword').isLength({ min: 6, max: 12 }),
];

module.exports = userSignInValidation;
