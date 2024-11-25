const { Teams } = require('../models');
const baseRepository = require('../repositories/utilsRepository');

const createTeam = async (data) => {
  return baseRepository.create(Teams, data);
};
  
const getTeam = async (id) => {
  return baseRepository.findById(Teams, id, { attributes: ['id', 'name'] });
};
  
const getTeams = async () => {
  return baseRepository.findAll(Teams, { attributes: ['id', 'name'] });
};
  
const deleteTeam = async (id) => {
  return baseRepository.deleteById(Teams, id);
};
  
module.exports = { createTeam, getTeam, getTeams, deleteTeam };