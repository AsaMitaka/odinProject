const { body } = require('express-validator');

const signinValidator = [
  body('email').trim().isEmail(),
  body('password').trim().isLength({ min: 5, max: 12 }),
];

module.exports = signinValidator;
