
const express = require('express')
const app = express()

const addressModule = require("./modules/addresses")

const test = {
    address: 'x0202020202022',
    gas: 400000
}
app.get('/hello', (req, res) => {
    res.send('Hello RPC')
})



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/ajax-request', async(req, res) => {

    const result = await addressModule.getAddresses()
    res.send(result)
})

app.listen(3000, () => { console.log('connected on PORT 3000')})