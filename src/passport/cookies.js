const CookieStrategy = require('passport-cookie').Strategy;
const userService = require('../services/users.service');

const cookieStrategy = (passport) => {
  passport.use(
    new CookieStrategy({
      cookieName: 'user',
    },async (token, done) => {
      let user;

      try {
        user = await userService.getUser(token.id);
      } catch (error) {
        return done(error);
      }

      if (!user) return done(null, false, { message: 'Not Authenticated User' });

      return done(null, user);
    }),
  );
};

module.exports = cookieStrategy;