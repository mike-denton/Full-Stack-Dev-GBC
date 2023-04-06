
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let connectionString = "mongodb://localhost:27017/blockchain-explorer";;
mongoose.connect(connectionString);

//connection to mongoose
mongoose
 .connect(connectionString, { useNewUrlParser: true } )
 .then( () => { console.log("Mongoose connected successfully to Mongo DB"); },
   error => { console.log("Mongoose could not connected to database: " + error); }
 );

 const transactionSchema = new Schema({
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    amount: {
        type:String,
        required:true
    },
    status: {
        type: String,
        required: true
    },
    gasUsed: {
        type: String,
        required: false
    },
    receiptHash: {
        type: String,
        required: true
    }
}, { timestamps: true })

var Transaction = module.exports = mongoose.model('Transaction', transactionSchema);

Transaction.insertMany([
    {
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        destination: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
        amount: '300',
        status: 'SUCCESS',
        gasUsed: '21000',
        receiptHash: '0xf78a9ab3d7431286697d41d597de9a00b054b40bf9271e122ada2727e38713fe'
      },{
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        destination: '0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097',
        amount: '10',
        status: 'SUCCESS',
        gasUsed: '21000',
        receiptHash: '0xd9388d545619dda5c07e9232b19b6a6d8099b1907f503228332474de27dd9a71'
      },{
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        destination: '0xbDA5747bFD65F08deb54cb465eB87D40e51B197E',
        amount: '4000',
        status: 'SUCCESS',
        gasUsed: '21000',
        receiptHash: '0xb94a3c29af0c79093b4d820280cd7a123f5bdaad2f5492a8171176344b9359b7'
      }
]).then(function(){
    console.log("Transaction data inserted")  // Success
}).catch(function(error){
    console.log(`Error loading Transaction data`)      // Failure
});



