const circuitService = require('../../services/circuits.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const getCircuit = async (req, res) => {
  const circuitId = req.params.id;
  let circuit;

  try {
    circuit = await circuitService.getCircuit(circuitId);
  } catch (error) {
    handleError(res, 500, error);
  }

  if (!circuit) { handleError(res, 404, 'Not Found'); return; }

  handleResponse(res, 200, 'success', circuit);
};

module.exports = getCircuit;