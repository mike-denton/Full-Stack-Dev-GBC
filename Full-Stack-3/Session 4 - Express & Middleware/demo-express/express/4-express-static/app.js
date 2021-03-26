
var express = require('express');
var app = express();
 
// middleware
app.use('/assets', express.static(__dirname + '/public') )


app.get('/', function (req, res) {
    console.log('get receieved!');
    console.log(__dirname);
	res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>');
});

var port = process.env.port || 3002;
app.listen(port);


