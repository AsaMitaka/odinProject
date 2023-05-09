const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },
    async function (username, password, done) {
      try {
        const user = await User.findOne({ username: username });

        if (!user) {
          return done(null, false, { message: 'Incorrect username' });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
          return done(null, false, { message: 'Incorrect password' });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);

module.exports = passport;
