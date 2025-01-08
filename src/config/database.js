module.exports = {
  development: {
    username: 'root',
    password: 'admin',
    database: 'pencaf1',
    host: '127.0.0.1:3306',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: 'myrootpassword',
    database: 'pencaf1',
    host: '127.0.0.1:3306',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
};