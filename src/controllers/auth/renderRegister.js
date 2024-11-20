const renderRegister = async (req,res) => {
  res.render('auth/formRegister', { title: 'Create an User' });
};

module.exports = renderRegister;