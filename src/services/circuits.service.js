const { Circuits } = require('../models');
const baseRepository = require('../repositories/utilsRepository');

const createCircuit = async (data) => {
  return baseRepository.create(Circuits, data);
};
  
const getCircuit = async (id) => {
  return baseRepository.findById(Circuits, id);
};
  
const getCircuits = async () => {
  return baseRepository.findAll(Circuits, { attributes: ['id', 'name', 'city', 'country'] });
};
  
const deleteCircuit = async (id) => {
  return baseRepository.deleteById(Circuits, id);
};
  
module.exports = { createCircuit, getCircuit, getCircuits, deleteCircuit };