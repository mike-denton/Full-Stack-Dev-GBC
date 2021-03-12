
const gretter = (myArray, counter = 2) => {

    let greetText = 'Hello ';

    for (var name of myArray) {
        console.log(`${greetText} ${name} `);
      }

}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

