const teamService = require('../../services/teams.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const getTeams = async (req, res) => {
  try {
    const teams = await teamService.getTeams();
    handleResponse(res, 200, 'success', teams);
  } catch (error) {
    handleError(res, 500, error); 
  }
};

module.exports = getTeams;