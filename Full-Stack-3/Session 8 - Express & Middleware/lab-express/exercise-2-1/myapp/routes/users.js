var express = require('express');
var router = express.Router();

let bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/", (req, res) => {
  for (const objKey in req.body) {
    console.log(`${objKey}: ${req.body[objKey]}`);
  }
  res.send("POST received!");
});

module.exports = router;
