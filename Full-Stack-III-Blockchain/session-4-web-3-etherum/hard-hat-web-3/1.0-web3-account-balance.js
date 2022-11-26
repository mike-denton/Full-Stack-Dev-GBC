var Web3 = require('web3');

var web3Obj = new Web3('http://localhost:8545');

let getBalance = (account) => {
    web3Obj.eth.getBalance(account)
    .then(balance => console.log(`account: ${account}: balance: ${balance}`))
}
let handleAccounts = (accounts) => {

    console.log(`account no: ${accounts}`)
    if(!accounts) return

    accounts.forEach(account => getBalance(account));
}

let getAccounts = () => {
    web3Obj.eth.getAccounts()
    .then(accounts => handleAccounts(accounts))
}


getAccounts();
    

