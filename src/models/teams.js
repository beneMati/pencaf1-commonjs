const sequelize = require('../config/sequelizeDb');
const { DataTypes } = require('sequelize');
// const Drivers = require('./drivers');

// module.exports = (sequelize, DataTypes) => {
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

// return Drivers;
// };
// Teams.associate = (models) => {
// Teams.hasMany(Drivers, { foreignKey:'teamId', as: 'drivers' });
// };

module.exports = Teams;
