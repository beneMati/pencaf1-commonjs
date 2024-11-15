const teamService = require('../../services/teams.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const getTeam = async (req, res) => {
  const teamId = req.params.id;
  let team;

  try {
    team = await teamService.deleteTeam(teamId);
  } catch (error) {
    handleError(res, 500, error);
  }

  if (!team) { handleError(res, 404, 'Not Found'); return; }

  handleResponse(res, 204, 'success', team);
};

module.exports = getTeam;