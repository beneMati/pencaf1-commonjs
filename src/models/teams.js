const sequelize = require('../config/sequelizeDb');
const { DataTypes } = require('sequelize');

const Teams = sequelize.define('Teams', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  tableName: 'teams',
});

module.exports = Teams;
