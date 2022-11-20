var express = require('express');
var router = express.Router();
const { accounts } = require('../modules')

router.get('/', function(req, res, next) {
  console.log(`route accounts route called`)
  res.send('account default route');
});


router.get('/addresses', function(req, res, next) {
  console.log(`router account address called`)
  accounts.getAddresses()
    .then(accounts => res.send(accounts))
    .catch(err => res.end(err))
  //res.send(`${accounts.getAccounts()}`);
});

// Get a list of accounts and balances
router.get('/balances', function(req, res, next) {
  console.log(`router GET:account/balances called`)
  accounts.getAccountBalances()
  .then(accounts => {
    console.log(accounts)
    res.send(accounts)
  })
  .catch(err =>  {
      console.log(err)
      res.send(err)})
  });

  // Get a balance of an account
router.get('/balance', function(req, res, next) {
  console.log(`router GET:account/balance called: ${req.query.account}`)
  let account = req.query.account
  if(!account) {
    account = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  }
  accounts.getBalance(account)
  .then(balance => {
    console.log(`accountRoutes called: ${account}: ${balance}`)
    res.send({ account, balance})
  })
  .catch(err =>  {
      console.log(err)
      res.send(`error ${err}`)})
  });

module.exports = router;