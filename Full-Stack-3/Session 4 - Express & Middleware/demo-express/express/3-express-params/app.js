
var express = require('express');
var app = express();
 
// matching routes
app.get('/person', function (req, res) {
	res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/person/:id/books/:bookId', function (req, res) {
	console.log(req.params)
	res.send('<html><head></head><body><h1>Person ID: ' + req.params.id + '</h1></body></html>');
});

var port = process.env.port || 3000;
app.listen(port);