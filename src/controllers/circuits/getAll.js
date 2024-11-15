const circuitService = require('../../services/circuits.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const getCircuits = async (req, res) => {
  try {
    const circuits = await circuitService.getCircuits();
    handleResponse(res, 200, 'success', circuits);
  } catch (error) {
    handleError(res, 500, error); 
  }
};

module.exports = getCircuits;