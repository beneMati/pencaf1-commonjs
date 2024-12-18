const driverService = require('../../services/drivers.service');
// const handleResponse = require('../../utils/handleResponse');
const handleError = require('../../utils/handleError');
const handleValidator = require('../../utils/handleValidator');
const driverSchema = require('../../validators/driverSchema');

const createDriver = [
  driverSchema,
  handleValidator,
  async (req,res) => {
    const { body } = req;

    try {
      await driverService.createDriver(body); 
      // handleResponse(res, 201, 'success', driver);
      res.redirect('/admin/drivers');
    } catch (error) {
      handleError(res, 500, error);
    }
  },
];

module.exports = createDriver;