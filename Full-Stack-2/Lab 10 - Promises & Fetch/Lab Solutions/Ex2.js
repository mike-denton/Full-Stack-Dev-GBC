
const tryCatchFinally = () => {
    try {
        throw new Error('Throwing an error');
     }
     catch (e) { 
       console.error(e.message);
     }
     finally {
      console.log('Runs finally');
     }
}

tryCatchFinally();

