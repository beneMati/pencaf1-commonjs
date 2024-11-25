const driverService = require('../../services/drivers.service');
// const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');

const getDrivers = async (req, res) => {
  try {
    const drivers = await driverService.getDrivers();
    res.render('drivers/list', { title: 'Drivers List', drivers });
    // handleResponse(res, 200, 'success', drivers);
  } catch (error) {
    handleError(res, 500, error);   
  }
};

module.exports = getDrivers;