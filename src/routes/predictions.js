const router = require('express').Router();
const getAll = require('../controllers/predictions/getAll');
const create = require('../controllers/predictions/create');
const getById = require('../controllers/predictions/getById');
const deleteById = require('../controllers/predictions/deleteById');
const form = require('../controllers/predictions/form');

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