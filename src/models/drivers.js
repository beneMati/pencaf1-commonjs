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
      model: 'Teams',
      key: 'id',
    },
    onDelete: 'SET NULL',
  },
},{
  tableName: 'drivers',
});

// return Drivers;
// };
Drivers.associate = (models) => {
  Drivers.belongsTo(models.Teams, { foreignKey: 'teamId', as: 'team' });

  // Relationship with Predictions
  Drivers.hasMany(models.Predictions, { foreignKey: 'prediction1' });
  Drivers.hasMany(models.Predictions, { foreignKey: 'prediction2' });
  Drivers.hasMany(models.Predictions, { foreignKey: 'prediction3' });
  Drivers.hasMany(models.Predictions, { foreignKey: 'prediction4' });
  Drivers.hasMany(models.Predictions, { foreignKey: 'prediction5' });
  Drivers.hasMany(models.Predictions, { foreignKey: 'prediction6' });
  Drivers.hasMany(models.Predictions, { foreignKey: 'prediction7' });
  Drivers.hasMany(models.Predictions, { foreignKey: 'prediction8' });
  Drivers.hasMany(models.Predictions, { foreignKey: 'prediction9' });
  Drivers.hasMany(models.Predictions, { foreignKey: 'prediction10' });

  // Relationship with Results
  Drivers.hasMany(models.Results, { foreignKey: 'post1' });
  Drivers.hasMany(models.Results, { foreignKey: 'post2' });
  Drivers.hasMany(models.Results, { foreignKey: 'post3' });
  Drivers.hasMany(models.Results, { foreignKey: 'post4' });
  Drivers.hasMany(models.Results, { foreignKey: 'post5' });
  Drivers.hasMany(models.Results, { foreignKey: 'post6' });
  Drivers.hasMany(models.Results, { foreignKey: 'post7' });
  Drivers.hasMany(models.Results, { foreignKey: 'post8' });
  Drivers.hasMany(models.Results, { foreignKey: 'post9' });
  Drivers.hasMany(models.Results, { foreignKey: 'post10' });
};

module.exports = Drivers;
