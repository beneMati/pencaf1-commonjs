const router = require('express').Router();
// Circuits
const getAllCircuits = require('../controllers/circuits/getAll');
const createCircuit = require('../controllers/circuits/create');
const getCircuitById = require('../controllers/circuits/getById');
const deleteCircuitById = require('../controllers/circuits/deleteById');
// Drivers
const createDriver = require('../controllers/drivers/create');
const getAllDrivers = require('../controllers/drivers/getAll');
const getDriverById = require('../controllers/drivers/getById');
const deleteDriverById = require('../controllers/drivers/deleteById');
const formDriver = require('../controllers/drivers/form');
// Teams
const createTeam = require('../controllers/teams/create');
const getAllTeams = require('../controllers/teams/getAll');
const getTeamById = require('../controllers/teams/getById');
const deleteTeamById = require('../controllers/teams/deleteById');
// Results
const getAllResults = require('../controllers/results/getAll');
const createResult = require('../controllers/results/create');
const getResultById = require('../controllers/results/getById');
const deleteResultById = require('../controllers/results/deleteById');
const formResult = require('../controllers/results/form');
// Users
const getAllUsers = require('../controllers/users/getAll');
const createUser = require('../controllers/users/create');
const getUserById = require('../controllers/users/getById');
const deleteUserById = require('../controllers/users/deleteById');

// Circuits
router.get('/circuits', getAllCircuits);
router.get('/circuits/:id', getCircuitById);
router.post('/circuits', createCircuit);
router.delete('/circuits/:id', deleteCircuitById);

// Drivers
router.get('/drivers/new', formDriver);
router.get('/drivers', getAllDrivers);
router.get('/drivers/:id', getDriverById);
router.post('/drivers', createDriver);
router.delete('/drivers/:id', deleteDriverById);

// Teams
router.get('/teams', getAllTeams);
router.get('/teams/:id', getTeamById);
router.post('/teams', createTeam);
router.delete('/teams/:id', deleteTeamById);

// Results
router.get('/results/new', formResult);
router.get('/results', getAllResults);
router.get('/results/:id', getResultById);
router.post('/results', createResult);
router.delete('/results/:id', deleteResultById);

// Users
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUserById);

module.exports = router;