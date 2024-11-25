const userService = require('../../services/users.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const getUser = async (req, res) => {
  const userId = req.params.id;
  let user;

  try {
    user = await userService.getUser(userId);
  } catch (error) {
    handleError(res, 500, error);
  }

  if (!user) { handleError(res, 404, 'Not Found'); return; }

  handleResponse(res, 200, 'success', user);
};

module.exports = getUser;