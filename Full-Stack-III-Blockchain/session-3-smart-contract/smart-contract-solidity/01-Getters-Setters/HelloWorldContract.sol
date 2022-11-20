
pragma solidity ^0.4.18;

contract HelloWorldContract {
    string word = "Hello Word";
    function getWord () public constant returns(string) {
      return word;
    }

    function setWord(string newWord) public returns(string) {
      word = newWord;
      return word;
    }
}

