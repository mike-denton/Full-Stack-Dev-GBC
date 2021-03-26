
var mongoose = require('mongoose');

const connectionString =
"mongodb://localhost:27017/mongoose-demo-fullstack";

const handleSuccess = () => console.log("Mongoose connected successfully "); // resolve()
const handleError =  (error) => console.log("Mongoose could not connected to database : " + error); // reject()


mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
.then(
        handleSuccess,    // () => console.log("mongoose connected")
        handleError      // (err) => console.log(err)
  );

  const handleDisconnect = () => {
    mongoose.disconnect((err)=> console.log(`disconnecting..`))
  }
  setTimeout(handleDisconnect, 5000)
   ///asdfsdf