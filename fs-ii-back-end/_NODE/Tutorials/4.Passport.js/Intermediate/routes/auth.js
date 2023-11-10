// routes/auth.js

const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/login')
});

// Registration route
router.get('/register', (req, res) => {
    // Render a registration form (create register.ejs view)
    res.render('register');
});

router.post('/register', (req, res) => {
    // Handle user registration logic
    // Typically, you would create a new user record and store it in your database
    // Redirect the user to the login page after registration
    res.redirect('/login');
});

// Login route
router.get('/login', (req, res) => {
    // Render a login form (create login.ejs view)
    res.render('login', { message: req.flash('error') }); // Pass flash messages to the view
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true,
}));

// Dashboard route (authenticated)
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    // Render the user's dashboard (create dashboard.ejs view)
    res.render('dashboard', { user: req.user }); // Pass the user object to the view
});



// Logout route
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error(err);
        }
        res.render('logout'); // Render the logout.ejs view
    });
});


// Middleware to check if the user is authenticated
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;
