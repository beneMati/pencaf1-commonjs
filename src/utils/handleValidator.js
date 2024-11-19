const { validationResult } = require('express-validator');
const handleError = require('../utils/handleError');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return handleError(res, 400, { errors: errors.array() });
  }

  next();
};

module.exports = validateRequest;