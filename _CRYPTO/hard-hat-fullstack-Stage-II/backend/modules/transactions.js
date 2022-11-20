
const transactionModel = require('../models/transactionModel')

const getTransactionCount = async () => {
    // const nonce = await web3Obj.eth.getTransactionCount(firstAccount, 'latest'); 

    // console.log(`nonce: ${nonce}`)
    
}

const getTransactionHistory = async () => {
    const history = await transactionModel.find({})
    console.log(`transaction module: getTransactionHistory : ${history}`)
    return history;
}

const sendTransaction = (source, destination, value) => {
    // using the promise
//     return web3Obj.eth.sendTransaction({
//       from: source,
//       to: destination,
//       value: value
//   })
//   .then(function(receipt){
//       console.log(`Transaction sent successful ${JSON.stringify(receipt, null, 4)}`)
//       saveTransaction(source, destination, value, 'SUCCESS', receipt.gasUsed, receipt.transactionHash)
//       return Promise.resolve(receipt)
//   })
//   .catch(function (err) {
//       console.log(`Transaction errror ${err}`)
//       saveTransaction(source, destination, amount, 'FAILED', null, null)
//       return Promise.reject(err)
//   })

}

const saveTransaction = (source, destination, amount, status, gasUsed, receiptHash) => {
    console.log(`saveTransaction source: ${source}, destination: ${destination}, amount: ${amount}`)
    // let txn = new transactionModel({
    //     source: source,
    //     destination: destination,
    //     amount: amount,
    //     status: status,
    //     gasUsed: gasUsed,
    //     receiptHash: receiptHash
    // });

    // txn.save()
    // .then((data)=>{
    //     console.log(`Txn ${source} ${destination} ${amount} save to DB on ${new Date().toISOString()}`);
    //   })
    //   .catch((err)=>{
    //     console.log(`ERROR: ${err}`);
    //   });
}

module.exports = {
    getTransactionCount,
    sendTransaction,
    getTransactionHistory 
}