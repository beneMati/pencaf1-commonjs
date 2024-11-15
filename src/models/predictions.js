const sequelize = require('../config/sequelizeDb');
const { DataTypes } = require('sequelize');
// const Users = require('./users');
// const Circuits = require('./circuits');
// const Drivers = require('./drivers');

const Predictions = sequelize.define('Predictions', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', key: 'id',
    },
  },
  circuitId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Circuits', key: 'id',
    },
  },
  prediction1: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  prediction2: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  prediction3: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  prediction4: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  prediction5: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  prediction6: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  prediction7: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  prediction8: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  prediction9: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
  prediction10: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Drivers', key: 'id',
    },
  },
},{
  tableName: 'predictions',
});

// Foreign Keys
Predictions.associate = (models) => {
  Predictions.belongsTo(models.Users, { foreignKey: 'userId' });
  Predictions.belongsTo(models.Circuits, { foreignKey: 'circuitId' });
  Predictions.belongsTo(models.Drivers, { foreignKey: 'prediction1' });
  Predictions.belongsTo(models.Drivers, { foreignKey: 'prediction2' });
  Predictions.belongsTo(models.Drivers, { foreignKey: 'prediction3' });
  Predictions.belongsTo(models.Drivers, { foreignKey: 'prediction4' });
  Predictions.belongsTo(models.Drivers, { foreignKey: 'prediction5' });
  Predictions.belongsTo(models.Drivers, { foreignKey: 'prediction6' });
  Predictions.belongsTo(models.Drivers, { foreignKey: 'prediction7' });
  Predictions.belongsTo(models.Drivers, { foreignKey: 'prediction8' });
  Predictions.belongsTo(models.Drivers, { foreignKey: 'prediction9' });
  Predictions.belongsTo(models.Drivers, { dforeignKey: 'prediction10' });
};

module.exports = Predictions;
