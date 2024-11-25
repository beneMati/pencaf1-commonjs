const { body } = require('express-validator');

const schema = [
  body('circuitId')
    .isInt({ min: 1 }).withMessage('Circuit ID must be a positive integer.')
    .notEmpty().withMessage('Circuit ID is required.'),

  body('post1')
    .optional().isInt({ min: 1 }).withMessage('Post 1 must be a positive integer.'),

  body('post2')
    .optional().isInt({ min: 1 }).withMessage('Post 2 must be a positive integer.'),

  body('post3')
    .optional().isInt({ min: 1 }).withMessage('Post 3 must be a positive integer.'),

  body('post4')
    .optional().isInt({ min: 1 }).withMessage('Post 4 must be a positive integer.'),

  body('post5')
    .optional().isInt({ min: 1 }).withMessage('Post 5 must be a positive integer.'),

  body('post6')
    .optional().isInt({ min: 1 }).withMessage('Post 6 must be a positive integer.'),

  body('post7')
    .optional().isInt({ min: 1 }).withMessage('Post 7 must be a positive integer.'),

  body('post8')
    .optional().isInt({ min: 1 }).withMessage('Post 8 must be a positive integer.'),

  body('post9')
    .optional().isInt({ min: 1 }).withMessage('Post 9 must be a positive integer.'),

  body('post10')
    .optional().isInt({ min: 1 }).withMessage('Post 10 must be a positive integer.'),
];

module.exports = schema;
