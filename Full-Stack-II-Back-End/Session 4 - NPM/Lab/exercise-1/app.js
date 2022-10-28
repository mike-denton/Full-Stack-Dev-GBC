
var upperCase = require('uppercase');
 
const greeter = (msg) => {
    console.log(upperCase(msg)) //=> "STRİNG"
}

for(var i=0; i < 10; i++) {
    greeter('hello world')  // invokation...
}