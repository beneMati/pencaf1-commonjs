const driverService = require('../../services/drivers.service');
const circuitService = require('../../services/circuits.service');
const handleError = require('../../utils/handleError');

const formResult = async (req,res) => {
  try {
    const drivers = await driverService.getDrivers(); 
    const circuits = await circuitService.getCircuits();
    res.render('results/form', { title: 'Create a Result', drivers, circuits });
  } catch (error) {
    handleError(res, 500, error);
  }
};

module.exports = formResult;