
let StudentModel = require('./models/student')


let model = new StudentModel({
  fullName: 'Randy Savage'
})

model.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })


  //  var result = 
  //  { _id: '5a7bbbeebc3b49cb919da675',
  //   firstName: 'Randy',
  //   lastName: 'Savage',
  //   updatedAt: 2018-02-08T02:54:38.888Z,
  //   createdAt: 2018-02-08T02:54:38.888Z,
  //   __v: 0 }



    function ProfileQueryPlugin(schema) {
        schema.pre('find', () => {
              this.start = Date.now();
        })
    };
    
    schema.post('find', () => {
           // plugin - start date is used in find query
           //console.log(`Query time: ${Date.now() - this.start`);
    });

    



    module.exports = function timestamp(schema) {
        // Add the two fields to the schema
        schema.add({ 
          createdAt: Date,
          updatedAt: Date
        })
      
        // Create a pre-save hook
        schema.pre('save',  (next) => {
          let now = Date.now()
         
          this.updatedAt = now
          // Set a value for createdAt only if it is null
          if (!this.createdAt) {
            this.createdAt = now
          }
         // Call the next function in the pre-save chain
         next()    
        })
      }



let timestampPlugin = require('./plugins/timestamp')

studentSchema.plugin(timestampPlugin)
courseSchema.plugin(timestampPlugin)



var query = Student.findOne({name: "Ultimate Warrior"});

// A query is not a fully-fledged promise, 
// but it does have a `.then()`.
query.then(function (doc) {
  // use doc
});

// `.exec()` gives you a fully-fledged promise
var promise = query.exec();

promise.then(function (doc) {
  // use doc
});




var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var Promise = require('bluebird'); 
Promise.promisifyAll(mongoose); 


// callback style
User
.findOne({username:username})
.exec(function(err, user){
  // abbr..
});

// promise style
var Promise = require('bluebird');
Promise.resolve(User.findOne({username:username}).exec())
.then(function(user){
  // abbr..
});













