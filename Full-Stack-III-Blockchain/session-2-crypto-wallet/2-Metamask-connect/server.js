
const express = require("express")
const path = require("path")

const app = express()

app.get("/", (req, res) => {
    console.log('request received by server..')
    res.sendFile(path.join(__dirname + "/index.html"))
})

const server = app.listen(5000)
const portNumber = server.address().port
console.log(`port: ${portNumber}`)