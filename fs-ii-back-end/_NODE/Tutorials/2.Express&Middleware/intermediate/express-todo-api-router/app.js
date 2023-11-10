const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Import the tasks router
const tasksRouter = require('./routes/tasks');

// Use the tasks router for routes starting with '/tasks'
app.use('/tasks', tasksRouter);

// Define the port for your server
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
