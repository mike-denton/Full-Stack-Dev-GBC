
function gretter(myArray, counter) {

    var greetText = 'Hello ';

    for (var index = 0; index < myArray.length; index++) {
        console.log(greetText + myArray[index]);
      }

}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

