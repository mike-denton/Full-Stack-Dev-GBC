const colors = ['red', 'greEn', 'blue']

const capitalize = ([first, ...rest]) =>  // 'g' , 'reeen'
  first.toUpperCase() +  rest.join('').toLowerCase();
 

const capitalizedColors = colors.map(capitalize)

console.log(capitalizedColors)