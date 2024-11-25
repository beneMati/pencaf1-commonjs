const circuitService = require('../../services/circuits.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const createCircuit = async (req,res) => {
  const { body } = req;

  try {
    const circuit = await circuitService.createCircuit(body); 
    handleResponse(res, 201, 'success', circuit);
  } catch (error) {
    handleError(res, 500, error);
  }
};

module.exports = createCircuit;