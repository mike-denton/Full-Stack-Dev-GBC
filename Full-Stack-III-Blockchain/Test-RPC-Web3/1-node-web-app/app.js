
const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.send('Hello RPC')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})


app.listen(3000, () => { console.log('connected on PORT 3000')})