
var express = require('express');
var app = express();
 
app.get('/hello*', (req, res) => {
    res.send('Hello World!')
  })

// ** environment variable - production server may have different port
var port = process.env.port || 3000;
app.listen(port);