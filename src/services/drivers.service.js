const { Drivers } = require('../models');
const baseRepository = require('../repositories/utilsRepository');

const createDriver = async (data) => {
  return baseRepository.create(Drivers, data);
};

const getDriver = async (id) => {
  return baseRepository.findById(Drivers, id);
};

const getDrivers = async () => {
  return baseRepository.findAll(Drivers);
};

const deleteDriver = async (id) => {
  return baseRepository.deleteById(Drivers, id);
};

module.exports = { createDriver, getDriver, getDrivers, deleteDriver };