const handleCookie = require('../../utils/handleCookie');

const renderLogin = [
  handleCookie,
  async (req,res) => {
    res.render('auth/formLogin', { title: 'Login User' });
  },
];
  
module.exports = renderLogin;