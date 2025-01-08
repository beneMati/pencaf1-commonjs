const sequelize = require('../config/sequelizeDb');
const { DataTypes } = require('sequelize');

const Drivers = sequelize.define('Drivers', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: DataTypes.DATEONLY,
  teamId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'teams',
      key: 'id',
    },
    onDelete: 'SET NULL',
  },
},{
  tableName: 'drivers',
});

module.exports = Drivers;
