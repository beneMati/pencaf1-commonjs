const validateCookie = (req, res, next) => {
  if(req.cookies.user) res.redirect('/results');
  next();
};

module.exports = validateCookie;