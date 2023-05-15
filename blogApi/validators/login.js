const { body } = require('express-validator');

const loginValidator = [
  body('email').isEmail(),
  body('password').isLength({
    min: 5,
    max: 12,
  }),
];

module.exports = loginValidator;
