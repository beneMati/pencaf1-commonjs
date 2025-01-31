const calculateScores = require('./calculateScores');
const resultService = require('../../services/results.service');
const predictionService = require('../../services/predictions.service');
const buildScorePromises = require('../scores/buildScorePromises');

const processScores = async (circuitId) => {
  //TODO no se si esta bien return promise reject para error.
  const result = await resultService.getResultByQuery({ circuitId });

  const predictions = await predictionService.getPredictionsByQuery({ circuitId });
  if(predictions.length === 0) throw new Error('Predictions not found.');

  const userScores = calculateScores(predictions, result);
  
  //TODO nose si esta bien el await si deseo que se devuelvan o uso el promise all.
  //la idea es un array de promeasas y que el promise all lo resuelva
  // la idea es que no exista block para cargar la pagina cuando se calcula los score, 
  //esta bien pensado?
  const scorePromises = buildScorePromises(userScores, circuitId);
  return Promise.all(scorePromises);
};

module.exports = processScores;