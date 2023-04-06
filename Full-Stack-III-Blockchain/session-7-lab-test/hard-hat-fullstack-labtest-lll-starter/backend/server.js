
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

 const transactionRouter = require('./routes/transactionRoutes');

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// header permissions, may be needed here to prevent cors errors when posting across localhost on different ports
  app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.use('/transaction', transactionRouter);


app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 3001')
});
