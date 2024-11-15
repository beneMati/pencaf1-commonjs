const sequelize = require('../config/sequelizeDb');
const { DataTypes } = require('sequelize');
// const Predictions = require('./predictions');
// const Results = require('./results');
// const Scores = require('./scores');

const Circuits = sequelize.define('Circuits', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: DataTypes.DATEONLY,
},{
  tableName: 'circuits',
});

// Relationship
Circuits.associate = (models) => {
  Circuits.hasMany(models.Predictions, { foreignKey: 'circuitId' });
  Circuits.hasOne(models.Results, { foreignKey: 'circuitId' });
  Circuits.hasMany(models.Scores, { foreignKey: 'circuitId' });
};

module.exports = Circuits;
