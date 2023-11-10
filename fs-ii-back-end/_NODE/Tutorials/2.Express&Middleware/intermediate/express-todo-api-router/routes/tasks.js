const express = require('express');
const router = express.Router();

const tasks = [{id: 3000, bookid: 50001}]; // An array to store tasks

// Middleware to log incoming requests
router.use((req, res, next) => {
    console.log(`${req.method} ${req.url}-${req.body}`);
    next();
});

// Define the GET endpoint to retrieve tasks
router.get('/', (req, res) => {
    //res.json(tasks);
    res.send("task"); /// express ===> response header ==> json
});

// Define the POST endpoint to create tasks
router.post('/', (req, res) => {
    debugger;
    try {
        console.log(`post received with req.body : ${JSON.stringify(req.body)}`)
        const { title, description } = req.body;
        const task = { title, description };
        console.log(`post received with data : ${JSON.stringify(task)}`)
        tasks.push(task);

        res.status(201).json(task); // null, undefined 
    } catch (ex) {
        res.status(404).send(`fatal error..${ex}`)
    }
  
});

// Implement update and delete endpoints here

module.exports = router;
