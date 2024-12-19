const handleCookie = require('../../utils/handleCookie');
const path = require('path');

const renderLogin = [
  handleCookie,
  async (req,res) => {
    res.render(path.join('auth', 'formLogin'), { title: 'Login User' });
  },
];
  
module.exports = renderLogin;