// const fs = require('fs');
// const path = require('path');
// const { Sequelize } = require('sequelize');
const sequelize = require('../config/sequelizeDb');
// const db = {};

/* const sequelize = new Sequelize('pencaf1', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
}); */

// FIXME Me levanta un orden no correcto pra las dependencias, 
// drivers crea primero q teams y tieen un FK.
const Teams = require('./teams');
const Circuits = require('./circuits');
const Users = require('./users');
const Drivers = require('./drivers');
const Predictions = require('./predictions');
const Results = require('./results');
const Scores = require('./scores');

const models = { Teams, Circuits, Users, Drivers, Predictions, Results, Scores };
/* fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.js') && file !== 'index.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file)); // (sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }); */
require('./associations')(models);
// Models association
/* Object.keys(db).forEach((modelName) => {
  if(db[modelName].associate) {
    db[modelName].associate(db);
  }
}); */

// console.log(db);

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
module.exports = { 
  sequelize, 
  ...models,
};