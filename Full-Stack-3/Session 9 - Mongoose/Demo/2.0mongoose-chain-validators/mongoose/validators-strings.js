

// String - Match Validator
var regExp = /[a-zA-Z]/;

var studentSchema = new Schema({
	name: { 
		type: String,
		required: true,
		match: regExp }
	// abbr..
	
});


// String - Enum Validator
var courses = ['COMP3123', 'COMP3133' ];

var couresSchema = new Schema({
	// abbr..
	courses : {
		type: String,
		required: true,
		enum: courses
	}
});

