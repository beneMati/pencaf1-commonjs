const resultService = require('../../services/results.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const deleteResult = async (req, res) => {
  const resultId = req.params.id;
  let result;

  try {
    result = await resultService.deleteResult(resultId);
  } catch (error) {
    handleError(res, 500, error);
  }

  if (!result) { handleError(res, 404, 'Not Found'); return; }

  handleResponse(res, 204, 'success', result);
};

module.exports = deleteResult;