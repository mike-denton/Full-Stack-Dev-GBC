const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Define a user model (you can replace this with your actual user model)
const users = [
    { id: 1, username: 'user', password: 'password' },
    // Add more user objects as needed
];

passport.use(new LocalStrategy((username, password, done) => {
    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
        return done(null, false, { message: 'Incorrect username or password' });
    }

    return done(null, user);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const user = users.find((u) => u.id === id);
    done(null, user);
});

module.exports = passport;
