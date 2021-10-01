var express = require('express');
var app = express();
var mongoose = require('mongoose');


const connectionString =
"mongodb://localhost:27017/mongoose-demo";

mongoose.connect(connectionString, {
})
  .then(
	  () => console.log("Mongoose connected successfully "),
	  (error) => console.log("Mongoose could not connected to database : " + error)
);
var Schema = mongoose.Schema;

var customerSchema = new Schema(
	{	name: String,
	 	address: String}
	 );
	 
var Customer = mongoose.model('Customer', customerSchema);

var myMiddleware = function (req, res, next) {
	console.log('Request Url:' + req.url);
	
    	// get all the customers
	Customer.find({}, function(err, users) {
		if (err) throw err;
		
		// object of all the users
		console.log(users);
	});
	next();  /// =====> go to next ====>
}


app.use('/', myMiddleware);

app.get('/', (req, res) => {
	console.log(`get request received....`)
    res.send('hello!') // ====> end response => res.end , res.json()
})

var port = process.env.PORT || 3006;
app.listen(port, () => console.log(`server started on port ${port}`));