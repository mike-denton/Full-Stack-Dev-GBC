const EventEmitter = require('events');

class MyCustomEmitter extends EventEmitter {
    // Your custom methods and properties here
}

const myEmitter = new MyCustomEmitter();

myEmitter.on('customEvent', () => {
    console.log('Custom event triggered');
});

module.exports = myEmitter
