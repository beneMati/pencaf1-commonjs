const renderLogin = async (req,res) => {
  res.render('auth/formLogin', { title: 'Login User' });
};
  
module.exports = renderLogin;