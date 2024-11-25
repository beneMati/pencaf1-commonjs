const teamService = require('../../services/teams.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const createTeam = async (req,res) => {
  const { body } = req;

  try {
    const team = await teamService.createTeam(body); 
    handleResponse(res, 201, 'success', team);
  } catch (error) {
    handleError(res, 500, error);
  }
};

module.exports = createTeam;