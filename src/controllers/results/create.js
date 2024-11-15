const resultService = require('../../services/results.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const createResult = async (req,res) => {
  const { body } = req;

  try {
    const result = await resultService.createResult(body); 
    handleResponse(res, 201, 'success', result);
  } catch (error) {
    handleError(res, 500, error);
  }
};

module.exports = createResult;