
// request - 3rd party module
var request = require('request');
// file system module
var fs = require('fs');
// zlib compression module using gzip
var zlib = require('zlib');

// create compression stream
var gzipStream = zlib.createGzip();

// create writable stream
var writableStream = fs.createWriteStream('output.html.gz');

// pipe the request to compression stream >> pipe >> writable stream 
request('http://www.google.ca')
    .pipe(gzipStream)
    .pipe(writableStream);