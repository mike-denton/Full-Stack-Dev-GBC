var express = require('express');
const { transaction } = require('../modules');
var router = express.Router();



router.get('/history', async function(req, res, next) {
   const history = await transaction.getTransactionHistory()
  res.send(history);
});

router.post('/send', async function(req, res, next) {
  console.log(`POST called =====>>>>> ${JSON.stringify(req.body)}`)
  if(!req.body || !req.body.data) {
    console.error(`transaction/send - request body is undefined.`)
    res.send(`error: request body not found`)
    return
  }
  const data = req.body.data;
  const source = data.source;
  const destination = data.destination;
  const amount = data.amount;
  console.log(`req: ${source} ${destination} ${amount}`)
  const receipt = 
    await transaction.sendTransaction(source, destination, amount)
    console.log(`transaction receipt: ${JSON.stringify(receipt)}`)
    res.send(receipt);
  });

module.exports = router;