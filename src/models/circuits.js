const sequelize = require('../config/sequelizeDb');
const { DataTypes } = require('sequelize');

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
  date: DataTypes.DATE,
},{
  tableName: 'circuits',
});

module.exports = Circuits;
