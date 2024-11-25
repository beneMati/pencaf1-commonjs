const userService = require('../../services/users.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    handleResponse(res, 200, 'success', users);
  } catch (error) {
    handleError(res, 500, error); 
  }
};

module.exports = getUsers;