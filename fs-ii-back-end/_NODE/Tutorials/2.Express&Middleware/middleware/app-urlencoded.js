const express = require('express');
const app = express();

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Define a route to handle a POST request
app.post('/submit', (req, res) => {
    // Access the parsed data from the request body
    const { username, email } = req.body;

    // Do something with the data (e.g., save it to a database)
    // For simplicity, we'll just send a response back
    res.send(`Received data: Username - ${username}, Email - ${email}`);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

