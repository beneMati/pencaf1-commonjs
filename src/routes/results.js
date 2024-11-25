const router = require('express').Router();
const getAll = require('../controllers/results/getAll');
const create = require('../controllers/results/create');
const getById = require('../controllers/results/getById');
const deleteById = require('../controllers/results/deleteById');
const form = require('../controllers/results/form');

router.get('/new', form);

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