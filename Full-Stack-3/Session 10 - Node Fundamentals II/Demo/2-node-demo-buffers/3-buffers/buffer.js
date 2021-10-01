
var num = new Buffer(1000)
// HEXIDECIAL....
num.writeUInt8(0x3, 0);
num.writeUInt8(0x4, 1);
num.writeUInt8(0x23, 2);
num.writeUInt8(0x42, 3);

console.log(num);
//https://nodejs.org/docs/v0.6.0/api/buffers.html#buffer.writeUInt8
// <Buffer 03 04 23 42>
console.log(num)
//console.log(num.toString('hex'))