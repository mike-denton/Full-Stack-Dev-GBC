
const emptyArray = function(myArray) {

    if(!Array.isArray(myArray)) {
      throw new Error("not an array..")
      console.error("not an array..")
    }
    while(myArray.length > 0) {
      myArray.pop();
  }
    return myArray;
}

//console.log(emptyArray([1,2,3]))

//console.log(emptyArray(["egg","bacon","toast","coffee","random","juice"]));

emptyArray(true)