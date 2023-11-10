const express = require('express');
const morgan = require('morgan');

const app = express();

// Use morgan middleware for logging with 'combined' format
app.use(morgan('combined'));

// Define a simple route for each HTTP method

// POST request
app.post('/create', (req, res) => {
    res.send('POST Request: Create a new resource');
});

// GET request
app.get('/read/:id', (req, res) => {
    const { id } = req.params;
    res.send(`GET Request: Read resource with ID ${id}`);
});

// DELETE request
app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    res.send(`DELETE Request: Delete resource with ID ${id}`);
});

// PUT request
app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    res.send(`PUT Request: Update resource with ID ${id}`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
