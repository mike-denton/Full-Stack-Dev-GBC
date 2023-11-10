const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.post('/api/posts', (req, res) => {
    // Access request body data using req.body
    const postData = req.body;
    // Process the data as needed
    res.json({ message: 'Post received', data: postData });
});

app.listen(3005, () => {
    console.log('Server is running on port 3005');
});
