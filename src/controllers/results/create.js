const resultService = require('../../services/results.service');
// const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');
const handleValidator = require('../../utils/handleValidator');
const resultSchema = require('../../validators/resultSchema');
const processScores = require('../../use-cases/scores/processScore');

const createResult = [
  resultSchema,
  handleValidator,
  async (req,res) => {
    const { body } = req;
    let result;

    try {
      result = await resultService.createOrUpdateResult(
        { circuitId: body.circuitId }, 
        body,
      ); 
      // handleResponse(res, 201, 'success', result);
      res.redirect('/admin/results');
    } catch (error) {
      return handleError(res, 500, error);
    }
    
    //TODO es correcto no usar el then o esta bien q lo coloque cuando ponga logs?
    processScores(result[0].circuitId).catch((error) => {
      console.error('Error processing scores:', error);
    });
  },
];

module.exports = createResult;