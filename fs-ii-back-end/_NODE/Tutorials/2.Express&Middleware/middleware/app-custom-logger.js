const express = require('express');
const app = express();

// Custom Logger Middleware
const customLogger = (req, res, next) => {
    const timestamp = new Date().toLocaleString();
    const method = req.method;
    const url = req.url;

    console.log(`[${timestamp}] ${method} request to ${url}`);

    next(); // Call the next middleware in the chain
};

// Use the custom logger middleware for all routes
app.use(customLogger);

// Route handlers
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
