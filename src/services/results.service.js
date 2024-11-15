const { Results } = require('../models');
const baseRepository = require('../repositories/utilsRepository');

const createResult = async (data) => {
  return baseRepository.create(Results, data);
};
  
const getResult = async (id) => {
  return baseRepository.findById(Results, id);
};
  
const getResults = async () => {
  return baseRepository.findAll(Results);
};
  
const deleteResult = async (id) => {
  return baseRepository.deleteById(Results, id);
};
  
module.exports = { createResult, getResult, getResults, deleteResult };