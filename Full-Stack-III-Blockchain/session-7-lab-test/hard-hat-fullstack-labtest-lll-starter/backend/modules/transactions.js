

const sendTransaction = (source, destination, value) => {

    // Step 3: 
    // i. require web3 and configure to run on hardhat port 8545
    // ii. use web3 api to send transaction to the hardhat ethereum blockchain
    // iii. return the receipt object result from hardhat

    // dev tip: use the runner.js to isolate and build out the web 3 module here..
    console.log(`sendTransaction method called..${source}, ${destination}, ${value}`)
}

module.exports = {
    sendTransaction
}