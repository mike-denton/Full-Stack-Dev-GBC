var express = require('express');
var router = express.Router();

var calculator = require('./calculatorModule')

let bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

/* GET users listing. */
router.get('/details', function(req, res, next) {
  /// TODO: connect via web3/ether.js ===> hardhat...
  res.send('respond with a resource');
});



module.exports = router;
