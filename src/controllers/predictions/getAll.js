const predictionService = require('../../services/predictions.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const getPredictions = async (req, res) => {
  try {
    const predictions = await predictionService.getPredictions();
    handleResponse(res, 200, 'success', predictions);
  } catch (error) {
    handleError(res, 500, error); 
  }
};

module.exports = getPredictions;