const router = require('express').Router();
// Predictions
const getAllPredictions = require('../controllers/predictions/getAll');
const createPrediction = require('../controllers/predictions/create');
const getPredictionById = require('../controllers/predictions/getById');
const deletePredictionById = require('../controllers/predictions/deleteById');
const formPrediction = require('../controllers/predictions/form');
// Scores
const getAllScores = require('../controllers/scores/getAll');

// Predictions
router.get('/predictions/new', formPrediction);
router.get('/predictions', getAllPredictions);
router.get('/predictions/:id', getPredictionById);
router.post('/predictions', createPrediction);
router.delete('/predictions/:id', deletePredictionById);

// Scores
router.get('/scores', getAllScores);

module.exports = router;