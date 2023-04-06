var express = require('express');
const { transaction } = require('../modules');
var router = express.Router();


router.post('/send', async function(req, res) {
  console.log(`POST called =====>>>>> ${JSON.stringify(req.body)}`)

  // Step 2: 
  // i. get the post params from the request
  // ii. call the module sendtransaction method and pass the params
  // iii. send the returned receipt in the response
  transaction.sendTransaction(')

  res.send('OK!')
  
  });

module.exports = router;