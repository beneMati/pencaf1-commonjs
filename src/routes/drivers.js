const router = require('express').Router();
const create = require('../controllers/drivers/create');
const getAll = require('../controllers/drivers/getAll');
const getById = require('../controllers/drivers/getById');
const deleteById = require('../controllers/drivers/deleteById');

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