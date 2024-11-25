const resultService = require('../../services/results.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const getResult = async (req, res) => {
  const resultId = req.params.id;
  let result;

  try {
    result = await resultService.getResult(resultId);
  } catch (error) {
    handleError(res, 500, error);
  }

  if (!result) { handleError(res, 404, 'Not Found'); return; }

  handleResponse(res, 200, 'success', result);
};

module.exports = getResult;