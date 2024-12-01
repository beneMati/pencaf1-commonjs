const { body } = require('express-validator');

const schema = [
  body('circuitId')
    .isInt({ min: 1 }).withMessage('Circuit ID must be a positive integer.')
    .notEmpty().withMessage('Circuit ID is required.'),

  body('prediction1')
    .optional().isInt({ min: 1 }).withMessage('Prediction 1 must be a positive integer.'),

  body('prediction2')
    .optional().isInt({ min: 1 }).withMessage('Prediction 2 must be a positive integer.'),

  body('prediction3')
    .optional().isInt({ min: 1 }).withMessage('Prediction 3 must be a positive integer.'),

  body('prediction4')
    .optional().isInt({ min: 1 }).withMessage('Prediction 4 must be a positive integer.'),

  body('prediction5')
    .optional().isInt({ min: 1 }).withMessage('Prediction 5 must be a positive integer.'),

  body('prediction6')
    .optional().isInt({ min: 1 }).withMessage('Prediction 6 must be a positive integer.'),

  body('prediction7')
    .optional().isInt({ min: 1 }).withMessage('Prediction 7 must be a positive integer.'),

  body('prediction8')
    .optional().isInt({ min: 1 }).withMessage('Prediction 8 must be a positive integer.'),

  body('prediction9')
    .optional().isInt({ min: 1 }).withMessage('Prediction 9 must be a positive integer.'),

  body('prediction10')
    .optional().isInt({ min: 1 }).withMessage('Prediction 10 must be a positive integer.'),
];

module.exports = schema;
