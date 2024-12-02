const handleError = require('../utils/handleError');

const isAuthorized = (roles) => {
  return(req, res, next) => {
    if (!req.cookies.user || !roles.includes(req.cookies.user.role)) {
      handleError(res, 403, 'Access denied'); return;
    }
    next();
  };
};

module.exports = isAuthorized;