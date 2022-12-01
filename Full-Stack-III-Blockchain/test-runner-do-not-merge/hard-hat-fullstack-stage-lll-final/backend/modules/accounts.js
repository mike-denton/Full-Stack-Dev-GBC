
const web3Obj = require('./web3').getWeb3Obj();
const math = require('mathjs')


let getBalance = async (account) => {
  console.log(`getBalance module called..`)
  const balance = await web3Obj.eth.getBalance(account)
  const etherValue = web3Obj.utils.fromWei(balance, 'ether');
  //console.log(`account: ${account}: balance: ${balance}`)
  return Promise.resolve(math.round(etherValue, 10))
}


let handleAccounts = async (accounts) => {

    console.log(`account no: ${accounts}`)
    if(!accounts) return

    const data = []

  for (const account of accounts) {
    const balance = await getBalance(account);
    data.push(`account: ${account} - balance: ${balance}`)
  }
    console.log(`handleAccounts: ${data}`)
    return Promise.resolve(data);
}

let getAccountBalances = async () => {

    const account = await getAccounts();
    const balances = await handleAccounts(account)

    return balances;
}

let getAddresses = async () => {
    return await web3Obj.eth.getAccounts()
}

module.exports = {
    getBalance,
    getAccountBalances,
    getAddresses
}