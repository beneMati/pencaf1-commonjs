const router = require('express').Router();
const getAll = require('../controllers/circuits/getAll');
const create = require('../controllers/circuits/create');
const getById = require('../controllers/circuits/getById');
const deleteById = require('../controllers/circuits/deleteById');

router.get('/', getAll);

router.get('/:id', getById);

router.post('/', create);

router.put('/:id', (req, res) => {
  res.send('Hello World');
});

router.patch('/:id', (req, res) => {
  res.send('Hello World');
});

router.delete('/:id', deleteById);

module.exports = router;