const express = require('express');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const flash = require('connect-flash');
const app = express();

// Import Passport.js configuration
const passport = require('./config/passport-config'); 

// Import the authentication routes
const authRoutes = require('./routes/auth');

// Middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // Configure connect-flash


// Mount the authentication routes
app.use('/', authRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs'); // Set the view engine to EJS
app.set('views', './views'); // Set the views directory
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
