
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
    // notice no header/content type here - express looks at data and assigns
	res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/greet', function(req, res) {
    console.log('greet');
    res.end();
})
var port = process.env.port || 3000;
app.listen(port);