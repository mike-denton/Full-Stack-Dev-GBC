
const starWarsRelations = function(name) {
	x = "Luke, I am your ";
	
	switch (name) {
		case "Darth Vader":
			x += "father.";
			break;
		case "Leia" :
			x += "sister.";
			break;
		case "R2D2":
			x += "droid.";
			break;
		default:
			x += "i dont know you";
			break;
	}
	return x;
}

starWarsRelations("Darth Vader") // "Luke, I am your father."
starWarsRelations("Leia") // "Luke, I am your sister."
starWarsRelations("R2D2") // "Luke, I am your droid."

