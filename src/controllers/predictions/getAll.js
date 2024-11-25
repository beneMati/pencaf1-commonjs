const predictionService = require('../../services/predictions.service');
// const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');
const passport = require('../../passport/index');

const getPredictions = [
  passport.authenticate('cookie', { session: false, failureRedirect: '/auth/login' }),
  async (req, res) => {
    try {
      const predictions = await predictionService.getPredictions();
      res.render('predictions/list', { title: 'Predictions List', predictions });
      // handleResponse(res, 200, 'success', predictions);
    } catch (error) {
      handleError(res, 500, error); 
    }
  },
];

module.exports = getPredictions;