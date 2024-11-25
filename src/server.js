const http = require('http');
const app = require('./app');
// const sequelize = require('./config/sequelizeDb');
const db = require('./models');

const PORT = process.env.PORT || 3000;

// sequelize.authenticate().then(() => {
db.sequelize.sync().then(() => {
  // console.log('Connection to database has been established successfully.');
  console.log('Login and Database & tables created!');
  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`Server is running! URL: http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

