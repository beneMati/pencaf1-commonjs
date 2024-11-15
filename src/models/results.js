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
});

// Foreign Keys
Results.associate = (models) => {
  Results.belongsTo(models.Circuits, { foreignKey: 'circuitId' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post1' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post2' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post3' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post4' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post5' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post6' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post7' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post8' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post9' });
  Results.belongsTo(models.Drivers, { foreignKey: 'post10' });
};

module.exports = Results;
