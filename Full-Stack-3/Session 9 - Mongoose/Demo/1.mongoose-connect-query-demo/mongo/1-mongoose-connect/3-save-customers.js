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

/// SCHEMA 
var customerSchema = new Schema({
    name: String,
    address: String,
    status: String
});

// MODEL 

/// REUSABLE FUNCTION FOR SAVING!!!
const addCustomer = (name, address, status) => {
  // SAVE SECOND USER TO MONGO DB
  var customer = Customer({name: name, address: address, status: 'OK'})
  customer.save(function() {
    console.log(`**** ${name} ***`)
  })
  }



  addCustomer('mike', 'somewhere else');
  addCustomer('ric flair', 'charlotte');
  addCustomer('john', '44 street')
  


