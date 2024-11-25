const { Drivers, Teams } = require('../models');
const baseRepository = require('../repositories/utilsRepository');

const createDriver = async (data) => {
  return baseRepository.create(Drivers, data);
};

const getDriver = async (id) => {
  return baseRepository.findById(Drivers, id);
};

const getDrivers = async () => {
  return baseRepository.findAll(Drivers, 
    {
      include: [
        {
          model: Teams,
          as: 'team',
          attributes: ['name'], // Solo trae la columna "name" de Table2
        },
      ],
      attributes: ['id', 'name', 'surname'], // Trae columnas específicas de Table1
    },
  );
};

const deleteDriver = async (id) => {
  return baseRepository.deleteById(Drivers, id);
};

module.exports = { createDriver, getDriver, getDrivers, deleteDriver };