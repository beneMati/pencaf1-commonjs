const router = require('express').Router();
const create = require('../controllers/teams/create');
const getAll = require('../controllers/teams/getAll');
const getById = require('../controllers/teams/getById');
const deleteById = require('../controllers/teams/deleteById');

router.get('/', getAll);

router.get('/:id', getById);

router.post('/', create);

router.delete('/:id', deleteById);

module.exports = router;