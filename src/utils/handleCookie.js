const validateCookie = (req, res, next) => {
  if(req.cookies.user) return res.redirect('/');
  next();
};

module.exports = validateCookie;