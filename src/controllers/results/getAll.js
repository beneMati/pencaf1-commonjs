const resultService = require('../../services/results.service');
// const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const getResults = async (req, res) => {
  try {
    const results = await resultService.getResults();
    res.render('results/list', { title: 'Results List', results });
    // handleResponse(res, 200, 'success', results);
  } catch (error) {
    handleError(res, 500, error); 
  }
};

module.exports = getResults;