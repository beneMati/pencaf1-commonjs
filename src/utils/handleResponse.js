const sendResponse = (res, statusCode, status, data = null) => {
  res.status(statusCode).json({
    status,
    data,
    message: null,
    errors: [],
  });
};

module.exports = sendResponse;