const colors = ['red', 'green', 'blue']

const capitalize = ([first, ...rest]) =>
  first.toUpperCase() +  rest.join('').toLowerCase();
 

const capitalizedColors = colors.map(capitalize)

const colors = ['red', 'green', 'blue']
// code...
console.log(capitalizedColors)

// Output n
['Red', 'Green', 'Blue']

