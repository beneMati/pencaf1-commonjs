const { body } = require('express-validator');

const schema =  [
  body('name')
    .isString()
    .withMessage('Name must be a string')
    .notEmpty()
    .withMessage('Name is required'),
  
  body('email')
    .isString()
    .withMessage('Email must be a string')
    .notEmpty()
    .withMessage('Email is required'),

  body('password')
    .isString()
    .withMessage('Password must be a string')
    .notEmpty()
    .withMessage('Password is required'),
];

module.exports = schema;