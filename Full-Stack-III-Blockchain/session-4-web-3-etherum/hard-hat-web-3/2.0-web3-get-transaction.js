const Web3 = require('web3');

const web3Obj = new Web3('http://localhost:8545');



const main = async () => {
    
    const accounts = await web3Obj.eth.getAccounts()
    
    if(!accounts) {
        console.error("No account returned...exiting..")
    }

    console.log(accounts)
    
    const firstAccount = accounts[0]
    console.log(`first account: ${firstAccount}`)
    // nonce starts counting from 0
    const nonce = await web3Obj.eth.getTransactionCount(firstAccount, 'latest'); 

    console.log(`nonce: ${nonce}`)
}

main()