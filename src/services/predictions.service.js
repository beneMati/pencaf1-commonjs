const { Predictions } = require('../models');
const baseRepository = require('../repositories/utilsRepository');

const createPrediction = async (data) => {
  return baseRepository.create(Predictions, data);
};
  
const getPrediction = async (id) => {
  return baseRepository.findById(Predictions, id);
};
  
const getPredictions = async () => {
  return baseRepository.findAll(Predictions);
};
  
const deletePrediction = async (id) => {
  return baseRepository.deleteById(Predictions, id);
};
  
module.exports = { createPrediction, getPrediction, getPredictions, deletePrediction };