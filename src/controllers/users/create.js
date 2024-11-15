const userService = require('../../services/users.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const createUser = async (req,res) => {
  const { body } = req;

  try {
    const user = await userService.createUser(body); 
    handleResponse(res, 201, 'success', user);
  } catch (error) {
    handleError(res, 500, error);
  }
};

module.exports = createUser;