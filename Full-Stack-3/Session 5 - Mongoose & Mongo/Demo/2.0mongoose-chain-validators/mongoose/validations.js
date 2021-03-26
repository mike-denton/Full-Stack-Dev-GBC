

var StudentSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      required: true
    },
    role: {
      type: String,
      enum: ['fulltime',  'parttime'],
      default: 'fulltime'
    },
    password: {
      type: String,
      min: 64,
      max: 128
    }
  });

  
  
var studentSchema = new Schema({
	name: 	{ type: String, required: true },
	address: String,
	city: 	 String,
	state:	 String,
	country: String,
	isActive:Bolean
});

// Add validator after schema is defined - via path API
studentSchema.path('country')
    .required(true, 'Country is required!');

