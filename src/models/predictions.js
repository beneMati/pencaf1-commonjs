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
      model: 'users', key: 'id',
    },
  },
  circuitId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'circuits', key: 'id',
    },
  },
  prediction1: {
    type: DataTypes.INTEGER,
    references: {
      model: 'drivers', key: 'id',
    },
  },
  prediction2: {
    type: DataTypes.INTEGER,
    references: {
      model: 'drivers', key: 'id',
    },
  },
  prediction3: {
    type: DataTypes.INTEGER,
    references: {
      model: 'drivers', key: 'id',
    },
  },
  prediction4: {
    type: DataTypes.INTEGER,
    references: {
      model: 'drivers', key: 'id',
    },
  },
  prediction5: {
    type: DataTypes.INTEGER,
    references: {
      model: 'drivers', key: 'id',
    },
  },
  prediction6: {
    type: DataTypes.INTEGER,
    references: {
      model: 'drivers', key: 'id',
    },
  },
  prediction7: {
    type: DataTypes.INTEGER,
    references: {
      model: 'drivers', key: 'id',
    },
  },
  prediction8: {
    type: DataTypes.INTEGER,
    references: {
      model: 'drivers', key: 'id',
    },
  },
  prediction9: {
    type: DataTypes.INTEGER,
    references: {
      model: 'drivers', key: 'id',
    },
  },
  prediction10: {
    type: DataTypes.INTEGER,
    references: {
      model: 'drivers', key: 'id',
    },
  },
},{
  tableName: 'predictions',
});

// Foreign Keys
// Predictions.associate = (models) => {
// Predictions.belongsTo(Users, { foreignKey: 'userId' });
// Predictions.belongsTo(Circuits, { foreignKey: 'circuitId' });
// Predictions.belongsTo(Drivers, { foreignKey: 'prediction1' ,as: 'Driver1' });
// Predictions.belongsTo(Drivers, { foreignKey: 'prediction2' ,as: 'Driver2' });
// Predictions.belongsTo(Drivers, { foreignKey: 'prediction3' ,as: 'Driver3' });
// Predictions.belongsTo(Drivers, { foreignKey: 'prediction4' ,as: 'Driver4' });
// Predictions.belongsTo(Drivers, { foreignKey: 'prediction5' ,as: 'Driver5' });
// Predictions.belongsTo(Drivers, { foreignKey: 'prediction6' ,as: 'Driver6' });
// Predictions.belongsTo(Drivers, { foreignKey: 'prediction7' ,as: 'Driver7' });
// Predictions.belongsTo(Drivers, { foreignKey: 'prediction8' ,as: 'Driver8' });
// Predictions.belongsTo(Drivers, { foreignKey: 'prediction9' ,as: 'Driver9' });
// Predictions.belongsTo(Drivers, { foreignKey: 'prediction10', as: 'Driver10' });
// };

module.exports = Predictions;
