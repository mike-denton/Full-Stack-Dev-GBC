const web3Obj = require('./web3').getWeb3Obj();
const transactionModel = require('../models/transactionModel')


const sendTransaction = (source, destination, value) => {
    // using the promise
    return web3Obj.eth.sendTransaction({
      from: source,
      to: destination,
      value: value
  })
  .then(function(receipt){
      console.log(`Transaction sent successful ${JSON.stringify(receipt, null, 4)}`)
      //saveTransaction(source, destination, value, 'SUCCESS', receipt.gasUsed, receipt.transactionHash)
      return Promise.resolve(receipt)
  })
  .catch(function (err) {
      console.log(`Transaction errror ${err}`)
     // saveTransaction(source, destination, amount, 'FAILED', null, null)
      return Promise.reject(err)
  })

}

module.exports = {
    sendTransaction
}