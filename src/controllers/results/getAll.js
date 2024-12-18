const resultService = require('../../services/results.service');
// const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');
// const passport = require('../../passport/index');

const getResults = async (req, res) => {
  try {
    const results = await resultService.getResults();
    res.render('results/list', { title: 'Results List', results, role: req.cookies.user.role });
    // handleResponse(res, 200, 'success', results);
  } catch (error) {
    handleError(res, 500, error); 
  }
};

module.exports = getResults;