const predictionService = require('../../services/predictions.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const getPrediction = async (req, res) => {
  const predictionId = req.params.id;
  let prediction;

  try {
    prediction = await predictionService.getPrediction(predictionId);
  } catch (error) {
    handleError(res, 500, error);
  }

  if (!prediction) { handleError(res, 404, 'Not Found'); return; }

  handleResponse(res, 200, 'success', prediction);
};

module.exports = getPrediction;