const appendMyArray = (myArray, value) => {
    
    try {
         myArray.push(value);
     }
     catch (e) {
       console.error(e.message);
     }
     finally {
      console.log(`exiting..myArray:${myArray} `);
      }
    }
    
    
    appendMyArray([53, 54], 55)
    appendMyArray('xyz', 100)
    appendMyArray({'make': 'Tesla', model: 'S'}, 5)
    
    