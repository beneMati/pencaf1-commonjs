const handleError = require('../utils/handleError');

const isAuthorized = (role) => {
  return(req, res, next) => {
    if (!req.cookies.user || req.cookies.user.role !== role) {
      handleError(res, 403, 'Access denied'); return;
    }
    next();
  };
};

module.exports = isAuthorized;