const driverService = require('../../services/drivers.service');
const circuitService = require('../../services/circuits.service');
const handleError = require('../../utils/handleError');

const formPrediction = async (req,res) => {
  try {
    const drivers = await driverService.getDrivers(); 
    const circuits = await circuitService.getCircuits();
    res.render('predictions/form', { 
      title: 'Create a Prediction', 
      drivers, 
      circuits, 
      role: req.cookies.user.role, 
    });
  } catch (error) {
    handleError(res, 500, error);
  }
};

module.exports = formPrediction;