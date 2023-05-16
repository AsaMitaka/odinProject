const { body } = require('express-validator');

const isPostValidator = [
  body('title').trim().isLength({
    min: 5,
    max: 50,
  }),
  body('posttext').trim().isLength({
    min: 1,
    max: 500,
  }),
];

module.exports = isPostValidator;
