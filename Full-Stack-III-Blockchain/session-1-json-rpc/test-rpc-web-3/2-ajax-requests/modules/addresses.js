var Web3 = require('web3');
var web3 = new Web3('http://localhost:8545')

module.exports.getAddresses = async() => {
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
    return accounts
}

// let accounts = []
// module.exports.getAddresses = async() => {
//     if(accounts.length === 0) {
//         console.log(`fetched the accounts...once`)
//         accounts = await web3.eth.getAccounts()
//     }
//     console.log(accounts)
//     return accounts
// }
// module.exports.refreshAddress = () => {
//     accounts = []
// }

