
var express = require('express');
var app = express();
 
// middleware
app.use('/assets', express.static(__dirname + '/public') )


// create your own middleware, then invoke next() 
app.use('/', function (req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

app.get('/', function (req, res) {
    console.log('get receieved!');
	res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>');
    //res.render("index.html");
});



var port = process.env.port || 3002;
app.listen(port);


