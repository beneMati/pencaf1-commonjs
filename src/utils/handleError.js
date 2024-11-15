const sendError = (res, statusCode, err = []) => {
  res.status(statusCode).json({
    status: 'error',
    data: null,
    message: 'Validation Failed',
    errors: err,
  });
};

module.exports = sendError;