
const Web3 = require('web3')
const web3 = new Web3('http://localhost:8545')

console.log(web3)

console.log(web3.providers)

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))


// get a list of test-rpc accounts
console.log(web3.eth.getAccounts())

// const result = async () => await web3.eth.getAccounts()
// console.log(result)

// asynchronous, promise. use a callback function
web3.eth.getAccounts(function(err, res) {
    console.log(res)
})