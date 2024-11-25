const userService = require('../../services/users.service');
const handleError = require('../../utils/handleError');
const handleValidator = require('../../utils/handleValidator');
const userSchema = require('../../validators/userSchema');
const handleCookie = require('../../utils/handleCookie');

const register = [
  handleCookie,
  userSchema,
  handleValidator,
  async (req,res) => {
    const { data } = req;

    try {
      await userService.createUser(data); 
      res.redirect('/auth/login');
    } catch (error) {
      handleError(res, 500, error);
    }
  },
];

module.exports = register;