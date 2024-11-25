const { body } = require('express-validator');

const schema =  [
  body('name')
    .isString()
    .withMessage('Name must be a string')
    .notEmpty()
    .withMessage('Name is required'),
  
  body('surname')
    .isString()
    .withMessage('Surname must be a string')
    .notEmpty()
    .withMessage('Surname is required'),

  body('nationality')
    .isString()
    .withMessage('Nationality must be a string')
    .notEmpty()
    .withMessage('Nationality is required'),

  body('teamId')
    .isInt()
    .withMessage('teamId must be an integer')
    .notEmpty()
    .withMessage('teamId is required'),
];

module.exports = schema;