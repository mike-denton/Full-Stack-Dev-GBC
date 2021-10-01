// require request 3rd party module  - https://www.npmjs.com/package/request
var request = require('request');

// var s = request('http://google.ca');

// s.pipe(process.stdout);

// we can chain these together
request('http://google.ca').pipe(process.stdout);