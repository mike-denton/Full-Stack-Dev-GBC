// require request 3rd party module  - https://www.npmjs.com/package/request
var request = require('request');

// var data = request('http://google.ca');

// data.pipe(process.stdout);

// we can chain these together
request('http://google.ca').pipe(process.stdout);