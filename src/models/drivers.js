const sequelize = require('../config/sequelizeDb');
const { DataTypes } = require('sequelize');
// const Teams = require('./teams');
// const Predictions = require('./predictions');
// const Results = require('./results');

// module.exports = (sequelize, DataTypes) => {
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

// return Drivers;
// };
// Drivers.associate = (models) => {
// Drivers.belongsTo(Teams, { foreignKey: 'teamId', as: 'team' });
// // Relationship with Predictions
// Drivers.hasMany(Predictions, { foreignKey: 'prediction1' });
// Drivers.hasMany(Predictions, { foreignKey: 'prediction2' });
// Drivers.hasMany(Predictions, { foreignKey: 'prediction3' });
// Drivers.hasMany(Predictions, { foreignKey: 'prediction4' });
// Drivers.hasMany(Predictions, { foreignKey: 'prediction5' });
// Drivers.hasMany(Predictions, { foreignKey: 'prediction6' });
// Drivers.hasMany(Predictions, { foreignKey: 'prediction7' });
// Drivers.hasMany(Predictions, { foreignKey: 'prediction8' });
// Drivers.hasMany(Predictions, { foreignKey: 'prediction9' });
// Drivers.hasMany(Predictions, { foreignKey: 'prediction10' });
// // Relationship with Results
// Drivers.hasMany(Results, { foreignKey: 'post1' });
// Drivers.hasMany(Results, { foreignKey: 'post2' });
// Drivers.hasMany(Results, { foreignKey: 'post3' });
// Drivers.hasMany(Results, { foreignKey: 'post4' });
// Drivers.hasMany(Results, { foreignKey: 'post5' });
// Drivers.hasMany(Results, { foreignKey: 'post6' });
// Drivers.hasMany(Results, { foreignKey: 'post7' });
// Drivers.hasMany(Results, { foreignKey: 'post8' });
// Drivers.hasMany(Results, { foreignKey: 'post9' });
// Drivers.hasMany(Results, { foreignKey: 'post10' });
// };

module.exports = Drivers;
