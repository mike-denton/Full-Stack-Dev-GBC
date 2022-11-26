
const express = require('express')
const app = express()

const test = {
    address: 'x0202020202022',
    gas: 400000
}
app.get('/hello', (req, res) => {
    res.send('Hello RPC')
})

var Web3 = require('web3');
var web3 = new Web3('http:localhost:4555')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/ajax-request', (req, res) => {
    //res.send('AJAX RESPONSE FROM SERVER!')
    //res.send(JSON.stringify(test))
    const accounts = web3.eth.getAccounts();
    res.send(accounts)
})

app.listen(3000, () => { console.log('connected on PORT 3000')})