
const express = require('express');
// const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser')
var cors = require('cors')

 const accountRouter = require('./routes/accountRoutes');
 const transactionRouter = require('./routes/transactionRoutes');

const monngooseConnect = require('./mongooseConnect')

const app = express();
const PORT = 3001;

// app.use(logger)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


  app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    //res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
   
//   app.use(cors({
//     origin: ['http://localhost:3000'],
//     credentials: true
// }));
//enables cors
// app.use(cors({
//   'allowedHeaders': ['Content-Type'],
//   'origin': '*',
//   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   'preflightContinue': false
// }));


var router = express.Router();
app.use('/account', accountRouter);
app.use('/transaction', transactionRouter);




// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })




//module.exports = app
app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 3001')
});
