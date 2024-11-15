const router = require('express').Router();
const getAll = require('../controllers/users/getAll');
const create = require('../controllers/users/create');
const getById = require('../controllers/users/getById');
const deleteById = require('../controllers/users/deleteById');

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