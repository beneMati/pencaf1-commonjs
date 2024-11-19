const fs = require('fs');
const path = require('path');
// const { Sequelize } = require('sequelize');
const sequelize = require('../config/sequelizeDb');
const db = {};

/* const sequelize = new Sequelize('pencaf1', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
}); */

fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.js') && file !== 'index.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file)); // (sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Models association
Object.keys(db).forEach((modelName) => {
  if(db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// console.log(db);

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;