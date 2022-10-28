// require request 3rd party module  - https://www.npmjs.com/package/request
var request = require('request');

// require in-built module - file system - https://nodejs.org/dist/latest-v6.x/docs/api/fs.html
var fs = require('fs');

// use get request for google markup data
// response is readable stream >> pipe data into writable stream >> output file
request('http://google.ca')
    .pipe(fs.createWriteStream('output.html'));