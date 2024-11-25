const logout = async (req, res) => {
  res.clearCookie('user');
  res.redirect('/auth/login');
};

module.exports = logout;