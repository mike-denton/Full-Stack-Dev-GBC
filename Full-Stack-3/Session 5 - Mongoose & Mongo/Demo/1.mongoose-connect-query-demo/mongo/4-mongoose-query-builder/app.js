
var mongoose = require('mongoose');

const connectionString =
"mongodb://localhost:27017/mongoose-demo?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

mongoose.connect(connectionString, {
})
  .then(
	  () => console.log("Mongoose connected successfully "),
	  (error) => console.log("Mongoose could not connected to database : " + error)
);

var Schema = mongoose.Schema;
var customerSchema = new Schema({name: String,address: String});
var Customer = mongoose.model('Customer', customerSchema);


// get all the customers
Customer.findById({_id: 1 }, function(err, users) {
  if (err) throw err;
  
  // object of all the users
  console.log(users);
  });
  

  Customer.// Using query builder
    where('name').equals('Ghost').
    where('age').gt(17).lt(66).
    where('payment').in(['approved', 'pending']).
    limit(10).
    sort('occupation')
