


const findCase = function (str) {

  if (str.toUpperCase() === str) {  // WHISPER... == WhIsPer...
    return "upper";
  } else if (str.toLowerCase() === str) { // whisper.. == WhIsPer..
    return "lower";
  } else {
    return "mixed";   // WhIsPer
  }
};

// const findCase = function (s) {
//   return s == s.toUpperCase()
//     ? "upper"
//     : s == s.toLowerCase()
//     ? "lower"
//     : "mixed";
// };


findCase("whisper...") // "lower"

findCase("SHOUT!") // "upper"

findCase("Quiet Voice") // "mixed"

