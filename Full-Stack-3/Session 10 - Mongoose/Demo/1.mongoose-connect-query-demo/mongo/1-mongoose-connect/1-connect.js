
var mongoose = require('mongoose');

const connectionString ="mongodb://localhost:27017/mongoose-winter-2022";

mongoose.connect(connectionString)
.then(
       () => console.log("mongoose connected...")
  );

  const handleDisconnect = () => {
    mongoose.disconnect((err)=> console.log(`disconnecting..`))
  }
  setTimeout(handleDisconnect, 2000)
   ///asdfsdf