
https://web3js.readthedocs.io/en/v1.7.1/getting-started.html#adding-web3

var logUtil = require('./modules/logUtils')

const Web3 = require('web3');

const web3Obj = new Web3('http://localhost:8545');


const sendTransaction = (source, destination) => {
      // using the promise
      web3Obj.eth.sendTransaction({
        from: source,
        to: destination,
        value: '5000'
    })
    .then(function(receipt){
        console.log(`Transaction sent successful ${JSON.stringify(receipt, null, 4)}`)
    })
    .catch(function (err) {
        console.log(`Transaction errror ${err}`)
    })

}
async function getAccount(index) {
    try {
        const accounts = await web3Obj.eth.getAccounts()
    
        if(!accounts) {
            console.error("No account returned...exiting..")
            return null;
        }
    
        const account = accounts[index]
        console.log(`account ${index}: ${account}`)
    
        return account;
    }
    catch (err) {
        console.error(`getAccount error: ${err}`)
    }
}
async function main () {
    
    const firstAccount = await getAccount(0);
    const secondAccount = await getAccount(1);

    if(!firstAccount || !secondAccount) {
        console.error(`invalid accounts...exiting`)
        return;
    }
    
    //logUtil.logger(web3Obj)

    sendTransaction(firstAccount, secondAccount)
}   

main()


