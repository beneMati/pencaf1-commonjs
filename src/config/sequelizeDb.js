const { Sequelize } = require('sequelize');
const config = require('./database');

const env = process.env.NODE_ENV || 'development';
const { database, username, password, host, dialect } = config[env];

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  dialectOptions: {
    connectTimeout: 10000,
  },
});

/* sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
    console.log(sequelize.models); // No me está cargando el modelo Driver, esta empty.
  })
  .catch((err) => {console.error('Error creating database & tables', err);}); */

module.exports = sequelize;
