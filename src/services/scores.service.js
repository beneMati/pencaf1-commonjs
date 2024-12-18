const { Scores, Circuits, Users } = require('../models');
const baseRepository = require('../repositories/utilsRepository');

const createScore = async (data) => {
  return baseRepository.create(Scores, data);
};

const getScore = async (id) => {
  return baseRepository.findById(Scores, id);
};
    
const getScores = async () => {
  return baseRepository.findAll(Scores, {
    include: [
      {
        model: Circuits,
        attributes: ['name','country'], // Solo trae la columna "name" de Table2
      },
      {
        model: Users,
        attributes: ['name', 'email'],
      },
    ],
    attributes: ['id', 'circuitId', 'userId', 'score'], // Trae columnas específicas de Table1
  });
};
  
const getScoreByQuery = async (query) => {
  return baseRepository.findOne(Scores, { where: query });
};
    
const deleteScore = async (id) => {
  return baseRepository.deleteById(Scores, id);
};

const createOrUpdateScore = async (query, score) => {
  return baseRepository.upsert(Scores, query, score);
};
    
module.exports = { 
  createScore, 
  getScore, 
  getScores, 
  deleteScore, 
  getScoreByQuery, 
  createOrUpdateScore,
};