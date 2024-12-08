const resultService = require('../../services/results.service');
const handleError = require('../../utils/handleError');
const handleValidator = require('../../utils/handleValidator');
const resultSchema = require('../../validators/resultSchema');
const processScores = require('../../use-cases/scores/processScore');

const createResult = [
  resultSchema,
  handleValidator,
  async (req,res) => {
    const { body } = req;
    let result;

    try {
      result = await resultService.createOrUpdateResult(
        { circuitId: body.circuitId }, 
        body,
      ); 
      // res.redirect('/admin/results');
    } catch (error) {
      return handleError(res, 500, error);
    }

    try {
      await processScores(result[0].circuitId);
    } catch (error) {
      return handleError(res, 500, error);
    }

    res.redirect('/admin/results');
    
    /*
    // Segun la estrategia o que debo contemplar.
    // 1- Pocos usuarios, que el administrador espere.
    //  a- Así el usuario si va hacia la página scores, va estar la data.
    // 2- Si voy por algo asincrono, debería agregar status de sync.
    //  a- Así si está los scores en proceso de calculo, ver un mensaje en process.
    // processScores(result[0].circuitId).catch((error) => {
    //  console.error('Error processing scores:', error);
    // });
    */
  },
];

module.exports = createResult;