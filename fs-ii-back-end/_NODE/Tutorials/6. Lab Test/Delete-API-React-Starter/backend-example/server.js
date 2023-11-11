const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());



// Route to delete an item by ID
app.delete('/api/items', (req, res) => {
    console.log(`DELETE request received from the server!`)
    res.sendStatus(204); // No content, success status
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
