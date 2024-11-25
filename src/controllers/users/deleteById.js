const userService = require('../../services/users.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  let user;

  try {
    user = await userService.deleteUser(userId);
  } catch (error) {
    handleError(res, 500, error);
  }

  if (!user) { handleError(res, 404, 'Not Found'); return; }

  handleResponse(res, 204, 'success', user);
};

module.exports = deleteUser;