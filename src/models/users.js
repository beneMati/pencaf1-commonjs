const sequelize = require('../config/sequelizeDb');
const { DataTypes } = require('sequelize');
// const Predictions = require('./predictions');
// const Scores = require('./scores');

const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    allowNull: false,
    defaultValue: 'user', // Por defecto, todos los usuarios son "user"
  },
},{
  tableName: 'users',
});

// Relationship
Users.associate = (models) => {
  Users.hasMany(models.Predictions, { foreignKey: 'userId' });
  Users.hasMany(models.Scores, { foreignKey: 'userId' });
};

module.exports = Users;
