const driverService = require('../../services/drivers.service');
const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const getDriver = async (req, res) => {
  const driverId = req.params.id;
  let driver;

  try {
    driver = await driverService.getDriver(driverId);
  } catch (error) {
    handleError(res, 500, error);
  }

  if (!driver) { handleError(res, 404, 'Not Found'); return; }

  handleResponse(res, 200, 'success', driver);
};

module.exports = getDriver;