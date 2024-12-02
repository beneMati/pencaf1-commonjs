const userService = require('../../services/users.service');
const handleError = require('../../utils/handleError');
const handlePassword = require('../../utils/handlePassword');
const handleCookie = require('../../utils/handleCookie');

const login = [
  handleCookie,
  async (req,res) => {
    const { email, password } = req.body;
    let user;

    try {
      user = await userService.getUserByQuery({ email });
    } catch (error) {
      handleError(res, 500, error);
    }

    if (!user) {
      return res.render('auth/formLogin', { title: 'Login User', error: 'Usuario not found' });
    }

    const isMatch = await handlePassword.verifyPassword(password, user.password);
    if (!isMatch) {
      return res.render('auth/formLogin', { title: 'Login User', error: 'Incorrect Password' });
    }

    res.cookie('user', { id: user.id, role: user.role }, 
      { httpOnly: true, 
        secure: false, 
        maxAge: 1000 * 60 * 60,
        sameSite: 'strict', 
      });
    res.redirect('/app/scores');
  },
];

module.exports = login;