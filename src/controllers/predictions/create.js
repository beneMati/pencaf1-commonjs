const predictionService = require('../../services/predictions.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const createPrediction = async (req,res) => {
  const { body } = req;

  try {
    const prediction = await predictionService.createPrediction(body); 
    handleResponse(res, 201, 'success', prediction);
  } catch (error) {
    handleError(res, 500, error);
  }
};

module.exports = createPrediction;