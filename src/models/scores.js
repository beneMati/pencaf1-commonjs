const sequelize = require('../config/sequelizeDb');
const { DataTypes } = require('sequelize');
// const Circuits = require('./circuits');
// const Users = require('./users');

const Scores = sequelize.define('Scores', {
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
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', key: 'id',
    },
  },
  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
},{
  tableName: 'scores',
  indexes: [
    {
      unique: true,
      fields: ['circuitId', 'userId'], // Add a unique composite index
    },
  ],
});

// Foreign Keys
Scores.associate = (models) => {
  Scores.belongsTo(models.Circuits, { foreignKey: 'circuitId' });
  Scores.belongsTo(models.Users, { foreignKey: 'userId' });
};

module.exports = Scores;
