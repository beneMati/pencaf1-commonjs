const scoreService = require('../../services/scores.service');
const handleError = require('../../utils/handleError');
const calculateUserTotals = require('../../use-cases/scores/calculateUserTotals');
const orderUserTotals = require('../../use-cases/scores/orderUserTotals');

const getScores = async (req, res) => {
  let scores;
  try {
    scores = await scoreService.getScores();
  } catch (error) {
    handleError(res, 500, error); 
  }

  const userTotals = calculateUserTotals(scores);
  const userSorted = orderUserTotals(userTotals);

  // TODO fix filter to have perfoming and also should be unique country, 
  // not one for each score that we see
  res.render('scores/list', { 
    title: 'Score List', 
    circuitScores: scores, 
    userSorted,
  });
};
  
module.exports = getScores;