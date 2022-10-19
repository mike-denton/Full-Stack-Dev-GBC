
const emptyArray = function(myArray) {

    if(!Array.isArray(myArray)) {
      throw new Error("not an array..")
    }
  //   while(myArray.length > 0) {
  //     myArray.pop();
  // }
  //   return myArray;
  return []
}

emptyArray([1,2,3])

console.log(emptyArray(["egg","bacon","toast","coffee","random","juice"]))