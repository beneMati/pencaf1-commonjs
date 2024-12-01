const predictionService = require('../../services/predictions.service');
// const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');
const handleValidator = require('../../utils/handleValidator');
const predictionSchema = require('../../validators/predictionSchema');

const createPrediction = [
  predictionSchema,
  handleValidator,
  async (req,res) => {
    const { data } = req;
    const { user } = req.cookies;
    data.userId = user.id;

    try {
      await predictionService.createPrediction(data); 
      // handleResponse(res, 201, 'success', prediction);
      res.redirect('/app/predictions');
    } catch (error) {
      handleError(res, 500, error);
    }
  },
];

module.exports = createPrediction;