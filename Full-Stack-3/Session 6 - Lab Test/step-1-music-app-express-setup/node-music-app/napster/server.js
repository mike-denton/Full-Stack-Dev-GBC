const express = require('express')
const path = require('path')
const app = express()

/// middleware ==> static
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  console.log(`${__dirname}'/index.htm'`)
  res.sendFile(path.join(__dirname + '/index.htm'))
})


app.listen(3000, function () {
  console.log('Listening on port 3000!')
})