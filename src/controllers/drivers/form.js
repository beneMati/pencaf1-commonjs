const teamService = require('../../services/teams.service');
const handleError = require('../../utils/handleError');

const formDriver = async (req,res) => {
  try {
    const teams = await teamService.getTeams(); 
    res.render('drivers/form', { title: 'Create a Driver', teams });
  } catch (error) {
    handleError(res, 500, error);
  }
};

module.exports = formDriver;