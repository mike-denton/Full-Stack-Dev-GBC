const LocalStrategy = require('passport-local').Strategy;

// Dummy user for demonstration (replace with your authentication logic)
const user = {
    id: 1,
    username: 'user',
    password: 'password',
};

module.exports = function (passport) {
    // Configure Passport.js for local authentication
    passport.use(new LocalStrategy((username, password, done) => {
        if (username === user.username && password === user.password) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect username or password' });
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        if (id === user.id) {
            done(null, user);
        } else {
            done({ message: 'User not found' }, null);
        }
    });
};
