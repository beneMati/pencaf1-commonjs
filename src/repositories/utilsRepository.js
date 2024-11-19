// const models = require('../config/sequelizeDb');

const utilsRepository = {
  findAll: async(modelName, options = {}) => {
    return modelName.findAll(options);
  },
  findById: async(modelName, id, options = {}) => {
    return modelName.findByPk(id, options);
  },
  create: async(modelName, data) => {
    return modelName.create(data);
  },
  updateById: async(modelName, id, data) => {
    const record = await modelName.findByPk(id);
    if(record) return record.update(data);

    return null;
  },
  deleteById: async(modelName, id) => {
    const record = await modelName.findByPk(id);
    if(record) {
      await record.destroy();
      return true;
    }
    return false;
  },
};

module.exports = utilsRepository;