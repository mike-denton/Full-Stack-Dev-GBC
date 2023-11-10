const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Import Passport.js configuration from passport-config.js
require('./passport-config')(passport);

// Protected route
app.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.send(`Welcome, ${req.user.username}! This is the protected dashboard.`);
});

// Define a login route
app.get('/login', (req, res) => {
    res.send('Login Page'); // You can render an actual login page here
});

// Define a POST route for handling login credentials
app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',   
}));

// Middleware to check if the user is authenticated
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
