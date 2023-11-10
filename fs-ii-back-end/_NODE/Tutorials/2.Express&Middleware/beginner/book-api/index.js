// app.js
const express = require('express'); // Import Express.js
const app = express(); // Create an Express app instance
const port = 3000; // Define the port your server will listen on
const books = require('./modules/books'); // Require the books module

// Middleware to parse JSON requests
app.use(express.json());

// Define a route to get all books
app.get('/api/books', (req, res) => {
    res.json(books); // Send a JSON response containing the books array
});

app.get('/task', (req, res) => {
    res.json(books); // Send a JSON response containing the books array
});



// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
