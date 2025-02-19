const { Sequelize } = require('sequelize');
const config = require('./database');

const env = process.env.NODE_ENV || 'test';
const { database, username, password, host, dialect, dialectOptions, port } = config[env];
// const { dialect } = config[env];
// TODO review this of use DATABASE_URL or ENV to config.
const connectionString = process.env.DATABASE_URL || 
  `mysql://${username}:${password}@${host}:${port}/${database}`;

console.log('Connection String:', connectionString);

const sequelize = new Sequelize(connectionString, {
  dialect: dialect,
  dialectOptions: dialectOptions,
});

/* sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
    console.log(sequelize.models); // No me está cargando el modelo Driver, esta empty.
  })
  .catch((err) => {console.error('Error creating database & tables', err);}); */

module.exports = sequelize;
