const { Results, Drivers, Circuits } = require('../models');
const baseRepository = require('../repositories/utilsRepository');

const createResult = async (data) => {
  return baseRepository.create(Results, data);
};
  
const getResult = async (id) => {
  return baseRepository.findById(Results, id);
};
  
const getResults = async () => {
  return baseRepository.findAll(Results, 
    {
      include: [
        {
          model: Circuits,
          attributes: ['name','city'], // Solo trae la columna "name" de Table2
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

const getResultByQuery = async (query) => {
  return baseRepository.findOne(Results, { where: query });
};
  
const deleteResult = async (id) => {
  return baseRepository.deleteById(Results, id);
};

const createOrUpdateResult = async (query, data) => {
  return baseRepository.upsert(Results, query, data);
};
  
module.exports = { 
  createResult, 
  getResult, 
  getResults, 
  deleteResult, 
  getResultByQuery, 
  createOrUpdateResult, 
};