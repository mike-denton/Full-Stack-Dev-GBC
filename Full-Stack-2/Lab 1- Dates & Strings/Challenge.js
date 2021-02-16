



const findingNemo = function (sentence) {
  
  const index = sentence.split(" ").indexOf("Nemo") + 1;
  return index >= 0
    ? "I found Nemo at " + index + " !"
    : "I can't find Nemo :(";
};

findingNemo("I am finding Nemo !"); //"I found Nemo at 4!"

findingNemo("Nemo is me"); // "I found Nemo at 1!"

findingNemo("I Nemo am"); // "I found Nemo at 2!"

findingNemo("Finding Dory"); // I can't find Nemo :(
