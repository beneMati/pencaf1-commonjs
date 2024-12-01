const sequelize = require('../config/sequelizeDb');
const { DataTypes } = require('sequelize');
// const Circuits = require('./circuits');
// const Drivers = require('./drivers');

const Results = sequelize.define('Results', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  circuitId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Circuits', key: 'id',
    },
  },
  post1: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  post2: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  post3: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  post4: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  post5: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  post6: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  post7: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  post8: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  post9: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  post10: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
},{
  tableName: 'results',
  indexes: [
    {
      unique: true,
      fields: ['circuitId'], // Add a unique composite index
    },
  ],
});

// Foreign Keys
Results.associate = (models) => {
  Results.belongsTo(models.Circuits, { foreignKey: 'circuitId' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post1', as: 'Driver1' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post2', as: 'Driver2' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post3', as: 'Driver3' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post4', as: 'Driver4' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post5', as: 'Driver5' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post6', as: 'Driver6' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post7', as: 'Driver7' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post8', as: 'Driver8' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post9', as: 'Driver9' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post10', as: 'Driver10' });
};

module.exports = Results;
