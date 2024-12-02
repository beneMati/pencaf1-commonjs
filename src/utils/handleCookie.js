const validateCookie = (req, res, next) => {
  if(req.cookies.user) return res.redirect('/app/scores');;
  next();
};

module.exports = validateCookie;