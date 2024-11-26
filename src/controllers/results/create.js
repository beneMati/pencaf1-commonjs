const resultService = require('../../services/results.service');
// const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');
const handleValidator = require('../../utils/handleValidator');
const resultSchema = require('../../validators/resultSchema');

const createResult = [
  resultSchema,
  handleValidator,
  async (req,res) => {
    const { body } = req;

    try {
      await resultService.createResult(body); 
      // handleResponse(res, 201, 'success', result);
      res.redirect('/admin/results');
    } catch (error) {
      handleError(res, 500, error);
    }
  }];

module.exports = createResult;