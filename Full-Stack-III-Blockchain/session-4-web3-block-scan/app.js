var Web3 = require('web3');
// connect TEST-RPC or https://ethereumnodes.com/ or https://infura.io/
// https://polygon-rpc.com, https://rpc.flashbots.net
var web3Provider =  new Web3(new Web3.providers.HttpProvider('https://rpc.flashbots.net')); //http://localhost:8545
var web3 = new Web3(web3Provider);
web3.eth.getBlockNumber().then((result) => {
  console.log("Latest Ethereum Block is ",result);
});

const accounts = web3.eth.getAccounts().then((result) => console.log(result))
    
