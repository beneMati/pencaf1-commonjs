const passport = require('passport');
const cookieStrategy = require('./cookies');

cookieStrategy(passport);

module.exports = passport;