const predictionService = require('../../services/predictions.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const deletePrediction = async (req, res) => {
  const predictionId = req.params.id;
  let prediction;

  try {
    prediction = await predictionService.deletePrediction(predictionId);
  } catch (error) {
    handleError(res, 500, error);
  }

  if (!prediction) { handleError(res, 404, 'Not Found'); return; }

  handleResponse(res, 204, 'success', prediction);
};

module.exports = deletePrediction;