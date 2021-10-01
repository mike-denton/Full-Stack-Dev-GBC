

// Students must be enrolled in at least 3 courses

var studentSchema = new Schema ({
	name: 		String,
	enrolled: 	{ type: Number, min: 3 }
});

// Students not allowed more than 5 courses

var studentSchema = new Schema ({
	name: 		String,
	enrolled: 	{ type: Number, max: 5 }
});

// Students allowed between 3 and 5 courses only

var studentSchema = new Schema ({
	name: 		String,
	enrolled: 	{ type: Number, min: 3, max: 5 }
});



var studentSchema = new Schema({
    email: {
      type: String,
      validate: function(email) {
        return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+[a-zA-Z0-9@-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
      }
    }
  });

