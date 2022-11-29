// const Web3 = require('web3')
// const web3 = new Web3('https://api.mainnet-beta.solana.com')

const Web3 = require('web3')
const web3 = new Web3('http://localhost:8545')


web3.eth.getBlockNumber(function(error, result){ 
    if (!error)
      console.log("block number =>" + result)
  });

  web3.eth.getBlock('latest').then(console.log)

  web3.eth.getBlock('0x0eb220d9a489f5a12b6516efeb62081ab13cdf70cdb9cf936be30878e8890cd8')
  .then(block =>
    console.log({
        blockHash: block.hash,
        blockNumber: block.number
    })
    )

    web3.eth.getBlock('latest').then((latest) => {
        web3.eth.getBlock(latest.number).then((block) => {
            console.log(block.hash) 
        })
        
        // for (let i = 0; i < 10; i++) {
        //     web3.eth.getBlock(i).then((block) => {
        //         console.log(block.hash)
        //     })
        //}
    })


    const hash = '0x0eb220d9a489f5a12b6516efeb62081ab13cdf70cdb9cf936be30878e8890cd8'

    web3.eth.getTransactionFromBlock(hash).then((txn) => {
        console.log(txn)
    })
