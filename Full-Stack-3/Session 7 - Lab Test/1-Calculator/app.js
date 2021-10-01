var calc = require('./calculator');

console.log('multiply 6 * 6 equals: ' + calc.multiplyTwoNumbers(6, 6));
console.log('even doubler 4 equals: ' + calc.evenDoubler(4))

console.error('multiply true * false equals: ' + calc.multiplyTwoNumbers(true, false));
console.log('even doubler [] equals: ' + calc.evenDoubler([]))