

//console.log('stdout is writable? ' + process.stdout.writable);

//process.stdout.write('Hello!');
//process.stdout.write(' Goodbye...');


var fs = require("fs");

var stream = fs.createWriteStream("data.txt");

for(var i=0; i < 100; i++)
stream.write("this an appended line...");


stream.end(() => {
    console.log("stream => no more data")
})



stream.close(() => {
    console.log("stream => has closed..")
})