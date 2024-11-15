const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pencaf1', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
});

/* sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
    console.log(sequelize.models); // No me está cargando el modelo Driver, esta empty.
  })
  .catch((err) => {console.error('Error creating database & tables', err);}); */

module.exports = sequelize;
