

// function gretter(myArray) {

//     var greetText = 'Hello     ';

//     for (var index = 0; index < myArray.length; index++) {
//         console.log(greetText + myArray[index]);
//       }

// }

const greeter = (myArray) => {
  myArray.forEach(element => {
    console.log(`Hello  ${element}`)
  });
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);



const difference = (value) => {
  const calc = 13 - value;
  return (value > 13) ? calc * calc : calc;
}

difference(5)