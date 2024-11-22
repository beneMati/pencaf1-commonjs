const handleCookie = require('../../utils/handleCookie');

const renderRegister = [
  handleCookie,
  async (req,res) => {
    res.render('auth/formRegister', { title: 'Create an User' });
  },
];

module.exports = renderRegister;