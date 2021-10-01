
var mongoose = require('mongoose');

const connectionString = "mongodb://localhost:27017/mongoose-demo";

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


// get all the customers
Customer.find({}, function(err, users) {
	if (err) throw err;
	
	// object of all the users
	console.log(users);
});

