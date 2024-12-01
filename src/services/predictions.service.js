const { Predictions, Drivers, Circuits, Users } = require('../models');
const baseRepository = require('../repositories/utilsRepository');

const createPrediction = async (data) => {
  return baseRepository.create(Predictions, data);
};
  
const getPrediction = async (id) => {
  return baseRepository.findById(Predictions, id);
};
  
const getPredictions = async () => {
  return baseRepository.findAll(Predictions, 
    {
      include: [
        {
          model: Users,
          attributes: ['name', 'email'],
        },
        {
          model: Circuits,
          attributes: ['name','country'], // Solo trae la columna "name" de Table2
        },
        {
          model: Drivers,
          as: 'Driver1',
          attributes: ['name', 'surname'],
        },
        {
          model: Drivers,
          as: 'Driver2',
          attributes: ['name', 'surname'],
        },
        {
          model: Drivers,
          as: 'Driver3',
          attributes: ['name', 'surname'],
        },
        {
          model: Drivers,
          as: 'Driver4',
          attributes: ['name', 'surname'],
        },
        {
          model: Drivers,
          as: 'Driver5',
          attributes: ['name', 'surname'],
        },
        {
          model: Drivers,
          as: 'Driver6',
          attributes: ['name', 'surname'],
        },
        {
          model: Drivers,
          as: 'Driver7',
          attributes: ['name', 'surname'],
        },
        {
          model: Drivers,
          as: 'Driver8',
          attributes: ['name', 'surname'],
        },
        {
          model: Drivers,
          as: 'Driver9',
          attributes: ['name', 'surname'],
        },
        {
          model: Drivers,
          as: 'Driver10',
          attributes: ['name', 'surname'],
        },
      ],
      attributes: ['id'], // Trae columnas específicas de Table1
    },
  );
};

const getPredictionsByQuery = async (query) => {
  return baseRepository.findAll(Predictions, { where: query });
};
  
const deletePrediction = async (id) => {
  return baseRepository.deleteById(Predictions, id);
};
  
module.exports = { 
  createPrediction, 
  getPrediction, 
  getPredictions, 
  deletePrediction, 
  getPredictionsByQuery, 
};