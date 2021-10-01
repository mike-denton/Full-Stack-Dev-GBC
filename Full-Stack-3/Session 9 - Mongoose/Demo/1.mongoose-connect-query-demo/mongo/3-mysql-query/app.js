var express = require('express');
var app = express();
var mysql = require('mysql');

var port = process.env.PORT || 3000;

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	
	var con = mysql.createConnection({
		host: "localhost",
		user: "test",
		password: "test",
		database: "customers"
	});
	
	con.query('SELECT Customer.ID, Name, Address FROM Customer INNER JOIN CustomerAddresses ON Customer.ID = CustomerAddresses.CustomerID ',
			console.log(rows[0].Firstname);
		}
	);
	
	next();
});
