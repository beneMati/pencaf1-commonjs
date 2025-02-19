require('dotenv').config(); // Load environment variables

module.exports = {
  development: {
    username: 'root',
    password: 'admin',
    database: 'pencaf1',
    host: '127.0.0.1:3306',
    dialect: 'mysql',
  },
  test: {
    // eslint-disable-next-line camelcase
    use_env_variable: 'DATABASE_URL',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
  },
};