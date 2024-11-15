const driverService = require('../../services/drivers.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const createDriver = async (req,res) => {
  const { body } = req;

  try {
    const driver = await driverService.createDriver(body); 
    handleResponse(res, 201, 'success', driver);
  } catch (error) {
    handleError(res, 500, error);
  }
};

module.exports = createDriver;