

const hasFriday13 = function(month, year) {
  
	var date = new Date(year +"-" +month + " 13")
  var result = date.getDay() == 5 ?
    "It's Friday the 13th!" :
    "Crystal Lake."

  return result;
}

hasFriday13(3, 2020) // It's Friday the 13th!

hasFriday13(10, 2017) // It's Friday the 13th!

hasFriday13(1, 1985) // Crystal Lake.

