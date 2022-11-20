var Web3 = require('web3');

const getWeb3Obj = () => {
    return new Web3("http://localhost:8545");
}

module.exports = {
    getWeb3Obj
}