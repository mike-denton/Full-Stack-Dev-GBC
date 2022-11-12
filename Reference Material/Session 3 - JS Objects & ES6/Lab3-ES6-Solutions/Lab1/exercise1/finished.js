
const gretter = (myArray, counter = 2) => {

    for (var name of myArray) {
        console.log(` Hello ${name} `);
      }

}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

