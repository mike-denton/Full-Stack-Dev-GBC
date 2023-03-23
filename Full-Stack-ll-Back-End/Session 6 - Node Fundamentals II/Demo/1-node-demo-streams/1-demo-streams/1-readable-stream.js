// require 3rd party module - request - https://www.npmjs.com/package/request
var request = require('request');

// assign the request module to variable
var rm = request('http://georgebrown.ca');

// ** request module, inherits from Event Emitter and it's events

// subscribe to the on event and handle the incoming chunks of request data
rm.on('data', function (chunk) {
    console.log('>>> Data >>> ' + chunk);
});

// subscribe to the on 'end' event to handle when the request ends.
rm.on('end', function() {
    console.log('***** Done! ******')
})

console.log('finished');