
var express = require('express');
var app = express();
 
// ** environment variable - production server may have different port
var port = process.env.port || 3000;
app.listen(port);