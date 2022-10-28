var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('request url: ' + req.url);
    next();
})

app.post('/person', urlencodedParser, function(req, res) {
    console.log('form submitted!');
    res.send('Thank you!!');
    //console.log(req.firstname);
});
app.get('/', function(req, res) {
    //res.render('index', { ID: req.params,id });
    res.render('index');
});

app.get('/api', function(req, res) {
    res.json({firstname: 'mike', lastname: 'denton1'});
})
app.listen(port); 